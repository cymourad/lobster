/**
 * This page displays a list of blog entires, which detail the progression of our developement.
 * Maybe we will show them as an outline
 * or maybe they will be cards and the user can click on them to go to more detail.
 */

import React from "react";
import BlogCard from "../components/BlogCard";
// import Timeline from "../components/Timeline";

import blogs from "../resources/data/blogs";

const Progress = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Our Journey</h1>
			{blogs.map((blog) => (
				<BlogCard title={blog.title} image={blog.image} text={blog.summary} />
			))}
		</div>
	);
};

export default Progress;
