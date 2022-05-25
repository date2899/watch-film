import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	return (
		<div className="header">
			<div className="container-fluid col-md-10 p-0">
				<nav className="navbar navbar-expand-sm navbar-light ">
					<div className="navbar-left ">
						<a className="navbar-brand" href="#">
							watchflix
						</a>
					</div>
					<div className="collapse navbar-collapse text-white" id="collapsibleNavId">
						<ul className="navbar-nav mt-2 mt-lg-0">
							<li className="nav-item ">
								<a className="nav-link" href="#">
									Home{" "}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Movies
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									TV Show
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Video
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									FAQ
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact Us
								</a>
							</li>
						</ul>
						<div className="navbar-right pl-auto">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item  mr-3">
									<FontAwesomeIcon icon="fas fa-search" />
								</li>
								<li className="nav-item  mr-3">
									<div className="navbar-avatar">
										<FontAwesomeIcon icon="fas fa-user" />
									</div>
								</li>
								<li className="nav-item  mr-3">
									<span className="navbar-name">John Glich</span>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
