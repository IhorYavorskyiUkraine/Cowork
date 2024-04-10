import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useFetchData from "../../../hooks/fetchData.jsx";

import { serverData } from "../../../../server/db.js"

import img from "/images/insights/img.png"

import "./Insights.scss"

const Insights = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [index, setIndex] = useState(3);
	const [dataEnded, setDataEnded] = useState(false);

	const{fetchTables} = useFetchData();

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<motion.li 
					key={item. id}
					className="insights__item insights-item"
					initial={{y: 100}}
					whileInView={{y: 0}}
					transition={{duration: .4}}
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
		return items;
	}	

	const onRequest = () => {
		if(index > 10) {
			setDataEnded(true);
		}
		
		dataEnded ? setLoading(false) : onDataLoading();

		fetchTables(index)
			.then(data => setData(data))
			.then(onDataLoaded());
	}

	const onDataLoading = () => {
		setLoading(true);
	}

	const onDataLoaded = () => {
		setLoading(false);
		setIndex(index + 3);
	}

	useEffect(() => {
		onRequest();
	}, []);

	const clazz = loading ? "insights__button_disabled btn" : "insights__button btn";

	return (
		<>
			<motion.section 
			className="insights"
			initial={{y: 100}}
			whileInView={{y: 0}}
			transition={{duration: .4}}
			viewport={{once: true}}>
				<div className="container">
					<div className="insights__content">
						<div className="insights__text">
							<div className="insights__label label">Cowork Chronicles </div>
							<div className="insights__title title">Insights, Innovation, and <span> <img src={img} alt="img"/></span> Inspiration</div>
							<div className="insights__p text">Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork experience.</div>
						</div>
						<ul className="insights__list">
							{renderItems()}
						</ul>
						<div className="insights__btn">
							<button 
								className={clazz}
								onClick={onRequest}
								disabled={loading}
								style={dataEnded ? {display: "none"} : null}>
								<span>View All</span>
							</button>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default Insights;