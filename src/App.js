/**
 * This is the starting point of our project.
 * We make our router here.
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FRONT_END_ROUTE from "./resources/routes/frontEndRoutes";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import Motivaton from "./pages/Motivation";
import MobileApp from "./pages/MobileApp";
import Progress from "./pages/Progress";
import Team from "./pages/Team";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={FRONT_END_ROUTE.HOME}>
					<Home />
				</Route>
				<Route exact path={FRONT_END_ROUTE.MOTIVATION}>
					<Motivaton />
				</Route>
				<Route exact path={FRONT_END_ROUTE.TEAM}>
					<Team />
				</Route>
				<Route exact path={FRONT_END_ROUTE.APP}>
					<MobileApp />
				</Route>
				<Route exact path={FRONT_END_ROUTE.DASHBOARD}>
					<Dashboard />
				</Route>
				<Route exact path={FRONT_END_ROUTE.PROGRESS}>
					<Progress />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
