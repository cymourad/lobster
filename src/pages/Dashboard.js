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
	const [notification, setNotification] = useState(null); // to show what's happening in back-end

	const [userID, setUserID] = useState(7); // the user ID for which we retreieve data
	const [sessionID, setSessionID] = useState(29); // the session ID that we are exploring
	const [sessionInfoIsEditable, setSessionInfoIsEditable] = useState(false);

	// TODO initalize to 0
	const [currentScore, setCurrentScore] = useState(87); // the latest score of the user

	// TODO initialize this to an empty array
	const [currentRecommendations, setCurrentRecommendations] = useState(
		dummyRecommendations
	); // list of recommendations to improve posture

	/**
	 * All the scores and recommendations that user had since beginning of session
	 * Each object has the following properties:
	 * - y: [number] the score
	 * - tips: [array of strings] , each string is the user_message given at that time
	 */
	// TODO initialize as an empty array
	const [sessionHistory, setSessionHistory] = useState(dummySessionHistory);

	const fetchSessionInfo = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`${BACK_END_ROUTE.GET.SESSION_SUMMARY}/${userID}/${sessionID}`
			);

			const { results } = response.data;

			// condtruct session history data for graph
			let graphData = [];
			const objectArray = Object.entries(results);

			objectArray.forEach(([key, value]) => {
				// skip the -1 case (the average of the entire session)
				if (key != -1) {
					let separateTips = [];

					// flatten value.recommendations to an array of user_message and put it under tips
					value.recommendations.forEach((recommendation) =>
						// TODO should we instead put the property name?
						separateTips.push(recommendation.user_message)
					);

					graphData.push({
						x: new Date(key * 1000),
						y: Math.round(value.score),
						tips: separateTips.join("\n"),
					});
				}
			});

			setSessionHistory(graphData);

			// set current score and recommendation
			if (objectArray.length > 0) {
				const latestInfo = objectArray[objectArray.length - 1];
				const { score, recommendations } = latestInfo[1];

				setCurrentScore(score);
				setCurrentRecommendations(recommendations);
			}

			setNotification(null); // clear error message
		} catch (e) {
			console.log(e.response);
			setNotification(
				<p style={{ color: "red" }}>Error! {e.response.data.message}</p>
			);
		}
		setIsLoading(false);
	};

	useEffect(
		() => {
			fetchSessionInfo(); // run it when first render

			const interval = setInterval(
				() => {
					fetchSessionInfo();
				},
				5 * 60 * 1000 // interval in msec
			);
			return () => clearInterval(interval);
		},
		[] // only once when page first loads
	);

	return (
		<div>
			<div style={{ textAlign: "center", margin: 50 }}>
				<SessionInfoForm
					userID={userID}
					setUserID={setUserID}
					sessionID={sessionID}
					setSessionID={setSessionID}
					sessionInfoIsEditable={sessionInfoIsEditable}
					setSessionInfoIsEditable={setSessionInfoIsEditable}
					fetchSessionInfo={fetchSessionInfo}
				/>
			</div>
			{notification && (
				<div style={{ textAlign: "center", margin: 50 }}>{notification}</div>
			)}
			{isLoading ? (
				<CircularProgress />
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<div style={{ minWidth: 600, marginRight: 30 }}>
						<SessionChart sessionHistory={sessionHistory} />
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

const dummySessionHistory = [
	{ y: 64, tips: ["wash ur face", "brush your"] },
	{ y: 61, tips: "wash ur face" },
	{ y: 64, tips: "wash ur face" },
	{ y: 62, tips: "wash ur face" },
	{ y: 64, tips: "wash ur face" },
	{ y: 60, tips: "wash ur face" },
	{ y: 58, tips: "wash ur face" },
	{ y: 59, tips: "wash ur face" },
	{ y: 53, tips: "wash ur face" },
	{ y: 54, tips: "wash ur face" },
	{ y: 61, tips: "wash ur face" },
	{ y: 60, tips: "wash ur face" },
	{ y: 55, tips: "wash ur face" },
	{ y: 60, tips: "wash ur face" },
	{ y: 56, tips: "wash ur face" },
	{ y: 60, tips: "wash ur face" },
	{ y: 59.5, tips: "wash ur face" },
	{ y: 63, tips: "wash ur face" },
	{ y: 58, tips: "wash ur face" },
	{ y: 54, tips: "wash ur face" },
	{ y: 59, tips: "wash ur face" },
	{ y: 64, tips: "wash ur face" },
	{ y: 59, tips: "wash ur face" },
];
