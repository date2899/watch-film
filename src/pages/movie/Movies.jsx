import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/banner/Banner";
import Slider from "../../components/slider/Slider";

const Movies = () => {
	const movies = useSelector((store) => store.slider.results);

	return (
		<>
			<Banner />
			<Slider movies={movies} />
		</>
	);
};

export default Movies;
