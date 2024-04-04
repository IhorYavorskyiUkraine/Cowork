import AccordionComponent from "../../accordion/Accordion";

import "./Roadmap.scss"

const RoadMap = () => {
	return(
		<>
			<section className="roadmap">
				<div className="container">
					<div className="roadmap__content">
						<div className="roadmap__column">
							<div className="roadmap__text">
								<div className="roadmap__label label">Frequently Asked Questions</div>
								<div className="roadmap__title title">Your Roadmap to Coworking Clarity</div>
								<div className="roadmap__p text">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</div>
							</div>
						</div>
						<div className="roadmap__column">
							<AccordionComponent/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default RoadMap;