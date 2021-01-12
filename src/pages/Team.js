/**
 * This page introduces our team members.
 * It also explains who we got to know each other (i.e. our program).
 */

import React from "react";

// import images of team members
import alecImage from "../resources/images/team/chris.jpg";
import chrisImage from "../resources/images/team/chris.jpg";
import danielImage from "../resources/images/team/chris.jpg";
import husseinImage from "../resources/images/team/chris.jpg";
import jasonImage from "../resources/images/team/chris.jpg";

const Team = () => {
	return (
		<>
			<h1>The Team</h1>
		</>
	);
};

export default Team;

const members = [
	{
		name: "Alec",
		image: alecImage,
		hobbies: ["📷", "🎣"],
		skills: ["PLC", "C++"],
		description: "Frimware Guru",
	},
];
