import Header from "../header/Header";
import Hero from "./hero/Hero";
import Trusted from "./trusted/Trusted"
import WhyChoose from "./whyChoose/WhyChoose";
import ExploreCowork from "./exploreCowork/ExploreCowork";
import Statistics from "./statistics/Statistics";

const Main = () => {
	return(
		<main className="main">
			<Header/>
			<Hero/>
			<Trusted/>
			<WhyChoose/>
			<ExploreCowork/>
			<Statistics/>
		</main>
	)
}

export default Main;