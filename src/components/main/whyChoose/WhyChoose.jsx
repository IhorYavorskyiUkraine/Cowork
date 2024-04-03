import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { serverData } from "../../../../server/db.js"

import img from "/images/whyChoose/title.png"

import "./WhyChoose.scss"

const WhyChoose = () => {

	const [data, setData] = useState([]);

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<motion.li 
					key={item. id} 
					className="whychoose__item whychoose-item"
					initial={{y: 100}}
					whileInView={{y: 0}}
					transition={{duration: .2 * item.id}}
					viewport={{once: true}}>
					<div className="whychoose-item__wrapper">
						<div className="whychoose-item__image">
							<img src={`${item.image}`} alt="why choose item"/>
						</div>
						<h3 className="whychoose-item__title">{item.title}</h3>
						<p className="whychoose-item__text text">{item.text}</p>
					</div>
				</motion.li>
			)
		})
		return items;
	}

	useEffect(() => {
		setData(serverData[0].whyChoose);
	}, []);

	return(
		<>
			<section className="whychoose">
				<div className="container">
					<div className="whychoose__content">
						<motion.h2 
						className="whychoose__title title"
						initial={{y: 100}}
						whileInView={{y: 0}}
						transition={{duration: .4}}
						viewport={{once: true}}>Why Choose <span><img src={img} alt="img"/></span> Cowork?</motion.h2>
						<div className="whychoose__list">
							{renderItems()}
						</div>
					</div>
				</div>
			</section>
		</>
	)
} 

export default WhyChoose;