/**
 * This form lets the user change the session info in the Dashboard page.
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const SessionInfoForm = ({
	sessionInfoIsEditable,
	setSessionInfoIsEditable,
	userID,
	setUserID,
	sessionID,
	setSessionID,
	fetchSessionInfo,
}) => {
	const classes = useStyles();

	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="user-id"
					label="User ID"
					disabled={!sessionInfoIsEditable}
					value={userID}
					onChange={(event) => {
						setUserID(event.target.value);
					}}
				/>
				<TextField
					id="session-id"
					label="Session ID"
					disabled={!sessionInfoIsEditable}
					value={sessionID}
					onChange={(event) => {
						setSessionID(event.target.value);
					}}
					style={{
						marginRight: 20,
						marginLeft: 20,
					}}
				/>
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
			</form>
		</div>
	);
};

export default SessionInfoForm;
