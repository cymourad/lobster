/**
 * This page introduces our team members.
 * It also explains who we got to know each other (i.e. our program).
 */

import React from "react";

import TeamMemberCard from "../components/TeamMemberCard";

// import images of team members
import alecImage from "../resources/images/team/chris.jpg";
import chrisImage from "../resources/images/team/chris.jpg";
import danielImage from "../resources/images/team/chris.jpg";
import husseinImage from "../resources/images/team/chris.jpg";
import jasonImage from "../resources/images/team/chris.jpg";

const Team = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>The Team</h1>
			<p>
				Some words about the team! We all study Mechantronics Engineering at the
				University of Waterloo. This has been an interseting project to conduct
				remotely over virtual meetings due to COVID-19.
			</p>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				{members.map((member) => (
					<TeamMemberCard
						name={member.name}
						image={member.image}
						hobbies={member.hobbies}
						description={member.description}
						github={member.github}
						linkedin={member.linkedin}
					/>
				))}
			</div>
		</div>
	);
};

export default Team;

const members = [
	{
		name: "Alec",
		image: alecImage,
		hobbies: ["📷", "🎣"],
		skills: ["PLC", "C++", "Arduino"],
		description: "Frimware Guru",
		linkedin: "https://www.linkedin.com/in/bojunalecli/",
		github: "https://github.com/BojunAlecLi",
	},
	{
		name: "Chris",
		image: chrisImage,
		hobbies: ["🧗", "🏋️"],
		skills: "JS, React",
		description: "Project Manager",
		linkedin: "https://www.linkedin.com/in/christian-mourad-a35710192/",
		github: "https://github.com/cymourad",
	},
	{
		name: "Daniel",
		image: danielImage,
		hobbies: ["🏃‍♂️", "🏎️"],
		skills: ["Pyton", "AWS", "Flask"],
		description: "Back End Sense",
		linkedin: "https://www.linkedin.com/in/danielsalib/",
		github: "https://github.com/DanSalib",
	},
	{
		name: "Hussein",
		image: husseinImage,
		hobbies: ["🧷", "🔥"],
		skills: ["JS", "React Native"],
		description: "Front End Master",
		linkedin: "https://www.linkedin.com/in/hussein-alkasake/",
		github: "https://github.com/husseinalkasake",
	},
	{
		name: "Jason",
		image: jasonImage,
		hobbies: ["⚾", "🏋️"],
		skills: ["CAD", "3D Print"],
		description: "King of All Mechanical Things",
		linkedin: "https://www.linkedin.com/in/jason-james-hunter/",
		github: "https://github.com/JasonHu24",
	},
];
