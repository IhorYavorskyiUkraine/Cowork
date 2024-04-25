import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import logo from "/images/header/logo.png";

import BurgerMenu from "./burgerMenu/BurgerMenu";

import "./Header.scss"

const Header = () => {
	return(
		<>
			<motion.header 
				className="header"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: .4}}
			>
				<div className="container">
					<div className="header__menu menu">
						<Link to="/" className="menu__icon">
							<img className="menu__logo" src={logo} alt="logo"/>
						</Link>
						<nav className="menu__body">
							<ul className="menu__list">
								<li className="menu__item">
									<Link to="/about" className="menu__link">About</Link>
								</li>
								<li className="menu__item">
									<Link to="/pricing" className="menu__link">Pricing</Link>
								</li>
								<li className="menu__item">
									<Link to="/blog" className="menu__link">Blog</Link>
								</li>
								<li className="menu__item">
									<Link to="/events" className="menu__link">Events</Link>
								</li>
							</ul>
						</nav>
						<div className="menu__buttons buttons">
							<div className="buttons__links">
								<Link to="/" className="buttons__login btn"><span>Log In</span></Link>
								<Link to="/" className="buttons__signup btn"><span>Sign Up</span></Link>
							</div>
							<BurgerMenu/>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	)
}

export default Header;