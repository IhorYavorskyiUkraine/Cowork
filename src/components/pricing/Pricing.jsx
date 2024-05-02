import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";

import {useFetchData, useLoading} from "../../hooks/hooks";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import check from "/images/pricing/check.svg";

import "./Pricing.scss"

const Pricing = () => {

	const [data, setData] = useState([]);

	const {loading, startLoading, stopLoading} = useLoading();
	const {fetchPricingPlans} = useFetchData();

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<div key={item.id} className="pricing__plan plan">
					<p className="plan__name">{item.name}</p>
					<p className="plan__about">{item.about}</p>
					<h3 className="plan__price">{item.price}</h3>
					<Link to="/" className="plan__btn btn"><span>{item.btn}</span></Link>
					<ul className="plan__features feature">
						<h4 className="feature__title">{item.featureTitle}:</h4>
						{Object.values(item.features)
							.map((feature, i) => (
								<li key={i} className="feature__feature">
									<img className="feature__check" src={check} alt="check"/>
									<p className="feature__item">{feature}</p>
								</li>
							))}
					</ul>
				</div>
			)
		});
		return <div className="pricing__plans">{items}</div>;
	}
	
	const onRequest = () => {
		startLoading();
		setTimeout(() => {
			fetchPricingPlans()
			.then(data => setData(data))
			.then(stopLoading());
		}, 300);
	}
	
	useEffect(() => {
		onRequest();
	}, []);
	
	return(
		<>
			<Header />
			<main className="main">
				<motion.section 
					className="pricing"
					initial={{y: 100}}
					whileInView={{y: 0}}
					transition={{duration: .3}}
					viewport={{once: true}}
				>
					<div className="container">
						<div className="pricing__content">
							<h1 className="pricing__title">Plans & Pricing</h1>
							<ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}>
								{loading ? <div className="loader"></div> : renderItems()}
							</ErrorBoundary>
						</div>
					</div>
				</motion.section>
			</main>
			<Footer/>
		</>
	);
}
export default Pricing;