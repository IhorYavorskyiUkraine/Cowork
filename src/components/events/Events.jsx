import Header from "../header/Header";
import Footer from "../footer/Footer";

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