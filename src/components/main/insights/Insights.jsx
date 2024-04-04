import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { serverData } from "../../../../server/db.js"

import img from "/images/insights/img.png"

import "./Insights.scss"

const Insights = () => {

	const [data, setData] = useState([]);

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<li 
					key={item. id} 
					className="insights__item insights-item"
					>
					<div className="insights-item__wrapper">
						<div className="insights-item__image">
							<img src={`${item.image}`} alt="why choose item"/>
						</div>
						<div className="insights-item__top">
							<p className="insights-item__trend">{item.trend}</p>
							<p className="insights-item__time">{item.time}</p>
						</div>
						<h3 className="insights-item__title">{item.title}</h3>
						<a href={item.more} className="insights-item__more">Read More</a>
					</div>
				</li>
			)
		})
		return items;
	}	

	const getMoreItems = () => {
		setData(() => { return [...data, serverData[0].tables.slice(4, 6)]});
	}

	useEffect(() => {
		setData(serverData[0].tables.slice(0, 3));
	}, []);

	return (
		<>
			<section className="insights">
				<div className="container">
					<div className="insights__content">
						<div className="insights__text">
							<div className="insights__label label">Cowork Chronicles </div>
							<div className="insights__title title">Insights, Innovation, and <span> <img src={img} alt=""/></span> Inspiration</div>
							<div className="insights__p text">Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</div>
						</div>
						<ul className="insights__list">
							{renderItems()}
						</ul>
						<button style={{background: "red", width: "100px", height: "100px"}} onClick={getMoreItems}></button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Insights;