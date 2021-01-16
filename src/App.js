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
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={FRONT_END_ROUTE.HOME} component={Home} />
				<Route exact path={FRONT_END_ROUTE.MOTIVATION} component={Motivaton} />
				<Route exact path={FRONT_END_ROUTE.TEAM} component={Team} />
				<Route exact path={FRONT_END_ROUTE.APP} component={MobileApp} />
				<Route exact path={FRONT_END_ROUTE.DASHBOARD} component={Dashboard} />
				<Route exact path={FRONT_END_ROUTE.PROGRESS} component={Progress} />
				<Route path={FRONT_END_ROUTE.PROGRESS + "/:title"} component={Blog} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
