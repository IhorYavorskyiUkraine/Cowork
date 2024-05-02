import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Events.scss"

const Events = () => {
  return(
	<>
		<Header />
		<main className="main">
			<section className="events">
				<div className="Eventsntainer">
					<div className="events__content">
						<h1>Events</h1>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</>
  );
}
export default Events;