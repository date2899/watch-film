import React, { useEffect, useState } from "react";
import Detail from "../../components/detail/Detail";
import Slider from "../../components/slider/Slider";

import { useParams } from "react-router-dom";
import sliderApi, { getDetailItems } from "../../api/sliderApi";

const PageDetail = () => {
	const { id } = useParams();
	const [similar, setSimilar] = useState();
	useEffect(() => {
		const fetchSimilar = async () => {
			try {
				const response = await sliderApi.getSimilar(id);
				setSimilar(response.results);
			} catch {
				console.log("error");
			}
		};
		fetchSimilar();
	}, [id]);
	console.log(similar);
	const [itemDetail, setItemDetail] = useState();
	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const response = await getDetailItems.getDetail(id);
				console.log(response);
				setItemDetail(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchDetails();
	}, [id]);
	return (
		<>
			<Detail itemDetail={itemDetail} />
			<Slider movies={similar} />
		</>
	);
};

export default PageDetail;
