import { useState, useEffect } from "react";
import { motion } from "framer-motion";
//JS FILE
// import { serverData } from "../../../../server/db.js"
// API REQUEST
import {useFetchData, useLoading} from "../../../hooks/hooks.jsx";

import img from "/images/insights/img.png"

import "./Insights.scss"

const Insights = () => {

	const [data, setData] = useState([]);
	const [visibleData, setVisibleData] = useState(3);
	const [loadingBtn, setLoadingBtn] = useState(false);

	const {loading, startLoading, stopLoading} = useLoading();
	const{fetchTables} = useFetchData();

	const renderItems = () => {
		const items = data.slice(0, visibleData).map(item => {
			return(
				<motion.li 
					key={item. id}
					className="insights__item insights-item"
					initial={{y: 100}}
					whileInView={{y: 0}}
					transition={{duration: .3}}
					viewport={{once: true}}
				>
					<div className="insights-item__wrapper">
						<div className="insights-item__image">
							<a href="/">
								<img src={`${item.image}`} alt="why choose item"/>
							</a>
						</div>
						<div className="insights-item__top">
							<p className="insights-item__trend" style={{background: `${item.style}`}}>{item.trend}</p>
							<p className="insights-item__time">{item.time}</p>
						</div>
						<h3 className="insights-item__title">
							<a href="/">{item.title}</a>
						</h3>
						<a href={item.more} className="insights-item__more">Read More</a>
					</div>
				</motion.li>
			)
		})
		return(
			<ul className="insights__list">
				{loading ? <div className="loader"></div> : items}
			</ul>
		);
	}	

	const onRequest = () => {
		setTimeout(() => {
			fetchTables()
				.then(data => setData(data))
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

	return (
		<>
			<motion.section 
				className="insights"
				initial={{y: 100}}
				whileInView={{y: 0}}
				transition={{duration: .3}}
				viewport={{once: true}}
			>
				<div className="container">
					<div className="insights__content">
						<div className="insights__text">
							<div className="insights__label label">Cowork Chronicles </div>
							<div className="insights__title title">Insights, Innovation, and <span> <img src={img} alt="img"/></span> Inspiration</div>
							<div className="insights__p text">Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</div>
						</div>
							{renderItems()}
						<div className="insights__btn">
						{visibleData < data.length && (
							<button className="insights__button btn" onClick={loadMore} disabled={loadingBtn}>
								{ loadingBtn ? "Loading..." : "View More"}
							</button>)}
						</div>
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default Insights;