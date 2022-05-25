import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
	return (
		<div className="slide">
			<div className="container-fluid col-md-10 p-0">
				<div className="slide-header text-white">Trailers</div>
				<Swiper
					spaceBetween={30}
					slidesPerView={4}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					className="swiper mySwiper"
				>
					<SwiperSlide className="swiper-slide">
						Slide 1<span className="index">01</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 2<span className="index">02</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 3<span className="index">03</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 4<span className="index">04</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 5<span className="index">05</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 6<span className="index">06</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 7<span className="index">07</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						Slide 8<span className="index">08</span>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Slider;
