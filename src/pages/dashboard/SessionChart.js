/**
 * This line chart gets displayed in the Dasboard page to show the user the history of his score and recommendations.
 * The chart shows the scores, and the tooltip shows the recommendations.
 *
 * Props:
 * - recommendations: [array of objects], where each object has
 * -- y: [number] the score of that time
 * -- tip: [array of strings] where each string is a recommendation
 *
 */

import React from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
// import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SessionChart = ({ sittingData, standingData }) => {
	const options = {
		animationEnabled: true,
		// exportEnabled: true,
		theme: "light2",
		title: {
			text: "Session History",
		},
		axisY: {
			title: "Score",
			suffix: "%",
		},
		axisX: {
			title: "Time",
		},
		toolTip: {
			shared: true,
		},
		legend: {
			cursor: "pointer",
			verticalAlign: "top",
			horizontalAlign: "center",
			dockInsidePlotArea: true,
		},
		data: [
			{
				type: "line",
				axisYType: "primary",
				name: "Sitting",
				showInLegend: true,
				toolTipContent: `
						<strong>Score</strong>: {y}% <br/> 
						<strong>Tiredness</strong>: {tiredness} <br/>
						<strong>Monitor</strong>: {monitor} <br/>
						<strong>Elbow</strong>: {elbow} <br/>
						<strong>Back</strong>: {back} <br/>
						<strong>Chair</strong>: {chair} <br/>
						<strong>Desk</strong>: {desk} <br/>
						<strong>Face</strong>: {face} <br/>
						<strong>Feet</strong>: {feet} <br/>`,
				dataPoints: sittingData,
			},
			{
				type: "line",
				axisYType: "primary",
				name: "Standing",
				showInLegend: true,
				toolTipContent: `
						<strong>Score</strong>: {y}% <br/> 
						<strong>Tiredness</strong>: {tiredness} <br/>
						<strong>Monitor</strong>: {monitor} <br/>
						<strong>Elbow</strong>: {elbow} <br/>
						<strong>Back</strong>: {back} <br/>
						<strong>Chair</strong>: {chair} <br/>
						<strong>Desk</strong>: {desk} <br/>
						<strong>Face</strong>: {face} <br/>
						<strong>Feet</strong>: {feet} <br/>`,
				dataPoints: standingData,
			},
		],
	};

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
};

export default SessionChart;
