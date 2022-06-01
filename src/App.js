import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/assets/css/main.css";
import "font-awesome/css/font-awesome.min.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home";
import Banner from "./pages/movie/Movies";
import PageDetail from "./pages/pageDetail/PageDetail";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/movies" element={<Banner />} />
				<Route path="/detail/:id" element={<PageDetail />} />
			</Routes>
		</div>
	);
}

export default App;
