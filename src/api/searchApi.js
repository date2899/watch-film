import { API_KEY } from "../constants/constants";
import axiosClient from "./axiosClient";

const searchApi = {
	getSearchApi: (searchQuery) => {
		const url = `/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
		return axiosClient.get(url);
	},
};
export default searchApi;
