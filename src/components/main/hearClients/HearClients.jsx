import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//JS FILE
// import { serverData } from "../../../../server/db.js"
// API REQUEST
import {useFetchData, useLoading} from "../../../hooks/hooks.jsx";

import Slider from "../../slider/Slider.jsx";

import "./HearClients.scss"

const HearClients = () => {

	const [data, setData] = useState([]);
	const {loading, startLoading, stopLoading} = useLoading();

	const{fetchHearClients} = useFetchData();

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<li 
					key={item. id} 
					className="hearClients__item hearClients-item"
				>
					<div className="hearClients-item__wrapper">
						<div className="hearClients-item__image">
							<img src={`${item.image}`} alt="why choose item"/>
						</div>
						<p className="hearClients-item__text">{item.text}</p>
						<h3 className="hearClients-item__name">{item.name}</h3>
						<p className="hearClients-item__position">{item.position}</p>
					</div>
				</li>
			)
		})
		return (
			<ul className="hearClients__list">
				{items}
			</ul>
		);
	}

	//FROM JS FILE
	// useEffect(() => {
	// 	setData(serverData[0].hearClients);
	// }, []);
	
	//API REQUEST
	const onRequest = () => {
		startLoading();
		setTimeout(() => {
			fetchHearClients()
				.then(data => setData(data))
				.then(stopLoading());
		}, 300);
	}

	useEffect(() => {
		onRequest();
	}, []);

	return(
		<>
			<motion.section 
				className="hearClients"
				initial={{y: 100}}
				whileInView={{y: 0}}
				transition={{duration: .4}}
				viewport={{once: true}}
			>
				<div className="container">
					<div className="hearClients__content">
						<div className="hearClients__text">
							<p className="hearClients__label label">COWORK IN WORDS</p>
							<h2 className="hearClients__title title">Hear It from Our Clients</h2>
						</div>
						{loading? <div className="loader"></div> : renderItems()}
						<Slider />
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default HearClients;