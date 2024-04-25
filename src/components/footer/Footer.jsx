import {motion} from "framer-motion"
import { Link } from "react-router-dom";

import logo from "/images/footer/logo.png"; 

import "./Footer.scss";

const Footer = () => {
	return(
		<>
			<motion.footer 
				className="footer"
				initial={{y: 100}}
				whileInView={{y: 0}}
				transition={{duration: .4}}
				viewport={{once: true}}
			>
				<div className="container">
					<div className="footer-cowork">
						<div className="footer-cowork__main">
							<div className="footer-cowork__logo">
								<img src={logo} alt="logo"/>
							</div>
							<p className="footer-cowork__label text">Join our newsletter to stay up to date on features and releases.</p>
							<form 
								action="submit" 
								className="footer-cowork__form">
								<input 
									type="text" 
									className="footer-cowork__input"
									name="email"
									placeholder="Enter your email"/>
								<div className="footer-cowork__btn">
									<button className="footer-cowork__button btn"><span>Subscribe</span></button>
								</div>
							</form>
							<p className="footer-cowork__agree text">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
						</div>
						<div className="footer-cowork__columns">
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Explore More</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<Link to="/">Home</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">About</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Pricing</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Blog</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Events</Link>
									</li>
								</ul>
							</div>
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Stay Connected</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<Link to="/">Subscribe</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Member Stories</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Locations</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Write for Us</Link>
									</li>
								</ul>
							</div>
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Follow Us</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<Link to="/">Facebook</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Instagram</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">X</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">LinkedIn</Link>
									</li>
									<li className="footer-cowork__link">
										<Link to="/">Youtube</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-rights">
						<div className="footer-rights__columns">
							<div className="footer-rights__column">
								<p className="footer-rights__rights">© 2024 Cowork. All rights reserved.</p>
							</div>
							<ul className="footer-rights__items">
								<li className="footer-rights__item">
									<Link to="/">Privacy Policy</Link>
								</li><a href="/"></a>
								<li className="footer-rights__item">
									<Link to="/">Terms of Service</Link>
								</li>
								<li className="footer-rights__item">
									<Link to="/">Cookies Settings</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.footer>
		</>
	)
}

export default Footer;