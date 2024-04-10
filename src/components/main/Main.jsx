import Header from "../header/Header";
import Hero from "./hero/Hero";
import Trusted from "./trusted/Trusted"
import WhyChoose from "./whyChoose/WhyChoose";
import ExploreCowork from "./exploreCowork/ExploreCowork";
import Statistics from "./statistics/Statistics";
import HearClients from "./hearClients/HearClients";
import RoadMap from "./roadmap/Roadmap";
import SeizeMoment from "./seizeMoment/SeizeMoment";
import Insights from "./insights/Insights";
import Footer from "../footer/Footer";

const Main = () => {
	return(
		<div className="wrapper">
			<Header/>
			<main className="main">
				<Hero/>
				<Trusted/>
				<WhyChoose/>
				<ExploreCowork/>
				<Statistics/>
				<HearClients/>
				<RoadMap/>
				<SeizeMoment/>
				<Insights/>
			</main>
			<Footer/>
		</div>
	)
}

export default Main;

