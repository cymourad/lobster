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
import poster from "../resources/images/home/group_17_poster.jpg";
import "../App.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Home = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Welcome to the Lobster</h1>
			<iframe
				style={{ margin: 24, border: 0 }}
				title="promo_video"
				width="800"
				height="450"
				src="https://www.youtube.com/embed/yzN2yikZUE8?playlist=yzN2yikZUE8&loop=1;rel=0&autoplay=1&mute=1&showinfo=0"
			/>
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
			<img
				src={poster}
				alt="poster"
				style={{ width: 900, height: 550, paddingBottom: 30 }}
			/>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
		</div>
	);
};

export default Home;
