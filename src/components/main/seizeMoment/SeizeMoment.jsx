
import img from "/images/seizeMoment/img.png"

import "./SeizeMoment.scss"

const SeizeMoment = () => {
	return(
		<>
			<section className="seizeMoment">
				<div className="container">
					<div className="seizeMoment__content">
						<div className="seizeMoment__title title">Seize 
						<span><img src={img} alt="image"/></span>
						The Moment – Join Cowork Today!</div>
						<div className="seizeMoment__text text">Uncover the transformative power of Cowork as echoed by those who've made it their professional haven. This is more than finding a desk; it's discovering a community that fuels your journey to success.</div>
						<button className="seizeMoment__button btn"><span>Claim Your Spot</span></button>
					</div>
				</div>
			</section>
		</>
	)
}

export default SeizeMoment;