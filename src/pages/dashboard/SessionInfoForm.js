/**
 * This form lets the user change the session info in the Dashboard page.
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { BACK_END_ROUTE } from "../../resources/routes/backEndRoutes";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const SessionInfoForm = ({
	sessionInfoIsEditable,
	setSessionInfoIsEditable,
	userEmail,
	setUserEmail,
	userID,
	setUserID,
	sessionID,
	setSessionID,
	fetchSessionInfo,
}) => {
	const classes = useStyles();

	const [availableSessionIDs, setAvailableSessionIDs] = useState([]);
	const [error, setError] = useState(null);

	const fetchUserIDandSessionIDS = async () => {
		try {
			const userIDresponse = await axios.get(
				`${BACK_END_ROUTE.GET.USER}/${userEmail}`
			);

			const { id } = userIDresponse.data.user;

			setUserID(id);

			const availableSessionsResponse = await axios.get(
				`${BACK_END_ROUTE.GET.SESSION_HISTORY}/${id}`
			);

			const { results } = availableSessionsResponse.data;

			setAvailableSessionIDs(results);

			setError(null);
		} catch (e) {
			console.log(e);
			setError(
				<p style={{ color: "red" }}>Error! {e.response.data.message}</p>
			);
		}
	};

	// const fetchAvaibleSessionIDs = async () => {
	// 	try {

	// 		setError(null);
	// 	} catch (e) {
	// 		console.log(e);
	// 		setError(
	// 			<p style={{ color: "red" }}>Error! {e.response.data.message}</p>
	// 		);
	// 	}
	// };

	useEffect(
		() => {
			fetchUserIDandSessionIDS();
			// fetchAvaibleSessionIDs();
		},
		[] // only once when you first render the component
	);

	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="user-email"
					label="User Email"
					disabled={!sessionInfoIsEditable}
					value={userEmail}
					onChange={(event) => {
						setUserEmail(event.target.value);
					}}
				/>
				{sessionInfoIsEditable && (
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={() => {
							fetchUserIDandSessionIDS();
						}}
					>
						Get Available Sessions
					</Button>
				)}
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						Session Started On
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={sessionID}
						onChange={(event) => setSessionID(event.target.value)}
						disabled={!sessionInfoIsEditable}
						style={{
							marginRight: 20,
							marginLeft: 20,
						}}
					>
						{availableSessionIDs.map((session) => (
							<MenuItem value={session.id}>{session.created_on}</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<Edit />}
					onClick={() => {
						setSessionInfoIsEditable(!sessionInfoIsEditable);
						// fetch info for new user and session once locked in
						if (sessionInfoIsEditable) fetchSessionInfo();
					}}
				>
					{sessionInfoIsEditable ? "Save" : "Edit"}
				</Button>
				{error && <div>{error}</div>}
			</form>
		</div>
	);
};

export default SessionInfoForm;
