import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//JS FILE
// import { serverData } from "../../../../server/db.js";
// API REQUEST
import {useFetchData, useLoading} from "../../../hooks/hooks.jsx";

import "./Trusted.scss"

const Trusted = () => {

	const [data, setData] = useState([]);
	const {loading, startLoading, stopLoading} = useLoading();

	const{fetchTrusted} = useFetchData();

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<li key={item. id} className="trusted__item trusted-item">
					<div className="trusted-item__image">
						<img className="item-image" src={`${item.image}`} alt="trusted item"/>
					</div>
				</li>
			)
		});
		return <ul className="trusted__list">{items}</ul>;
	}
	
	//FROM JS FILE
	// useEffect(() => {
	// 	startLoading();
	// 	setData(serverData[0].trustedCompanies);
	// 	stopLoading();
	// }, []);

	//API REQUEST
	const onRequest = () => {
		startLoading();
		setTimeout(() => {
			fetchTrusted()
				.then(data => setData(data))
				.then(stopLoading());
		}, 300);
	}

	useEffect(() => {
		onRequest();
	}, []);

	return (
		<>	
			<motion.section 
				className="trusted"
				initial={{y: 100}}
				whileInView={{y: 0}}
				transition={{duration: .3}}
				viewport={{once: true}}
			>
				<div className="container">
					<div className="trusted__content">
						<h2 className="trusted__label label">Trusted by Leading Companies</h2>
							{loading ? <div className="loader"></div> : renderItems()}
						</div>
					</div>
			</motion.section>
		</>
	)
}

export default Trusted;