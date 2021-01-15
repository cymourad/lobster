/**
 * This component is the envelope of any blog post.
 * It takes the foollowing props:
 * *
 */

import React from "react";

import { BLOG_TITLE } from "../resources/data/blogs";

// import all the blogs
import MissingBlog from "./blogs/MissingBlog";
import ImageProcessing from "./blogs/ImageProcessing";

const Blog = ({ title }) => {
	let innerComponent = null;
	let info = {};

	switch (title) {
		case BLOG_TITLE.IMAGE_PROCESSIG:
			innerComponent = <ImageProcessing />;
			break;
		default:
			innerComponent = <MissingBlog />;
	}

	return (
		<div>
			<h1>{title}</h1>
			<p>author</p>
			<p>sybsystems</p>
			<p>date</p>
			<p>Summary</p>
			<p>summary</p>
			<p>line break</p>
			{innerComponent}
			<button>More blogs by the same author</button>
			<button>More blogs about the same subsystem</button>
		</div>
	);
};
