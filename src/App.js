import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/assets/css/main.css";

import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner";
import Slider from "./components/slider/Slider";
import Lastwatch from "./components/lastwatch/Lastwatch";
import Topmovie from "./components/topmovie/Topmovie";
import Toptv from "./components/toptv/Toptv";
import Video from "./components/video/Video";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Slider />
			<Lastwatch />
			<Topmovie />
			<Toptv />
			<Video />
		</div>
	);
}

export default App;
