/**
 *
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

// the parameters to be filtered
import { SUBSYSTEM } from "../../resources/data/subsystems";
import { TEAM_MEMBER_NAME } from "../../resources/data/team";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));

function convertObjectValuesToTrue(obj) {
	const keys = Object.keys(obj);

	let result = {};

	keys.forEach((key) => (result[key] = true));

	return result;
}

const BlogSearchFilter = ({ allBlogs, setBlogs }) => {
	const classes = useStyles();

	const [subsystemSelected, setSubsystemSelected] = useState(
		convertObjectValuesToTrue(SUBSYSTEM)
	);

	const [teamMemberSelected, setTeamMemberSelected] = useState(
		convertObjectValuesToTrue(TEAM_MEMBER_NAME)
	);

	const handleSubsystemChange = (event) => {
		const subsystemSelection = {
			...subsystemSelected,
			[event.target.name]: event.target.checked,
		};

		setSubsystemSelected(subsystemSelection);

		applyFilter(teamMemberSelected, subsystemSelection);
	};

	const handleTeamMemberChange = (event) => {
		const teamMemberSelection = {
			...teamMemberSelected,
			[event.target.name]: event.target.checked,
		};

		setTeamMemberSelected(teamMemberSelection);
		applyFilter(teamMemberSelection, subsystemSelected);
	};

	const applyFilter = (teamMemberSelection, subsystemSelection) => {
		let selectedAuthorsArr = [];
		let selectedSubsystemsArr = [];

		for (const [key, selected] of Object.entries(teamMemberSelection)) {
			if (selected) selectedAuthorsArr.push(TEAM_MEMBER_NAME[key]);
		}

		for (const [key, selected] of Object.entries(subsystemSelection)) {
			if (selected) selectedSubsystemsArr.push(SUBSYSTEM[key]);
		}

		console.log(selectedAuthorsArr, selectedSubsystemsArr);

		// filter blogs by author
		let result = allBlogs.filter((blog) => {
			return blog.authors.some((author) => selectedAuthorsArr.includes(author));
		});

		// filter by subsystem as well
		result = result.filter((blog) => {
			return blog.subsystems.some((subsys) =>
				selectedSubsystemsArr.includes(subsys)
			);
		});

		setBlogs(result);
	};

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Filter by Sub-System</FormLabel>
				<FormGroup>
					{Object.keys(SUBSYSTEM).map((key) => (
						<FormControlLabel
							control={
								<Checkbox
									checked={subsystemSelected[key]}
									onChange={handleSubsystemChange}
									name={key}
								/>
							}
							label={SUBSYSTEM[key]}
						/>
					))}
				</FormGroup>
				{/* <FormHelperText>Be careful</FormHelperText> */}
			</FormControl>

			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Filter by Team Member</FormLabel>
				<FormGroup>
					{Object.keys(TEAM_MEMBER_NAME).map((key) => (
						<FormControlLabel
							control={
								<Checkbox
									checked={teamMemberSelected[key]}
									onChange={handleTeamMemberChange}
									name={key}
								/>
							}
							label={TEAM_MEMBER_NAME[key]}
						/>
					))}
				</FormGroup>
				{/* <FormHelperText>Be careful</FormHelperText> */}
			</FormControl>
		</div>
	);
};

export default BlogSearchFilter;
