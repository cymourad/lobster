/**
 * This file contains the high level information of every blog post.
 */

import { SUBSYSTEM } from "./subsystems";
import { TEAM_MEMBER_NAME } from "./team";

// import blog cover images
import imageProcessingCover from "../images/blogs/posture-tracking-chris.png";
import workSessionBase from "../images/blogs/work-session-base.png";
import Desk from "../images/blogs/Desk.png";
import SampleAPIOutput from "../images/blogs/SampleAPIOutput.png";
import Schema from "../images/blogs/Schema.png";
import ElectricalPlatform from "../images/blogs/ElectricalPlatform.png";
import DeskFrameShaft from "../images/blogs/DeskFrameShaft.png";
import FinalTable from "../images/blogs/FinalTable.png";
import TableCoverDesign from "../images/blogs/TableCoverDesign.png";
import ShaftCoupler from "../images/blogs/ShaftCoupler.png";
import MotorMountAddOn from "../images/blogs/MotorMountAddOn.png";

export const BLOG_TITLE = {
	IMAGE_PROCESSING: "Image Processing Script",
	FRONT_END: "Front End Update",
	TABLE_FRAME: "Table Frame",
	STEPPER_MOTOR: "Stepper Motor",
	SERVER_IMPL: "Server Implementation",
	TEAM_MEETING: "Team Meeting",
	DESK: "VIVO PRIME Cables Desk",
	FLASK: "Created Flask App",
	DATABASE: "Created Database on AWS RDS (Relational Database Service)",
	INT_DATABASE: "Integrated Database with Flask App",
	MOUNTING_BRACKET: "Mounting Bracket",
	TABLE_TOP: "Table Top & Shaft Coupler",
	POSTURE_TRACKING: "Integrated Preliminary Posture Tracking",
	TEST_PHOTOS: "Test Photos",
	DOCKERIZED: "Dockerized Back-End System",
	HOUSING: "Built Electrical Housing Unit",
	SHAFT_COUPLER: "Shaft Coupler Arrived",
	FINAL_TABLE: "Final Desk Assembly",
	TRANSFER: "Table Handoff",
	TRANSFER2: "BLE Module Handoff",
	IMPROV: "Further Improvements to Image Processor",
	PROBLEM: "Motor Problem",
	PROBLEM_FIXED: "Motor Problem Fixed",
	COUPLER_ITER: "Coupler Design Iterations",
	NEW_COUPLER: "New Coupler",
	TABLE_COVER: "Table Cover",
	MOTOR_PROBLEM2: "Motor Torque Deficeincy",
	COUPLER2: "New Coupler for NEMA 23 Stepper Motor",
	NEW_MOTOR_MOUNT: "New Motor Mount for NEMA 23 STepper Motor",
	FILMED_TESTED: "Filmed and Tested Final Product",
};

