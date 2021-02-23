/**
 * This file contains the high level information of every blog post.
 */

import { SUBSYSTEM } from "./subsystems";
import { TEAM_MEMBER_NAME } from "./team";

// import blog cover images
import imageProcessingCover from "../images/blogs/posture-tracking-chris.png";
import workSessionBase from "../images/blogs/work-session-base.png";

export const BLOG_TITLE = {
	IMAGE_PROCESSING: "Image Processing Script",
	FRONT_END: "Front End Update",
};

const blogs = [
	{
		title: BLOG_TITLE.IMAGE_PROCESSING,
		image: imageProcessingCover,
		summary:
			<ul>
				<li>Developed python script that uses machine vision to take an image as input and output an array of coordinates</li>
				<li>Implemented GluonCV Image processing library in python</li>
				<ul>
					<li>Pre-trained model : 'simple_pose_resnet18_v1b'</li>
					<li>Plot numpy array of joint coordinates with matplotlib</li>
				</ul>
			</ul>,
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2020-12-25"),
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSING],
	},
	{
		title: BLOG_TITLE.FRONT_END,
		image: workSessionBase,
		summary:
			<ul>
				<li>Developed the initial setup pages (sign in / sign up / general information)</li>
				<li>Developed the home page template</li>
				<li>Developed the base of the work session functionality</li>
				<li>Successfully connected frontend application with backend API</li>
				<li>Successfully connected frontend BLE library with Bluetooth module in test application</li>
				<li>Created simple <a href="https://www.youtube.com/watch?v=oBfTOBPypMQ" target="_blank">demo video</a> of progress</li>
			</ul>,
		authors: [TEAM_MEMBER_NAME.HUSSEIN],
		date: new Date("2021-02-23"),
		subsystems: [SUBSYSTEM.FRONT_END, SUBSYSTEM.BACK_END, SUBSYSTEM.CONTROLS],
	}
];

export default blogs;
