/**
 * This is the landing page of the website.
 * It explains our project at a galnce:
 * - motivation
 * - features
 * - team
 * - app
 * - demo video
 */

import React from "react";
import logo from "../resources/images/home/logo.png";
import "../App.css";

const Home = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Welcome to the Lobster</h1>
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
};

export default Home;
