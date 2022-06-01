import React, { useEffect, useState } from "react";
import { getSliderSuccess } from "../../redux/actions/sliderAction";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Lastwatch from "../../components/lastwatch/Lastwatch";
import Slider from "../../components/slider/Slider";
import Topmovie from "../../components/topmovie/Topmovie";
import Toptv from "../../components/toptv/Toptv";
import Video from "../../components/video/Video";
import sliderApi from "../../api/sliderApi";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "../../constants/constants";

const Home = () => {
	const movies = useSelector((store) => store.slider.results);
	const [films, setFilms] = useState({ lastWatchs: [], topMovies: [], topTvs: [] });

	const [params, setParams] = useState({
		api_key: API_KEY,
		languages: "vi-VN",
		page: 4,
	});
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await sliderApi.getAll(params);
				if (response) {
					setFilms({
						lastWatchs: response.results.slice(0, 5),
						topMovies: response.results.slice(10, 15),
						topTvs: response.results.slice(5, 10),
					});
				}
				return dispatch(getSliderSuccess(response));
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovies();
	}, [params, dispatch]);

	return (
		<>
			<Banner />
			<Slider movies={movies} />
			<Lastwatch movies={movies} lastWatchs={films.lastWatchs} />
			<Topmovie movies={movies} topMovies={films.topMovies} />
			<Toptv movies={movies} topTvs={films.topTvs} />
			<Video />
			<Footer />
		</>
	);
};

export default Home;
