/**
 * This file contains the routes to the differet pages in the front-end.
 */

const FRONT_END_ROUTE = {
	HOME: "/", // landing page
	TEAM: "/team", // the members of our team
	MOTIVATION: "/motivation", // why this project is important
	DASHBOARD: "/dashboard", // dashboard to monitor live sessions and session history
	APP: "/mobile-app", // features of the android app
	PROGRESS: "/progress", // blog detailing the progress
};

export default FRONT_END_ROUTE;

// these are the blog routes, they go after /progress
// ex: /progress/image-processing
export const BLOG_ROUTES = {
	IMAGE_PROCESSING: "/image-processing",
};
