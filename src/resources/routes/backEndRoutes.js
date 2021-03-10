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

		// supply email as param after user and get user profile
		// user: {created_on, id, height, email, last_updated, name, token}
		USER: BACK_END_BASE_URL + "/user",

		// supply user ID as param and get an array of sessions under results
		// {created_on, id, last_updated, user_id}
		SESSION_HISTORY: BACK_END_BASE_URL + "/session/history",
	},
	POST: {
		SESSION: BACK_END_BASE_URL + "/session",
		USER: BACK_END_BASE_URL + "/user",
	},
};
