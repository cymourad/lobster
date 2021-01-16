/**
 * This component is the envelope of any blog post.
 * It takes the foollowing props:
 * *
 */

import React from "react";

import blogs, { BLOG_TITLE } from "../resources/data/blogs";

// import all the blogs
import MissingBlog from "./blogs/MissingBlog";
import ImageProcessing from "./blogs/ImageProcessing";

import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { CalendarToday, AccountCircle } from "@material-ui/icons";
import { subsystemIcon } from "../resources/data/subsystems";

const Blog = ({ match }) => {
	const title = match.params.title.split("-").join(" "); // get the title of the blog form the dynamic route

	const blogInfo = blogs.find((blog) => blog.title == title); // get the meta data of the blog

	console.log(blogInfo);

	let innerComponent = null;

	switch (title) {
		case BLOG_TITLE.IMAGE_PROCESSING:
			innerComponent = <ImageProcessing />;
			break;
		default:
			innerComponent = <MissingBlog />;
	}

	return (
		<div style={{ margin: 20 }}>
			<h1>{title}</h1>
			<div>
				<Chip
					icon={<CalendarToday />}
					size="small"
					label={blogInfo.date.toLocaleDateString()}
					color="primary"
					style={{ margin: 5 }}
				/>
				{blogInfo.authors.map((author) => (
					<Chip
						icon={<AccountCircle />}
						size="small"
						label={author}
						color="secondary"
						style={{ margin: 5 }}
					/>
				))}
				{blogInfo.subsystems.map((subsystem) => (
					<Chip
						icon={subsystemIcon[subsystem]}
						size="small"
						label={subsystem}
						color="primary"
						style={{ margin: 5 }}
					/>
				))}
			</div>
			<h3>Summary</h3>
			<p>{blogInfo.summary}</p>
			<Divider variant="middle" />
			{innerComponent}
			<Divider variant="middle" />
			<div style={{ textAlign: "center", margin: 10 }}>
				<Button variant="contained" style={{ margin: 10 }}>
					More blogs by the same author
				</Button>
				<Button variant="contained" style={{ margin: 10 }}>
					More blogs about the same subsystem
				</Button>
			</div>
		</div>
	);
};

export default Blog;
