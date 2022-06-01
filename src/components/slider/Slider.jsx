import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";

const Slider = ({ movies }) => {
	const handleScrollTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<div className="slide">
			<div className="container-fluid col-md-10 p-0">
				<div className="slide-header text-white">Trailers</div>
				<Swiper
					spaceBetween={30}
					slidesPerView={4}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="swiper mySwiper"
				>
					{movies?.map((movie) => (
						<SwiperSlide className="swiper-slide" key={movie.id}>
							<Link to={`/detail/${movie.id}`} onClick={handleScrollTop()}>
								<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="sliderImage" />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Slider;
