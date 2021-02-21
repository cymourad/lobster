/**
 * This file contains the high level information of every blog post.
 */

import { SUBSYSTEM } from "./subsystems";
import { TEAM_MEMBER_NAME } from "./team";

// import blog cover images
import imageProcessingCover from "../images/blogs/posture-tracking-chris.png";

export const BLOG_TITLE = {
	IMAGE_PROCESSING: "Image Processing Script",
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
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSIG],
	},
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
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSIG],
	}
];

export default blogs;
