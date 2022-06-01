import React from "react";
import playbutton from "../../assets/image/PlayButton.png";

const Banner = () => {
	return (
		<div className="banner text-white">
			<div className="container-fluid col-md-10 p-0 h-100">
				<div className="d-flex flex-wrap h-100">
					<div className="banner-left col-md-6">
						<img src={playbutton} alt="" srcSet="" />
					</div>
					<div className="banner-right col-md-6">
						<h1 className="banner-header">The Legend of Sunrise</h1>
						<p className="banner-subheading2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam.
						</p>
						<p className="banner-subheading2">
							Genre : Adventure <br />
							Duration : 2 hr 45 mins <br />
							Ratings : 4.5
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
