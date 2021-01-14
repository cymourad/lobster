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
			<p style={{ width: "80%", margin: "auto" }}>
				Consider serotonin, the chemical that governs posture and escape in the
				lobster. Low-ranking lobsters produce comparatively low levels of
				serotonin. This is also true of low-ranking human beings (and those low
				levels decrease more with each defeat). Low serotonin means decreased
				confidence. Low serotonin means more response to stress and costlier
				physical preparedness for emergency—as anything whatsoever may happen,
				at any time, at the bottom of the dominance hierarchy (and rarely
				something good). Low serotonin means less happiness, more pain and
				anxiety, more illness, and a shorter lifespan—among humans, just as
				among crustaceans. Higher spots in the dominance hierarchy, and the
				higher serotonin levels typical of those who inhabit them, are
				characterized by less illness, misery and death, even when factors such
				as absolute income—or number of decaying food scraps—are held constant.
				The importance of this can hardly be overstated
			</p>
			<p>12 Rules for Life (pg 43) by Jordan Peterson</p>
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
};

export default Home;
