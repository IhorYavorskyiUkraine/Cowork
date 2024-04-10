import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Pricing.scss"

const Pricing = () => {
  return(
	<>
		<Header />
		<main className="main">
			<section className="pricing">
				<div className="container">
					<div className="pricing__content">
						<h1>PRICING</h1>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</>
  );
}
export default Pricing;