/**
 * This is the navigation bar that sits at the top of every page.
 * It has our logo on the left hand which leads to the home page.
 * It has links to all our pages on the right side.
 */

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import FRONT_END_ROUTE from "./resources/routes/frontEndRoutes";

import logo from "./resources/images/home/logo.png";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#0F4C5C",
		minHeight: 30,
		padding: 10,
	},
	logo: {
		height: 20,
		width: 20,
		padding: 10,
		float: "left",
		transform: [{ rotate: "90deg" }],
	},
	linkBox: {
		textAlign: "end",
		float: "right",
	},
	link: {
		color: "white",
		margin: 10,
	},
	activeLink: {
		color: "#E36414",
	},
});

const Navbar = () => {
	const classes = useStyles();

	return (
		<nav className={classes.root}>
			<Link to={FRONT_END_ROUTE.HOME}>
				<img src={logo} className={[classes.logo]} />
			</Link>

			<div className={classes.linkBox}>
				<NavLink
					to={FRONT_END_ROUTE.MOTIVATION}
					exact
					className={classes.link}
					activeClassName={classes.activeLink}
				>
					Posture Crisis
				</NavLink>

				<NavLink
					to={FRONT_END_ROUTE.TEAM}
					className={classes.link}
					activeClassName={classes.activeLink}
				>
					Our Team
				</NavLink>

				<NavLink
					to={FRONT_END_ROUTE.PROGRESS}
					exact
					className={classes.link}
					activeClassName={classes.activeLink}
				>
					Our Journey
				</NavLink>

				<NavLink
					to={FRONT_END_ROUTE.APP}
					exact
					className={classes.link}
					activeClassName={classes.activeLink}
				>
					Our App
				</NavLink>

				<NavLink
					to={FRONT_END_ROUTE.DASHBOARD}
					exact
					className={classes.link}
					activeClassName={classes.activeLink}
				>
					My Posture
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
