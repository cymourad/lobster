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
	 * - tip: [array of strings] , each string is the user_message given at that time
	 */
	// TODO initialize as an empty array
	const [sessionHistory, setSessionHistory] = useState(dummySessionHistory);

	const fetchLatestInfo = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				BACK_END_ROUTE.GET.SESSION_SUMMARY_INTERVAL,
				{
					headers: {
						user_id: userID,
						session_id: sessionID,
						"Access-Control-Allow-Origin": "*",
					},
				}
			);
			console.log(response);
			const { results } = response.data;
			const { score, recommendations } = results;

			setCurrentScore(score);
			setCurrentRecommendations(recommendations);
		} catch (e) {
			console.log(e.message);
			setNotification(<p style={{ color: "red" }}>Error! {e.message}</p>);
		}
		setIsLoading(false);
	};

	const fetchSessionSummary = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(BACK_END_ROUTE.GET.SESSION_SUMMARY, {
				headers: { user_id: userID, session_id: sessionID },
			});

			const { results } = response.data;

			let graphData = [];
			const objectArray = Object.entries(results);

			objectArray.forEach(([key, value]) => {
				// handle the -1 case (the average of the entire session)
				if (key != -1) {
					let tips = [];

					// flatten value.recommendations to an array of user_message and put it under tip
					value.recommendations.forEach((recommendation) =>
						tips.push(recommendation.user_message)
					);

					graphData.push({ y: value.score, tips });
				}
			});

			setSessionHistory(graphData);
		} catch (e) {
			console.log(e);
			setNotification(<p style={{ color: "red" }}>Error! {e.message}</p>);
		}
		setIsLoading(false);
	};

	useEffect(
		() => {
			// const interval = setInterval(
			// 	() => {
			// 		console.log("This will run every 5 minutes!");
			// 		fetchLatestInfo();
			// 		fetchSessionSummary();
			// 	},
			// 	5 * 60 * 1000 // interval in msec
			// );
			// return () => clearInterval(interval);

			const test = async () => {
				try {
					const response = await fetch(
						"https://posture.spottscheduler.com/session/summary",
						{
							method: "GET",
							headers: {
								user_id: "7",
								session_id: "29",
								"Sec-Fetch-Mode": "cors",
								"Referrer Policy": "strict-origin-when-cross-origin",
							},
						}
					);

					console.log(response);
				} catch (e) {
					console.log(e);
				}
			};

			test();
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
							// minWidth: 600,
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
	{ y: 64, tip: ["wash ur face", "brush your"] },
	{ y: 61, tip: "wash ur face" },
	{ y: 64, tip: "wash ur face" },
	{ y: 62, tip: "wash ur face" },
	{ y: 64, tip: "wash ur face" },
	{ y: 60, tip: "wash ur face" },
	{ y: 58, tip: "wash ur face" },
	{ y: 59, tip: "wash ur face" },
	{ y: 53, tip: "wash ur face" },
	{ y: 54, tip: "wash ur face" },
	{ y: 61, tip: "wash ur face" },
	{ y: 60, tip: "wash ur face" },
	{ y: 55, tip: "wash ur face" },
	{ y: 60, tip: "wash ur face" },
	{ y: 56, tip: "wash ur face" },
	{ y: 60, tip: "wash ur face" },
	{ y: 59.5, tip: "wash ur face" },
	{ y: 63, tip: "wash ur face" },
	{ y: 58, tip: "wash ur face" },
	{ y: 54, tip: "wash ur face" },
	{ y: 59, tip: "wash ur face" },
	{ y: 64, tip: "wash ur face" },
	{ y: 59, tip: "wash ur face" },
];
