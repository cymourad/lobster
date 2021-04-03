/**
 * Lets us render YouTube videos.
 */

import React from "react";

const YoutubeEmbed = ({ embedId }) => (
	<div
		style={{
			overflow: "hidden",
			paddingBottom: "35%",
			position: "relative",
			height: 0,
		}}
	>
		<iframe
			width="853"
			height="480"
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</div>
);

export default YoutubeEmbed;
