/**
 * This page gives the user access to their historical and current data.
 * They can monitor their posture stats in a live session.
 * They can also monitor their progress over the session.
 */

import React, { useState, useEffect } from "react";
import SessionInfoForm from "./dashboard/SessionInfoForm";
import SessionChart from "./dashboard/SessionChart";
import ScoreCircle from "./dashboard/ScoreCircle";
import Recommendations from "./dashboard/Recommendations";

const Dashboard = () => {
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

	// useEffect(() => {
	// 	// Update the document title using the browser API
	// 	document.title = `You clicked ${count} times`;
	//   });

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
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
				}}
			>
				<div style={{ minWidth: 600 }}>
					<SessionChart sessionHistory={sessionHistory} />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						minWidth: 500,
					}}
				>
					<div>
						<ScoreCircle score={currentScore} />
					</div>
					<div>
						<Recommendations recommendations={currentRecommendations} />
					</div>
				</div>
			</div>
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
