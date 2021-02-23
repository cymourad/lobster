/**
 * This nested lists gets rendered in the Dashboard page based on the latest
 * recommendations received from the back-end.
 *
 * Props:
 * - recommendations: array of recommendation objects
 * -- rcommendation: object that has 3 properties
 * --- adjustment_amount_cm: [float] that indicates exact adjustment needed (will not be used)
 * --- property: [string]
 * --- user_message: [string] what will be dispayed to the user
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	DesktopWindows,
	NotificationsPaused,
	EventSeat,
	Face,
	AirlineSeatLegroomNormal,
	AirlineSeatReclineExtra,
	Keyboard,
	KingBed,
} from "@material-ui/icons";

// object that links property name to icon
const propertyIcon = {
	tiredness: <NotificationsPaused />,
	monitor: <DesktopWindows />,
	elbow: <Keyboard />,
	back: <AirlineSeatReclineExtra />,
	chair: <EventSeat />,
	desk: <KingBed />,
	face: <Face />,
	feet: <AirlineSeatLegroomNormal />,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const Recommendations = ({ recommendations }) => {
	const classes = useStyles();

	// objects to control the state of different recommendations being opened/closed
	// a property is a property of a recommendation
	// the value a boolean indicating whether the recommedation is expanded or not
	const [open, setOpen] = useState(
		recommendations.reduce(
			(acc, recommendation) => ((acc[recommendation.property] = false), acc),
			{}
		)
	);

	const handleClick = (property) => {
		const isOpen = open[property];
		setOpen({ ...open, [property]: !isOpen });
	};

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Recommendations
				</ListSubheader>
			}
			className={classes.root}
		>
			{recommendations.map((recommendation) => (
				<div>
					<ListItem button onClick={() => handleClick(recommendation.property)}>
						<ListItemIcon>{propertyIcon[recommendation.property]}</ListItemIcon>
						<ListItemText primary={recommendation.property} />
						{open[recommendation.property] ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse
						in={open[recommendation.property]}
						timeout="auto"
						unmountOnExit
					>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary={recommendation.user_message} />
							</ListItem>
						</List>
					</Collapse>
				</div>
			))}
		</List>
	);
};

export default Recommendations;
