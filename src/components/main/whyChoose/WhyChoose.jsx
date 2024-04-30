import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//JS FILE
// import { serverData } from "../../../../server/db.js";

// API REQUEST
import {useFetchData, useLoading} from "../../../hooks/hooks.jsx";

import img from "/images/whyChoose/title.png"

import "./WhyChoose.scss"

const WhyChoose = () => {

	const [data, setData] = useState([]);
	const {loading, startLoading, stopLoading} = useLoading();

	const{fetchTWhyChoose} = useFetchData();

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<motion.li 
					key={item. id} 
					className="whychoose__item whychoose-item"
					initial={{y: 100}}
					whileInView={{y: 0}}
					transition={{duration: .2 * item.id}}
					viewport={{once: true}}
				>
					<div className="whychoose-item__wrapper">
						<div className="whychoose-item__image">
							<img src={`${item.image}`} alt="why choose item"/>
						</div>
						<h3 className="whychoose-item__title">{item.title}</h3>
						<p className="whychoose-item__text text">{item.text}</p>
					</div>
				</motion.li>
			)
		});

		return <ul className="whychoose__list">{items}</ul>;
	}
	
	//FROM JS FILE
	// useEffect(() => {
	// 	startLoading();
	// 	setData(serverData[0].whyChoose);
	// 	stopLoading();
	// }, []);

	//API REQUEST
	const onRequest = () => {
		startLoading();
		setTimeout(() => {
			fetchTWhyChoose()
				.then(data => setData(data))
				.then(stopLoading());
		}, 300);
	}

	useEffect(() => {
		onRequest();
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
							transition={{duration: .3}}
							viewport={{once: true}}
						>
						Why Choose <span><img src={img} alt="img"/></span> Cowork?
						</motion.h2>
						{loading ? 	<motion.div 
											className="loader"
											initial={{y: 100}}
											whileInView={{y: 0}}
											transition={{duration: .3}}
											viewport={{once: true}}
										></motion.div>
										: 
										renderItems()}
					</div>
				</div>
			</section>
		</>
	)
} 

export default WhyChoose;