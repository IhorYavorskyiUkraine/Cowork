import { motion } from "framer-motion"

import img from "/images/statistics/image.png"

import "./Statistics.scss"

const Statistics = () => {
	return(
		<>
			<section className="statistics">
				<div className="container">
					<div className="statistics__content">
						<motion.div 
							className="statistics__column"
							initial={{x: -100}}
							whileInView={{x: 0}}
							transition={{duration: .4}}>
							<p className="statistics__label label">Cowork in Numbers</p>
							<h2 className="statistics__title title">Transformative Statistics That Speak Volumes</h2>
							<div className="statistics__items">
								<div className="statistics__item item-statistics">
									<div className="item-statistics__num title title">240%</div>
									<div className="item-statistics__text text">Community Growth</div>
								</div>
								<div className="statistics__item item-statistics">
									<div className="item-statistics__num title">99%</div>
									<div className="item-statistics__text text">Technology Uptime</div>
								</div>
								<div className="statistics__item item-statistics">
									<div className="item-statistics__num title">50+</div>
									<div className="item-statistics__text text">Happy Members</div>
								</div>
								<div className="statistics__item item-statistics">
									<div className="item-statistics__num title">100%</div>
									<div className="item-statistics__text text">Renewable Energy Sources</div>
								</div>
							</div>
						</motion.div>
						<motion.div 
							className="statistics__right"
							initial={{x: 100}}
							whileInView={{x: 0}}
							transition={{duration: .4}}>
							<div className="statistics__image">
								<img src={img} alt="image"/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Statistics;