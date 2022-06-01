import React from "react";
import Film from "../film/Film";

const Toptv = ({ topTvs }) => {
	const sectionName = "Top TV";

	return (
		<div className="toptv">
			<Film films={topTvs} sectionName={sectionName} />
		</div>
	);
};

export default Toptv;
