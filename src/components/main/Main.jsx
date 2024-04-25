import { ErrorBoundary } from "react-error-boundary";

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
				<ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}>
					<Trusted/>
				</ErrorBoundary>
				<ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}>
					<WhyChoose/>
				</ErrorBoundary>
				<ExploreCowork/>
				<Statistics/>
				<ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}>
					<HearClients/>
				</ErrorBoundary>
				<RoadMap/>
				<SeizeMoment/>
				<ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}>
					<Insights/>
				</ErrorBoundary>
			</main>
			<Footer/>
		</div>
	)
}

export default Main;

