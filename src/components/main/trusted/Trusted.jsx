import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { serverData } from "../../../../server/db.js"

import "./Trusted.scss"

const Trusted = () => {

	const [data, setData] = useState([]);

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<li key={item. id} className="trusted__item trusted-item">
					<div className="trusted-item__image">
						<img src={`${item.image}`} alt="trusted item"/>
					</div>
				</li>
			)
		})
		return items;
	}

	useEffect(() => {
		setData(serverData[0].trustedCompanies);
	}, []);

	return (
		<>	
			<motion.section 
				className="trusted"
				initial={{y: 100}}
				whileInView={{y: 0}}
				transition={{duration: .4}}
				viewport={{once: true}}
				>
				<div className="container">
					<div className="trusted__content">
						<h2 className="trusted__label label">Trusted by Leading Companies</h2>
							<ul className="trusted__list">
								{renderItems()}
							</ul>
						</div>
					</div>
			</motion.section>
		</>
	)
}

export default Trusted;