import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { motion } from 'framer-motion';

import logo from "/images/header/logo.png";
import burgerLogo from "/images/header/burgerLogo.png";
import burger from "/images/header/burger.png";

import "./Header.scss"

const Header = () => {

	const [lock, setLock] = useState(false);
	
	const handleLock = () => {
		setLock(!lock)
		lock ? document.body.classList.add('lock') : document.body.classList.remove('lock');
	}

	return(
		<>
			<div className="burger">
				<Menu
				customBurgerIcon={ <img src={burger} /> }
				onStateChange={handleLock} 
				right 
				
				width={'100%'}>
					<div className="menu__logo_w">
						<img src={burgerLogo} alt="logo"/>
					</div>
					<Link id="about" className="menu-item" to="/about">About</Link>
					<Link id="pricing" className="menu-item" to="/pricing">Pricing</Link>
					<Link id="blog" className="menu-item" to="/blog">Blog</Link>
					<Link id="events" className="menu-item" to="/events">Events</Link>
					<div className="bm-btns">
						<Link to="/" className="bm-btns__singup"><span>Sign Up</span></Link>
						<Link to="/" className="bm-btns__login"><span>Log In</span></Link>
					</div>
				</Menu>
			</div>
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
						<div className="menu__log log">
							<a to="/" className="log__login btn"><span>Log In</span></a>
							<a to="/" className="log__signup btn"><span>Sign Up</span></a>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	)
}

export default Header;