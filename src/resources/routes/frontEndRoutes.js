/**
 * This file contains the routes to the differet pages in the front-end.
 */

const BASE_URL = "/lobster";

const FRONT_END_ROUTE = {
	HOME: BASE_URL + "/", // landing page
	TEAM: BASE_URL + "/team", // the members of our team
	MOTIVATION: BASE_URL + "/motivation", // why this project is important
	DASHBOARD: BASE_URL + "/dashboard", // dashboard to monitor live sessions and session history
	APP: BASE_URL + "/mobile-app", // features of the android app
	PROGRESS: BASE_URL + "/progress", // blog detailing the progress
};

export default FRONT_END_ROUTE;

// these are the blog routes, they go after /progress
// ex: /progress/image-processing
export const BLOG_ROUTE = {
	IMAGE_PROCESSING: FRONT_END_ROUTE.PROGRESS + "/image-processing",
};
