import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {useFetchData, useLoading} from "../../hooks/hooks.jsx";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

import "./Blog.scss"

const Blog = () => {

	const [data, setData] = useState([]);
	const [visibleData, setVisibleData] = useState(9);
	const [selectedFilter, setSelectedFilter] = useState("All");
	const [filteredItems, setFilteredItems] = useState([]);
	const [loadingBtn, setLoadingBtn] = useState(false);

	const {loading, startLoading, stopLoading} = useLoading();
	const{fetchBlog} = useFetchData();

	const renderItems = () => {
		let filteredItems = data;
		if (selectedFilter !== "All") {
			filteredItems = data.filter(item => item.category === selectedFilter);
		}

		const items = filteredItems.slice(0, visibleData).map(item => {
			return(
				<li key={item. id}className="blog__item blog-item">
					<div className="blog-item__wrapper">
						<div className="blog-item__image">
							<Link to={`/blog/${item.id}`}>
								<img src={`${item.image}`} alt="blog item"/>
							</Link>
						</div>
						<div className="blog-item__top">
							<p className="blog-item__category" style={{background: `${item.style}`}}>{item.category}</p>
							<p className="blog-item__time">{item.time}</p>
						</div>
						<h3 className="blog-item__title">
							<Link to={`/blog/${item.id}`}>{item.title}</Link>
						</h3>
						<Link to={`/blog/${item.id}`} className="blog-item__more">Read More</Link>
					</div>
				</li>
			)
		})
		return(
			<ul className="blog__list">
				{loading ? <div className="loader"></div> : items}
			</ul>
		);
	}	

	const onRequest = () => {
		setTimeout(() => {
			fetchBlog()
				.then(data => {
					setData(data);
					setFilteredItems(data);
				})
				.catch(error => {
					console.error("Error fetching data:", error);
				});
		}, 300);
	}

	useEffect(() => {
		startLoading();
		onRequest();
		stopLoading();
	}, []);

	const loadMore = () => {
		setLoadingBtn(true);
		setTimeout(() => {
			setVisibleData(prev => prev + 3); 
			setLoadingBtn(false);
		}, 300);
	};

	const handleFilter = (filter) => {
		setSelectedFilter(filter);
		if (filter === "All") {
			setFilteredItems(data);
		} else {
			setFilteredItems(data.filter((item) => item.category === filter));
		}
	};

	return(
		<>
			<Header />
			<main className="main">
				<section className="blog">
					<div className="container">
						<div className="blog__content">
							<div className="blog__filters">
								<button className="blog__filter btn" onClick={() => handleFilter("All")}><span>All</span></button>
								<button className="blog__filter btn" onClick={() => handleFilter("Trending")}><span>Trending</span></button>
								<button className="blog__filter btn" onClick={() => handleFilter("Productivity")}><span>Productivity</span></button>
								<button className="blog__filter btn" onClick={() => handleFilter("Talk")}><span>Talk</span></button>
							</div>
							{renderItems()}
							<div className="blog__btn">
							{filteredItems.length >  visibleData && (
								<button className="blog__button btn" onClick={loadMore} disabled={loadingBtn}>
									{ loadingBtn ? "Loading..." : "View More"}
								</button>)}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
		</>
	);
}
export default Blog;