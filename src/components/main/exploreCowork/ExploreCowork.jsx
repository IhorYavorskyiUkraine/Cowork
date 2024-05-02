import { motion } from "framer-motion"

import img from "/images/exploreCowork/title.png";
import poster from "/images/exploreCowork/poster.png";


import "./ExploreCowork.scss"

const ExploreCowork = () => {
	return(
		<>
			<section className="exploreCowork">
				<div className="container">
					<div className="exploreCowork__content">
						<motion.div 
							className="exploreCowork__textwrapper"
							initial={{y: 100}}
							whileInView={{y: 0}}
							transition={{duration: .3}}
							viewport={{once: true}}
						>
							<p className="exploreCowork__label label">A Virtual Tour</p>
							<h2 className="exploreCowork__title title">Explore Cowork Through Our <span><img src={img} alt="image"/></span> Lens</h2>
							<p className="exploreCowork__text text">Experience the essence of Cowork before setting foot in our dynamic spaces. Our immersive video tour gives you a sneak peek into the vibrant atmosphere, cutting-edge facilities, and collaborative energy that define the Cowork experience.</p>
							<button type="button" className="exploreCowork__button btn">
								<span>Explore Spaces</span>
							</button>
						</motion.div>
						<motion.div 
							className="exploreCowork__video"
							initial={{y: 100}}
							whileInView={{y: 0}}
							transition={{duration: .3}}
							viewport={{once: true}}
						>
							<video controls src="" poster={poster}></video>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ExploreCowork;