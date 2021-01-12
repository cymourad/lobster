/**
 * This file contains the routes to the differet pages in the back-end.
 * These are the routes we use to communicate with the server.
 */

export default BACK_END_ROUTE = {
	GET: {
		STATS: "/stats",
	},
	POST: {
		PROCESS_IMAGE: "/process-image",
	},
};

export const BACK_END_BASE_URL = "http://www.google.com";
