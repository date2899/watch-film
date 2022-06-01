import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";

const Film = ({ films, sectionName }) => {
	return (
		<>
			<div className="container-fluid col-md-10 p-0">
				<div className="watch-header d-flex flex-wrap justify-content-between text-white">
					<div className="watch-heading">{sectionName}</div>
					<div className="watch-subheading">View More</div>
				</div>
				<div className="watch-film d-flex flex-wrap justify-content-between">
					{films?.map((film) => (
						<div className="item bg-white" key={film.id}>
							<div className="item-image">
								<img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
							</div>
							<div className="item-content">
								<div className="label">
									<p className="label-header">Fantasy</p>
								</div>
								<div className="duration-rating">
									<div className="duration">
										<FontAwesomeIcon icon={faClock} />
										1hr 24mins
									</div>
									<div className="rating">
										<FontAwesomeIcon icon={faEye} />
										21.3K views
									</div>
								</div>
								<div className="film-name">{film.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Film;
