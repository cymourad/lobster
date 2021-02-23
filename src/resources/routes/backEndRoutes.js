/**
 * This file contains the routes to the differet pages in the back-end.
 * These are the routes we use to communicate with the server.
 */

// You can go to this address to read the documentation of these routes in more depth
const BACK_END_BASE_URL = "https://posture.spottscheduler.com/";

export default BACK_END_ROUTE = {
	GET: {
		SESSION: BACK_END_BASE_URL + "/session",
		SESSION_SUMMARY: BACK_END_BASE_URL + "/session/summary",
		USER: BACK_END_BASE_URL + "/user",
	},
	POST: {
		SESSION: BACK_END_BASE_URL + "/session",
		USER: BACK_END_BASE_URL + "/user",
	},
};
