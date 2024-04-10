import { Link } from "react-router-dom";

import back from "/images/slider/1.png"

import "./NotFoundPage.scss"

const NotFoundPage = () => {
  return(
	<>
		<div className="container">
			<Link 
				to="/"
				className="back">
				<img src={back} className="back-img" alt="back" />
				Home</Link>
			<div className="error">Page not found</div>
		</div>
	</>
  );
}
export default NotFoundPage;