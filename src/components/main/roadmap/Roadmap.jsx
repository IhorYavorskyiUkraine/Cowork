import AccordionComponent from "../../accordion/Accordion";

import { motion } from "framer-motion";

import "./Roadmap.scss"

const RoadMap = () => {
	return(
		<>
			<section className="roadmap">
				<div className="container">
					<div className="roadmap__content">
						<motion.div 
						className="roadmap__column"
						initial={{x: -100}}
						animate={{x: 0}}
						transition={{duration: .4}}>
							<div className="roadmap__text">
								<div className="roadmap__label label">Frequently Asked Questions</div>
								<div className="roadmap__title title">Your Roadmap to Coworking Clarity</div>
								<div className="roadmap__p text">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</div>
							</div>
						</motion.div>
						<motion.div 
						className="roadmap__column"
						initial={{x: 100}}
						animate={{x: 0}}
						transition={{duration: .4}}>
							<AccordionComponent/>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}

export default RoadMap;