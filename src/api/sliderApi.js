import { API_KEY } from "../constants/constants";
import axiosClient from "./axiosClient";

const sliderApi = {
	getAll: (params) => {
		const url = `/movie/popular?`;
		return axiosClient.get(url, { params });
	},
	getSimilar: (id) => {
		const url = `/movie/${id}/similar?api_key=${API_KEY}`;
		return axiosClient.get(url);
	},
};

export const getDetailItems = {
	getDetail: (id) => {
		const url = `/movie/${id}?api_key=${API_KEY}&language=en-US&page=2`;
		return axiosClient.get(url);
	},
	getTrailer: (id) => {
		const url = `/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=2`;
		return axiosClient.get(url);
	},
};

export default sliderApi;
