import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./About.scss"

const About = () => {
  return(
	<>
		<Header />
		<main className="main">
			<section className="about">
				<div className="container">
					<div className="about__content">
						<h1>ABOUT</h1>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</>
  );
}
export default About;