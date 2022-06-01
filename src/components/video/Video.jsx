import React from "react";
import playcircle from "../../assets/image/PlayCircle.png";
import group from "../../assets/image/Group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faEye } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
	return (
		<div className="video text-dark">
			<div className="container-fluid col-md-10 p-0">
				<div className="video-playe bg-white">
					<div className="image">
						<img src={playcircle} alt="" srcSet="" />
					</div>
					<div className="text">
						<h2 className="video-header">Her & Him</h2>
						<p className="video-subheading">
							Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt
							ut labore et.
						</p>
					</div>
				</div>
				<div className="video-episodes text-white">
					<div className="episodes d-flex flex-wrap justify-content-between">
						<div className="episode episode1 ">
							<div className="espisode-image col-4">
								<div className="image">
									<img src={group} alt="" srcSet="" />
								</div>
							</div>
							<div className="espisode-text col-8">
								<p className="espi">Episode 1</p>
								<h2 className="header">First Meet</h2>
								<p className="subheading">
									Lorem ipsum dolor sit amet, <br />
									consec tetur adipis cing elit
								</p>
								<p className="duration">
									<span className="dura">
										<FontAwesomeIcon icon={faEye} />
										21.3K views
									</span>
									<span className="calen">
										<FontAwesomeIcon icon={faCalculator} />
										June 2, 2021
									</span>
								</p>
							</div>
						</div>
						<div className="episode episode2 ">
							<div className="espisode-image col-4">
								<div className="image">
									<img src={group} alt="" srcSet="" />
								</div>
							</div>
							<div className="espisode-text col-8">
								<p className="espi">Episode 1</p>
								<h2 className="header">First Meet</h2>
								<p className="subheading">
									Lorem ipsum dolor sit amet, <br />
									consec tetur adipis cing elit
								</p>
								<p className="duration">
									<span className="dura">
										<FontAwesomeIcon icon={faEye} />
										21.3K views
									</span>
									<span className="calen">
										<FontAwesomeIcon icon={faCalculator} />
										June 2, 2021
									</span>
								</p>
							</div>
						</div>
						<div className="episode episode3 ">
							<div className="espisode-image col-4">
								<div className="image">
									<img src={group} alt="" srcSet="" />
								</div>
							</div>
							<div className="espisode-text col-8">
								<p className="espi">Episode 1</p>
								<h2 className="header">First Meet</h2>
								<p className="subheading">
									Lorem ipsum dolor sit amet, <br />
									consec tetur adipis cing elit
								</p>
								<p className="duration">
									<span className="dura">
										<FontAwesomeIcon icon={faEye} />
										21.3K views
									</span>
									<span className="calen">
										<FontAwesomeIcon icon={faCalculator} />
										June 2, 2021
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
