import React from "react";
import Module from "../module/Module";

const Detail = ({ itemDetail }) => {
	return (
		<>
			{itemDetail ? (
				<div className="detail" style={{ color: "" }}>
					<div
						className="detail-banner "
						style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${itemDetail.backdrop_path})` }}
					>
						<div className="detail-content">
							<div className="detail-description">
								<p className="detail-title">{itemDetail.title}</p>
								<p className="detail-overview">{itemDetail.overview}</p>
								<button className="detail-what">What Now</button>
								<Module />
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="1">hello</div>
			)}
		</>
	);
};

export default Detail;
