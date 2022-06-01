import React, { useState } from "react";
import { useSelector } from "react-redux";
import Film from "../film/Film";

const Lastwatch = ({ lastWatchs }) => {
	const sectionName = "My Last What";
	return (
		<div className="lastwatch ">
			<Film films={lastWatchs} sectionName={sectionName} />
		</div>
	);
};

export default Lastwatch;
