/**
 * This data is displayed if an error happened and corrupted data is passed to the blog component.
 */

import React from "react";
import { Link } from "react-router-dom";
import FRONT_END_ROUTE from "../../resources/routes/frontEndRoutes";

const MissingBlog = () => {
	return (
		<div>
			<p>Oops :/</p>
			<p>
				Go back to <Link to={FRONT_END_ROUTE.PROGRESS}>Our Journey</Link> to
				find a building blog.
			</p>
		</div>
	);
};

export default MissingBlog;
