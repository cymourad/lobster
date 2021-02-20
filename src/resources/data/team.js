/**
 * This file is home to the data pertaining to our team members.
 */

// import images of team members
import alecImage from "../images/team/Alec.jpg";
import chrisImage from "../images/team/chris.jpg";
import danielImage from "../images/team/Daniel.jpg";
import husseinImage from "../images/team/Hussein.jpg";
import jasonImage from "../images/team/Jason.jpg";

export const TEAM_MEMBER_NAME = {
	ALEC: "Alec",
	CHRIS: "Chris",
	DANIEL: "Daniel",
	HUSSEIN: "Hussein",
	JASON: "Jason",
};

export const teamMemberInfo = [
	{
		name: TEAM_MEMBER_NAME.ALEC,
		image: alecImage,
		hobbies: ["📷", "🎣"],
		skills: ["PLC", "C++", "Arduino"],
		description: "Frimware Guru",
		linkedin: "https://www.linkedin.com/in/bojunalecli/",
		github: "https://github.com/BojunAlecLi",
	},
	{
		name: TEAM_MEMBER_NAME.CHRIS,
		image: chrisImage,
		hobbies: ["🧗", "🏋️"],
		skills: "JS, React",
		description: "Project Manager",
		linkedin: "https://www.linkedin.com/in/christian-mourad-a35710192/",
		github: "https://github.com/cymourad",
	},
	{
		name: TEAM_MEMBER_NAME.DANIEL,
		image: danielImage,
		hobbies: ["🏃‍♂️", "🏎️"],
		skills: ["Pyton", "AWS", "Flask"],
		description: "Back End Sensei",
		linkedin: "https://www.linkedin.com/in/danielsalib/",
		github: "https://github.com/DanSalib",
	},
	{
		name: TEAM_MEMBER_NAME.HUSSEIN,
		image: husseinImage,
		hobbies: ["🧷", "🔥"],
		skills: ["JS", "React Native"],
		description: "Front End Master",
		linkedin: "https://www.linkedin.com/in/hussein-alkasake/",
		github: "https://github.com/husseinalkasake",
	},
	{
		name: TEAM_MEMBER_NAME.JASON,
		image: jasonImage,
		hobbies: ["⚾", "🏋️"],
		skills: ["CAD", "3D Print"],
		description: "King of All Things Mechanical",
		linkedin: "https://www.linkedin.com/in/jason-james-hunter/",
		github: "https://github.com/JasonHu24",
	},
];
