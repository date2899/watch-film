import React from "react";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMapMarked, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<div className="d-flex text-white content">
				<div className="footer-left ">
					<div className="left-content">
						<div className="left-header">Watchflix</div>
						<div className="left-subheading">
							Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt
							ut labore et.
						</div>
						<div className="left-text">Join Newsletters</div>
						<div className="left-input">
							<input type="text" id="newsletter" placeholder="Insert your mail here"></input>
							<span className="icon">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</div>
					</div>
				</div>
				<div className="footer-right ">
					<div className="right-content">
						<div className="right-group-container d-lg-flex">
							<ul className="items">
								<li className="item">Product</li>
								<li className="item">Movies</li>
								<li className="item">TV Show</li>
								<li className="item">Videos</li>
							</ul>
							<ul className="items">
								<li className="item">Media Group</li>
								<li className="item">Nice Studio</li>
								<li className="item">Nice News</li>
								<li className="item">Nice TV</li>
							</ul>
							<ul className="items">
								<li className="item">Sitemap</li>
								<li className="item">About</li>
								<li className="item">Careers</li>
								<li className="item">Press</li>
							</ul>
						</div>
						<div className="right-contact d-flex">
							<div className="location">
								<FontAwesomeIcon icon={faMapMarked} />
								8819 Ohio St. South Gate, California 90280
							</div>
							<div className="mail">
								<FontAwesomeIcon icon={faEnvelope} />
								ourstudio@hello.com
							</div>
							<div className="phone">
								<FontAwesomeIcon icon={faPhoneAlt} />
								+271 386-647-3637
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
