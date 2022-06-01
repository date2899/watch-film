import React from "react";
import { useSelector } from "react-redux";
import Film from "../film/Film";

const Topmovie = ({ topMovies }) => {
	const sectionName = "Top Movies";

	return (
		<div className="topmovie ">
			<Film films={topMovies} sectionName={sectionName} />
		</div>
	);
};

export default Topmovie;
