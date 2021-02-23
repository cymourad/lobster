/**
 * This page gives the user access to their historical and current data.
 * They can monitor their posture stats in a live session.
 * They can also monitor their progress over the session.
 */

import React, { useState, useEffect } from "react";
import Recommendations from "./dashboard/Recommendations";
import SessionInfoForm from "./dashboard/SessionInfoForm";
import ScoreCircle from "./dashboard/ScoreCircle";

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
	 * - score: [number]
	 * - recommendations: [array] of objects, where each object has 2 properties
	 * -- property: [string] name of recommendation
	 * -- user_message: [string] action to be done by user
	 */
	const [sessionHistory, setSessionHistory] = useState([]);

	// useEffect();

	return (
		<div>
			<SessionInfoForm
				userID={userID}
				setUserID={setUserID}
				sessionID={sessionID}
				setSessionID={setSessionID}
				sessionInfoIsEditable={sessionInfoIsEditable}
				setSessionInfoIsEditable={setSessionInfoIsEditable}
			/>
			<div>
				<div>
					<p>Graph</p>
				</div>
				<div>
					<div>
						<ScoreCircle score={currentScore} />
					</div>
					<Recommendations recommendations={currentRecommendations} />
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
