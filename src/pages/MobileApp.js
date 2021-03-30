/**
 * This page explains the features of our mobile app.
 * It also has a link to the play store.
 */

import React from "react";

const MobileApp = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Mobile App</h1>
			<p style={{ width: "80%", margin: "auto" }}>
				The mobile app component of the system was built to have a straightforward and simple user experience to ensure
				long-term usability. Given the system's focus on building a habit of good posture, the front-end is designed for
				the user to passively place their phone on the side while working with minimal intrusions. The app allows the user to sign
				up and start a new work session, where their phone would take and send to the backend a picture every 30 seconds to detect
				and analyze their posture. The app also allows the user to view a summary of their posture performance per session as well
				as move the companion desk between sitting and standing positions if desired. A demo of the mobile app in action can be seen
				below.
			</p>

			<iframe style={{marginTop: 24, border: 0}} title="demo_video" width="800" height="450" src="https://www.youtube.com/embed/swYeMHYe2sM?playlist=swYeMHYe2sM&loop=1;rel=0&autoplay=1&mute=1&controls=0&showinfo=0&start=25" />
		</div>
	);
};

export default MobileApp;
