import { ErrorBoundary } from "react-error-boundary";

import Header from "../../components/header/Header";
import Hero from "../../components/main/hero/Hero";
import Trusted from "../../components/main/trusted/Trusted"
import WhyChoose from "../../components/main/whyChoose/WhyChoose";
import ExploreCowork from "../../components/main/exploreCowork/ExploreCowork";
import Statistics from "../../components/main/statistics/Statistics";
import HearClients from "../../components/main/hearClients/HearClients";
import RoadMap from "../../components/main/roadmap/Roadmap";
import SeizeMoment from "../../components/main/seizeMoment/SeizeMoment";
import Insights from "../../components/main/insights/Insights";
import Footer from "../../components/footer/Footer";

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

