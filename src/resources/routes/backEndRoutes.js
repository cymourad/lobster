/**
 * This file contains the routes to the differet pages in the back-end.
 * These are the routes we use to communicate with the server.
 */

// You can go to this address to read the documentation of these routes in more depth
const BACK_END_BASE_URL = "https://posture.spottscheduler.com";

export const BACK_END_ROUTE = {
	GET: {
		// you get a dictionary of results where the key is the timestamp (5 min intervals)
		// and the value has all the analysis for that aggregated interval
		SESSION_SUMMARY: BACK_END_BASE_URL + "/session/summary",

		// you get only the last 5 minutes
		SESSION_SUMMARY_INTERVAL: BACK_END_BASE_URL + "/session/summary/interval",

		USER: BACK_END_BASE_URL + "/user",
	},
	POST: {
		SESSION: BACK_END_BASE_URL + "/session",
		USER: BACK_END_BASE_URL + "/user",
	},
};
