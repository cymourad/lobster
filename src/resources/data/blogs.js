/**
 * This file contains the high level information of every blog post.
 */

import { BLOG_ROUTE } from "../routes/frontEndRoutes";
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
			"This is the summary of the blog. Kinda like an executive summary, where it tells the user what was built, how it was built, and what was achieved",

		link: BLOG_ROUTE.IMAGE_PROCESSING,
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2020-12-29"),
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSIG],
	},
];

export default blogs;
