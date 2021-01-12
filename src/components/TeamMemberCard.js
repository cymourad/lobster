/**
 * This card represents a team member.
 * It has his:
 * - image
 * - name
 * - skills
 * - hobbies (emojis)
 * - description (their role)
 * - links to blogs that they wrote
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: 50,
	},
	media: {
		height: 140,
	},
});

const TeamMemberCard = ({
	image,
	name,
	skills,
	hobbies,
	github,
	description,
	linkedin,
}) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} title={name} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => window.open(github)}
				>
					GitHub
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() => window.open(linkedin)}
				>
					Linkedin
				</Button>
			</CardActions>
		</Card>
	);
};

export default TeamMemberCard;