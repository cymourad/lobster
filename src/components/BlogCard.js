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
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { CalendarToday, AccountCircle } from "@material-ui/icons";

import FRONT_END_ROUTE from "../resources/routes/frontEndRoutes";
import { subsystemIcon } from "../resources/data/subsystems";

const useStyles = makeStyles(() => ({
	root: {
		width: "90%",
		maxWidth: 1000,
		display: "flex",
		textAlign: "start",
		margin: 10,
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

const BlogCard = ({ image, title, text, subsystems, authors, date }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{title}
					</Typography>
					<div>
						<Chip
							icon={<CalendarToday />}
							size="small"
							label={date.toLocaleDateString()}
							color="primary"
							style={{ margin: 5 }}
						/>
						{authors.map((author) => (
							<Chip
								icon={<AccountCircle />}
								size="small"
								label={author}
								color="secondary"
								style={{ margin: 5 }}
							/>
						))}
						{subsystems.map((subsystem) => (
							<Chip
								icon={subsystemIcon[subsystem]}
								size="small"
								label={subsystem}
								color="primary"
								style={{ margin: 5 }}
							/>
						))}
					</div>
					<Typography variant="subtitle1" color="textSecondary">
						{text}
					</Typography>
					<CardActions>
						<Link
							to={FRONT_END_ROUTE.PROGRESS + "/" + title.split(" ").join("-")}
						>
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
