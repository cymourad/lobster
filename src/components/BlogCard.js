/**
 * This is a thumbnail of a blog.
 * It is displayed on the /progress page.
 * It shows a picture, and title, and some text.
 */

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
	root: {
		width: "90%",
		maxWidth: 600,
		display: "flex",
		textAlign: "start",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		minWidth: 200,
		height: 300,
	},
}));

const BlogCard = ({ image, title, text, link }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{title}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						{text}
					</Typography>
					<CardActions>
						<Link to={link}>
							<Button size="small" color="primary">
								Read more
							</Button>
						</Link>
					</CardActions>
				</CardContent>
			</div>
			<CardMedia className={classes.cover} image={image} title={title} />
		</Card>
	);
};

export default BlogCard;
