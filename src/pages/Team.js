/**
 * This page introduces our team members.
 * It also explains who we got to know each other (i.e. our program).
 */

import React from "react";

import TeamMemberCard from "../components/TeamMemberCard";

import { teamMemberInfo } from "../resources/data/team";

const Team = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>The Team</h1>
			<p style={{ width: "80%", margin: "auto" }}>
				Some information about the team! We all study Mechatronics Engineering at the
				University of Waterloo. Overall, this has been an interesting project to conduct
				remotely over virtual meetings, as a result of COVID-19.
			</p>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				{teamMemberInfo.map((member) => (
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
