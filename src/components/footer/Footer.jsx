import logo from "/images/footer/logo.png"; 

import "./Footer.scss";

const Footer = () => {
	return(
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer-cowork">
						<div className="footer-cowork__main">
							<div className="footer-cowork__logo">
								<img src={logo} alt="logo"/>
							</div>
							<p className="footer-cowork__label text">Join our newsletter to stay up to date on features and releases.</p>
							<form 
								action="submit" 
								className="footer-cowork__form"
								placeholder="Enter your email">
								<input 
									type="text" 
									className="footer-cowork__input"
									name="email"/>
								<button className="footer-cowork__button btn"><span>Subscribe</span></button>
							</form>
							<p className="footer-cowork__agree text">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
						</div>
						<div className="footer-cowork__columns">
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Explore More</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<a href="/">Home</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">About</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Pricing</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Blog</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Events</a>
									</li>
								</ul>
							</div>
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Stay Connected</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<a href="/">Subscribe</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Member Stories</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Locations</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Write for Us</a>
									</li>
								</ul>
							</div>
							<div className="footer-cowork__column">
								<div className="footer-cowork__title">Follow Us</div>
								<ul className="footer-cowork__links">
									<li className="footer-cowork__link">
										<a href="/">Facebook</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Instagram</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">X</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">LinkedIn</a>
									</li>
									<li className="footer-cowork__link">
										<a href="/">Youtube</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-rights">
						<div className="footer-rights__columns">
							<div className="footer-rights__column">
								<p>© 2024 Cowork. All rights reserved.</p>
							</div>
							<div className="footer-rights__column">
								<div className="footer-rights__item">Privacy Policy</div>
								<div className="footer-rights__item">Terms of Service</div>
								<div className="footer-rights__item">Cookies Settings</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;