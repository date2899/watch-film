import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import searchApi from "../../api/searchApi";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [search, setSearch] = useState(false);
	const [input, setInput] = useState("");
	const [listSearch, setListSearch] = useState();
	useEffect(() => {
		const fetchSearch = async () => {
			try {
				const response = await searchApi.getSearchApi(input);
				console.log(response);
				return setListSearch(response.results);
			} catch (error) {
				alert(error.message);
			}
		};
		if (input) {
			fetchSearch();
		}
	}, [input]);
	window.addEventListener("scroll", () => {
		const height = window.scrollY;
		if (height >= 150) {
			setScroll(true);
		} else setScroll(false);
	});
	return (
		<div className={scroll ? "section-header scroll-header" : "section-header"}>
			<div className="container-fluid col-md-10 p-0">
				<nav className="navbar navbar-expand-sm navbar-light ">
					<div className="navbar-left ">
						<a className="navbar-brand" href="/">
							watchflix
						</a>
					</div>
					<div className="collapse navbar-collapse text-white" id="collapsibleNavId">
						<ul className="navbar-nav mt-2 mt-lg-0">
							<li className="nav-item ">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/movies">
									Movies
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/tvshow">
									TV Show
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/video">
									Video
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/faq">
									FAQ
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/pricing">
									Pricing
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
						<div className="navbar-right pl-auto">
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								{search ? (
									<li className="nav-item  mr-3">
										<input
											type="search"
											value={input}
											placeholder="search"
											className="input-search"
											onChange={(e) => {
												setInput(e.target.value);
											}}
										/>
										<button
											className="btn btn-submit"
											onClick={() => {
												setSearch(!search);
												setInput("");
											}}
										>
											Search
										</button>
										{input && (
											<>
												{listSearch && listSearch.length > 0 && (
													<ul className="listSearch">
														{listSearch.map((item) => (
															<li
																key={item.id}
																onClick={() => {
																	setInput("");
																}}
															>
																<Link to={`/detail/${item.id}`}>{item.title}</Link>
															</li>
														))}
													</ul>
												)}
											</>
										)}
									</li>
								) : (
									<li
										className="nav-item  mr-3"
										onClick={() => {
											setSearch(!search);
										}}
									>
										<FontAwesomeIcon icon={faSearch} />
									</li>
								)}
								<li className="nav-item  mr-3">
									<div className="navbar-avatar">
										<FontAwesomeIcon icon={faUser} />
									</div>
								</li>
								<li className="nav-item  mr-3">
									<span className="navbar-name">John Glich</span>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