const blogs = [
	{
		title: BLOG_TITLE.IMAGE_PROCESSING,
		image: imageProcessingCover,
		summary: (
			<ul>
				<li>
					Developed python script that uses machine vision to take an image as
					input and output an array of coordinates
				</li>
				<li>Implemented GluonCV Image processing library in python</li>
				<ul>
					<li>Pre-trained model : 'simple_pose_resnet18_v1b'</li>
					<li>Plot numpy array of joint coordinates with matplotlib</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2020-12-25"),
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSING],
	},
	{
		title: BLOG_TITLE.TABLE_FRAME,
		summary: (
			<ul>
				<li>Bought table frame</li>
				<ul>
					<li>
						<b>Model</b>: Manual Sit to Stand Adjustable Desk Riser Frame (Table
						Top Not Included), Black - PrimeCables�
					</li>
					<li>
						<b>Online Store</b>:{" "}
						<a href="https://www.shopperplus.ca/" target="_blank">
							https://www.shopperplus.ca/
						</a>
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2020-12-29"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.STEPPER_MOTOR,
		summary: (
			<ul>
				<li>Bought a NEMA 23 stepper motor</li>
				<ul>
					<li>
						<b>Model</b>: Nema 23 Bipolar 3Nm (425oz.in) 4.2A 57x57x114mm 4
						Wires Stepper Motor CNC
					</li>
					<li>
						<b>Online Store</b>:{" "}
						<a href="https://www.omc-stepperonline.com/" target="_blank">
							https://www.omc-stepperonline.com/
						</a>
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-01"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.SERVER_IMPL,
		summary: (
			<ul>
				<li>
					Talked about the implementation of the server around the machine
					vision script
				</li>
				<li>
					Daniel suggested using SQLAlchemy as the ORM instead of raw SQL
					requires, as well as an integration with flask RESTplus for easier API
					modelling.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.CHRIS, TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-02"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.TEAM_MEETING,
		summary: (
			<ul>
				<li>Team catch up + happy new year</li>
				<ul>
					<li>Daniel built machine vision script</li>
					<li>Jason ordered table frame and motors</li>
					<li>
						Alec got the board and BLE module and is waiting on motor drivers to
						arrive
					</li>
				</ul>
				<li>Tasks</li>
				<ul>
					<li>Daniel to build server and expose endpoints to Hussein</li>
					<li>
						Hussein to build minimal app that can send BLE command (send a
						float)
					</li>
					<li>Chris to assist Hussein</li>
					<li>Alec to test BLE module and motor drivers</li>
					<li>
						Jason to get plywood top for desk and to 3D print missing parts
						based on final measurements of the desk and the motors{" "}
					</li>
				</ul>
			</ul>
		),
		authors: [
			TEAM_MEMBER_NAME.CHRIS,
			TEAM_MEMBER_NAME.DANIEL,
			TEAM_MEMBER_NAME.JASON,
			TEAM_MEMBER_NAME.ALEC,
			TEAM_MEMBER_NAME.HUSSEIN,
		],
		date: new Date("2021-01-05"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.DESK,
		image: Desk,
		summary: (
			<ul>
				<li>
					Put together the Prime Cables desk frame using the provided screws
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-07"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.FLASK,
		image: SampleAPIOutput,
		summary: (
			<ul>
				<li>Created Flask app using flask restplus</li>
				<li>Running on localhost</li>
				<ul>
					<li>Root domain points to swagger API documentation</li>
				</ul>
				<li>Defined models and DTO�s (data transfer objects)</li>
				<ul>
					<li>Represented in swagger documentation</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-08"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.DATABASE,
		image: Schema,
		summary: (
			<ul>
				<li>Created database on AWS RDS (relational database service)</li>
				<li>Defined table structure for Users, Sessions and PostureData</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-09"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.INT_DATABASE,
		summary: (
			<ul>
				<li>Integrated database with flask app using SQLAlchemy</li>
				<li>Defined flow of data from each endpoint</li>
				<li>Created POST routes to insert objects (users and sessions)</li>
				<li>Created GET routes to select objects (users and sessions)</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-10"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.MOUNTING_BRACKET,
		summary: (
			<ul>
				<li>Bought a mounting bracket for the NEMA 23 stepper motor.</li>
				<ul>
					<li>
						<b>Model</b>: Mounting Bracket for Nema 23 Stepper Motor (Geared
						Stepper) CNC 3D Printer
					</li>
					<li>
						<b>Online Store</b>:{" "}
						<a href="https://www.amazon.ca/" target="_blank">
							https://www.amazon.ca/
						</a>
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-10"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.POSTURE_TRACKING,
		image: SampleAPIOutput,
		summary: (
			<ul>
				<li>
					Integrated preliminary posture tracking script made with GluonCV with
					the flask app
				</li>
				<ul>
					<li>
						On POST to session, the base64 image is decoded and passed into the
						image processing algorithm
					</li>
					<li>
						The numpy array of joint coordinates is converted into a PostureData
						object and stored in the DB
					</li>
				</ul>
				<li>
					Created service to calculate all the angles of the joints based on
					PostureData
				</li>
				<li>Defined preliminary min/max angles to define �Good Posture�</li>
				<li>Generated warnings and recommendations for non-ideal angles</li>
				<li>
					Converted the relative coordinate system into absolute measurements
					using the user�s pre-stored height
				</li>
				<li>
					Use basic trigonometry to determine height adjustments to chair and
					desk based on angle deviation and joint lengths.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-11"),
		subsystems: [SUBSYSTEM.IMAGE_PROCESSING, SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.TEST_PHOTOS,
		summary: (
			<ul>
				<li>Gathered test photos in various working scenarios.</li>
				<li>Gathered manual measurements to compare to algorithm output</li>
				<li>
					Made obvious tweaks to incorrect mathematical approaches in the code
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.CHRIS, TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-13"),
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSING],
	},
	{
		title: BLOG_TITLE.TABLE_TOP,
		summary: (
			<ul>
				<li>Bought a Table Top.</li>
				<ul>
					<li>
						<b>Model</b>: Spruce Polywood (Quantity - 2)
					</li>
					<li>
						<b>Online Store</b>:{" "}
						<a href="https://rona.narvar.com/" target="_blank">
							https://rona.narvar.com/
						</a>
					</li>
				</ul>
				<li>Bought a Shaft Coupler.</li>
				<ul>
					<li>
						<b>Online Store</b>:{" "}
						<a href="https://www.digitmakers.ca/" target="_blank">
							https://www.digitmakers.ca/
						</a>
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-15"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.DOCKERIZED,
		summary: (
			<ul>
				<li>Dockerized the back-end system.</li>
				<li>Created an EC2 instance (t2.micro) on AWS to run the service</li>
				<li>
					Registered domain and created ssl certs for{" "}
					<a href="www.posture.spottscheduler.com/" target="_blank">
						www.posture.spottscheduler.com/
					</a>
				</li>
				<li>
					Used Route53 to perform DNS routing of the domain name to the EC2
					instance public IP
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-01-17"),
		subsystems: [SUBSYSTEM.BACK_END],
	},
	{
		title: BLOG_TITLE.HOUSING,
		image: ElectricalPlatform,
		summary: (
			<ul>
				<li>Screwed electrical part housing unit to table top.</li>
				<li>
					It was discovered that 3D printing the electrical part housing unit
					would be quite expensive.
				</li>
				<ul>
					<li>
						As an alternative, a woodshop solution was pursued and resulted in a
						shelving unit with the same design shape
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-17"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.SHAFT_COUPLER,
		image: DeskFrameShaft,
		summary: (
			<ul>
				<li>Shaft coupler arrived.</li>
				<li>Screwed table top to table frame.</li>
				<li>
					Observed the quality of connection between the shaft coupler, the
					motor, and the table turning rod (used to elevate the table).
				</li>
				<ul>
					<li>
						Deemed fit for use based on the snugness of the fit between the
						motor shaft and the coupler, and between the turning rod and the
						coupler
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-18"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.SHAFT_COUPLER,
		image: FinalTable,
		summary: (
			<ul>
				<li>
					Connected the motor, motor mount, and turning rod to the table top,
					ultimately finalizing the first iterative prototype before any major
					modifications are to be made from testing the overall system.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-20"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.TRANSFER,
		summary: (
			<ul>
				<li>
					Gave the table to Alec for electrical implementation and motor
					testing.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-01-22"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.TRANSFER2,
		summary: (
			<ul>
				<li>
					Gave the BLE module and associated hardware to Hussein for testing.
					According to Hussein, the app worked!
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.ALEC],
		date: new Date("2021-02-21"),
		subsystems: [SUBSYSTEM.CONTROLS, SUBSYSTEM.FRONT_END, SUBSYSTEM.ELECTRICAL],
	},
	{
		title: BLOG_TITLE.IMPROV,
		summary: (
			<ul>
				<li>Added a session summary endpoint.</li>
				<ul>
					<li>GET /session/summary</li>
					<li>
						For a given user_id and session_id, the average results of the
						session will be returned with the outliers filtered out.
					</li>
				</ul>
				<li>Detect Tiredness.</li>
				<ul>
					<li>
						Everytime a new image is received, a rolling average of the previous
						images is used to see if a negative trend is occurring.
					</li>
					<li>
						Will trigger a recommendation to the user to take a break and switch
						work positions.
					</li>
				</ul>
				<li>Interval recommendation to switch work positions.</li>
				<ul>
					<li>
						If the user has been sitting or standing for more than 30 minutes
						straight, a recommendation to switch will be sent.
					</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.DANIEL],
		date: new Date("2021-02-22"),
		subsystems: [SUBSYSTEM.BACK_END, SUBSYSTEM.IMAGE_PROCESSING],
	},
	{
		title: BLOG_TITLE.FRONT_END,
		image: workSessionBase,
		summary: (
			<ul>
				<li>
					Developed the initial setup pages (sign in / sign up / general
					information)
				</li>
				<li>Developed the home page template</li>
				<li>Developed the base of the work session functionality</li>
				<li>Successfully connected frontend application with backend API</li>
				<li>
					Successfully connected frontend BLE library with Bluetooth module in
					test application
				</li>
				<li>
					Created simple{" "}
					<a href="https://www.youtube.com/watch?v=oBfTOBPypMQ" target="_blank">
						demo video
					</a>{" "}
					of progress
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.HUSSEIN],
		date: new Date("2021-02-23"),
		subsystems: [
			SUBSYSTEM.FRONT_END,
			SUBSYSTEM.BACK_END,
			SUBSYSTEM.CONTROLS,
			SUBSYSTEM.ELECTRICAL,
		],
	},
	{
		title: BLOG_TITLE.PROBLEM,
		summary: (
			<ul>
				<li>Learned from Alec that the motor is not able to lift the table.</li>
				<ul>
					<li>Shafts seem to be jammed.</li>
					<ul>
						<li>
							Cause might be not enough torque or not enough current/voltage
							supplied to the motor.
						</li>
					</ul>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-02-23"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.PROBLEM_FIXED,
		summary: (
			<ul>
				<li>Problem with the motor was the motor driver.</li>
				<ul>
					<li>Motor drive selected: MA860H (2.40-7.20A peak current).</li>
					<li>Previous motor drive: L298N (2.0A peak current).</li>
					<li>Problems with previous motor driver:</li>
					<ul>
						<li>
							Peak current allowed from the driver is not enough to power.
						</li>
					</ul>
					<li>The motor provides enough torque to lift the table.</li>
					<li>Power supply change:</li>
					<ul>
						<li>5V, 5A to 24 V, 10 A.</li>
					</ul>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.ALEC],
		date: new Date("2021-03-01"),
		subsystems: [
			SUBSYSTEM.MECHANICAL,
			SUBSYSTEM.CONTROLS,
			SUBSYSTEM.ELECTRICAL,
		],
	},
	{
		title: BLOG_TITLE.COUPLER_ITER,
		summary: (
			<ul>
				<li>
					Motor is able to lift the table, but the coupler wore out after
					continuous usage.
				</li>
				<li>Summary of couplers used so far are below:</li>
				<ul>
					<li>1st Coupler:</li>
					<ul>
						<li>Material - Stereolithography (SLA)</li>
						<ul>
							<li>
								Soft mold, due to the fact that they cannot withstand high
								pressure forces
							</li>
							<li>
								We abandoned the use of the key because the amount of friction
								it provided was enough to rotate with the motor shaft
							</li>
							<li>
								As a result of continuous testing, the coupler wore out, thus
								eliminating the friction needed to lift the table
							</li>
						</ul>
					</ul>
					<li>2nd Coupler:</li>
					<ul>
						<li>Material - PC-ABS</li>
						<ul>
							<li>
								High-impact thermoplastic ideal for functional prototyping,
								tooling and low-volume manufacturing
							</li>
							<li>
								We also re-incorporated the use of the key with the help of
								design changes
							</li>
							<li>
								Unfortunately, we underestimated the friction force required to
								lower the table
							</li>
						</ul>
					</ul>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.ALEC],
		date: new Date("2021-03-02"),
		subsystems: [
			SUBSYSTEM.MECHANICAL,
			SUBSYSTEM.CONTROLS,
			SUBSYSTEM.ELECTRICAL,
		],
	},
	{
		title: BLOG_TITLE.NEW_COUPLER,
		summary: (
			<ul>
				<li>
					Designed new coupler with M4 screw holes to allow for greater friction
					with the motor shaft as well as the key.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-03-07"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.TABLE_COVER,
		image: TableCoverDesign,
		summary: (
			<ul>
				<li>
					Bought custom-designed table top for the table with logo from
					Vistaprint.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-03-10"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.MOTOR_PROBLEM2,
		summary: (
			<ul>
				<li>Table cloth arrived.</li>
				<li>
					New coupler provides enough friction to raise the table, but still not
					providing enough friction to lower the table.
				</li>
				<li>
					Hypothesized that the motor doesn�t have enough torque to lower the
					table.
				</li>
				<ul>
					<li>Bought a new NEMA 34 stepper motor with 8 N.m torque.</li>
				</ul>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.ALEC],
		date: new Date("2021-01-16"),
		subsystems: [
			SUBSYSTEM.MECHANICAL,
			SUBSYSTEM.CONTROLS,
			SUBSYSTEM.ELECTRICAL,
		],
	},
	{
		title: BLOG_TITLE.COUPLER2,
		image: ShaftCoupler,
		summary: (
			<ul>
				<li>
					Designed a new coupler with M4 screw holes for the new NEMA 34 stepper
					motor to be 3D printed by Alec.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-03-17"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.NEW_MOTOR_MOUNT,
		image: MotorMountAddOn,
		summary: (
			<ul>
				<li>
					Designed an add-on motor mount with M5 screw holes for the new NEMA 34
					stepper motor to be 3D printed by Alec.
				</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-03-19"),
		subsystems: [SUBSYSTEM.MECHANICAL],
	},
	{
		title: BLOG_TITLE.FILMED_TESTED,
		summary: (
			<ul>
				<li>Successfully filmed and tested the entire system.</li>
			</ul>
		),
		authors: [TEAM_MEMBER_NAME.JASON],
		date: new Date("2021-03-21"),
		subsystems: [
			SUBSYSTEM.MECHANICAL,
			SUBSYSTEM.CONTROLS,
			SUBSYSTEM.BACK_END,
			SUBSYSTEM.ELECTRICAL,
			SUBSYSTEM.FRONT_END,
			SUBSYSTEM.IMAGE_PROCESSING,
		],
	},
];

export default blogs;
