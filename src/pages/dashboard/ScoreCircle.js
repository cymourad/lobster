/**
 * This component goes on the dashbord to show the current score of the user.
 *
 * Props:
 * - score: [number]
 */
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ScoreCircle = ({ score }) => {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="determinate" value={score} size={80} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					variant="caption"
					component="div"
					color="textSecondary"
					style={{ fontSize: 16 }}
				>{`${Math.round(score)}%`}</Typography>
			</Box>
		</Box>
	);
};

export default ScoreCircle;
