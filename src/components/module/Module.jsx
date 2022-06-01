import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { getDetailItems } from "../../api/sliderApi";

const Module = () => {
	const { id } = useParams();
	const [key, setKey] = useState();

	useEffect(() => {
		const getTrailer = async () => {
			try {
				const response = await getDetailItems.getTrailer(id);
				setKey(response.results[0].key);
			} catch (err) {
				console.log(err);
			}
		};
		getTrailer();
	}, [id, key]);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};
	const opts = {
		height: "590",
		width: "840",
		playerVars: {
			autoplay: 1,
		},
	};
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<button onClick={openModal} className="detail-what">
				Trailer
			</button>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<YouTube videoId={key} opts={opts} />
			</Modal>
		</>
	);
};

export default Module;
