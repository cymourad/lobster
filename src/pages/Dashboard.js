/**
 * This page gives the user access to their historical and current data.
 * They can monitor their posture stats in a live session.
 * They can also monitor their progress over the session.
 */

import React, { useState, useEffect } from "react";
import SessionInfoForm from "./dashboard/SessionInfoForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import SessionChart from "./dashboard/SessionChart";
import ScoreCircle from "./dashboard/ScoreCircle";
import Recommendations from "./dashboard/Recommendations";

import axios from "axios";
import { BACK_END_ROUTE } from "../resources/routes/backEndRoutes";

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null); // to show what's happening in back-end

	const [userEmail, setUserEmail] = useState("husseinalkasake+10@gmail.com");
	const [userID, setUserID] = useState(16); // the user ID for which we retreieve data
	const [sessionID, setSessionID] = useState(368); // the session ID that we are exploring
	const [sessionInfoIsEditable, setSessionInfoIsEditable] = useState(false);

	const [currentScore, setCurrentScore] = useState(0); // the latest score of the user

	const [currentRecommendations, setCurrentRecommendations] = useState([]); // list of recommendations to improve posture

	/**
	 * All the scores and recommendations that user had since beginning of session
	 * Each object has the following properties:
	 * - y: [number] the score
	 * - tips: [array of strings] , each string is the user_message given at that time
	 */
	const [sessionSittingHistory, setSessionSittingHistory] = useState([]);
	const [sessionStandingHistory, setSessionStandingHistory] = useState([]);

	const fetchSessionInfo = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`${BACK_END_ROUTE.GET.SESSION_SUMMARY}/${userID}/${sessionID}`
			);

			const { average, sitting, standing } = response.data.results;

			[
				{
					results: sitting,
					setSessionHistory: setSessionSittingHistory,
				},
				{
					results: standing,
					setSessionHistory: setSessionStandingHistory,
				},
			].forEach(({ results, setSessionHistory }) => {
				if (results) {
					let graphData = [];
					const objectArray = Object.entries(results);

					objectArray.forEach(([key, value]) => {
						let tips = {
							tiredness: "✅ Doing well.",
							monitor: "✅ Perfect height.",
							elbow: "✅ Perfect posture.",
							back: "✅ Perfect posture.",
							chair: "✅ Perfect hieght.",
							desk: "✅ Perfect height.",
							face: "✅ Perfect posture.",
							feet: "✅ Perfect posture.",
						};

						// flatten value.recommendations to an array of user_message and put it under tips
						value.recommendations.forEach(
							(recommendation) =>
								// TODO should we instead put the property name?
								(tips[recommendation.property] =
									"❌ " + recommendation.user_message)
						);

						graphData.push({
							x: new Date(key * 1000), // convert unix timestamp to date object
							y: Math.round(value.score),
							...tips,
						});
					});

					setSessionHistory(graphData);
				}
			});

			// set current score and recommendation

			const { score, recommendations } = average;

			setCurrentScore(score);

			console.log(currentRecommendations);

			if (!isEqual(recommendations, currentRecommendations)) {
				showNotification();
				setCurrentRecommendations(recommendations);
			}

			setError(null); // clear error message
		} catch (e) {
			console.log(e);

			setError(<p style={{ color: "red" }}>Error fetching session!</p>);
			setCurrentScore(0);
			setCurrentRecommendations([]);
			setSessionSittingHistory([]);
			setSessionStandingHistory([]);
		}
		setIsLoading(false);
	};

	const showNotification = () => {
		const options = {
			body: "We have a few recommendations to correct your posture.",
			// body:
			// 	"Looks like you are getting tired of sitting! Maybe it's time to stand.",
			icon:
				"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/lobster_1f99e.png",
			dir: "ltr",
		};
		new Notification("Hey", options);
	};

	useEffect(
		() => {
			// check if browser supports notifications and if so, get permission to send them
			if (!("Notification" in window)) {
				console.log("This browser does not support desktop notification");
			} else {
				Notification.requestPermission();
			}

			fetchSessionInfo(); // run it when first render

			// const interval = setInterval(
			// 	() => {
			// 		fetchSessionInfo();
			// 	},
			// 	1 * 60 * 1000 // interval in msec
			// );
			// return () => clearInterval(interval);
		},
		[] // only once when page first loads
	);

	return (
		<div>
			<div style={{ textAlign: "center", margin: 50 }}>
				<SessionInfoForm
					userEmail={userEmail}
					setUserEmail={setUserEmail}
					userID={userID}
					setUserID={setUserID}
					sessionID={sessionID}
					setSessionID={setSessionID}
					sessionInfoIsEditable={sessionInfoIsEditable}
					setSessionInfoIsEditable={setSessionInfoIsEditable}
					fetchSessionInfo={fetchSessionInfo}
				/>
			</div>
			{error && <div style={{ textAlign: "center", margin: 50 }}>{error}</div>}
			{isLoading ? (
				<div style={{ textAlign: "center", margin: 100 }}>
					<CircularProgress />
				</div>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<div style={{ minWidth: 800, marginRight: 30 }}>
						<SessionChart
							standingData={sessionStandingHistory}
							sittingData={sessionSittingHistory}
						/>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<div style={{ marginBottom: 20 }}>
							<ScoreCircle score={currentScore} />
						</div>
						<div style={{ minWidth: 300 }}>
							<Recommendations recommendations={currentRecommendations} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;

const dummyRecommendations = [
	{
		property: "feet",
		user_message: "Wash your feet",
	},
	{
		property: "chair",
		user_message: "Lower your chair",
	},
	{
		property: "desk",
		user_message: "Raise your desk",
	},
	{
		property: "face",
		user_message: "Brush your teeth",
	},
];

const dummyTips = {
	tiredness: "✅ Doing well.",
	monitor: "✅ Perfect height.",
	elbow: "✅ Perfect posture.",
	back: "✅ Perfect posture.",
	chair: "✅ Perfect hieght.",
	desk: "✅ Perfect height.",
	face: "✅ Perfect posture.",
	feet: "✅ Perfect posture.",
};

const dummySessionHistory = [
	{ y: 64, ...dummyTips },
	{ y: 61, ...dummyTips },
	{ y: 64, ...dummyTips },
	{ y: 62, ...dummyTips },
	{ y: 64, ...dummyTips },
	{ y: 60, ...dummyTips },
	{ y: 58, ...dummyTips },
	{ y: 59, ...dummyTips },
	{ y: 53, ...dummyTips },
	{ y: 54, ...dummyTips },
	{ y: 61, ...dummyTips },
	{ y: 60, ...dummyTips },
	{ y: 55, ...dummyTips },
	{ y: 60, ...dummyTips },
	{ y: 56, ...dummyTips },
	{ y: 60, ...dummyTips },
	{ y: 59.5, ...dummyTips },
	{ y: 63, ...dummyTips },
	{ y: 58, ...dummyTips },
	{ y: 54, ...dummyTips },
	{ y: 59, ...dummyTips },
	{ y: 64, ...dummyTips },
	{ y: 59, ...dummyTips },
];

var isEqual = function (value, other) {
	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen =
		type === "[object Array]" ? value.length : Object.keys(value).length;
	var otherLen =
		type === "[object Array]" ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {
		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {
			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === "[object Function]") {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}
		}
	};

	// Compare properties
	if (type === "[object Array]") {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;
};
