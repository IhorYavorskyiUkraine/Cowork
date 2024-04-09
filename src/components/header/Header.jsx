/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
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
			<Menu 
			customBurgerIcon={ <img src={burger} /> }
			onStateChange={handleLock} 
			right 
			width={'100%'}>
				<div className="menu__logo_w">
					<img src={burgerLogo} alt="logo"/>
				</div>
				<a id="home" className="menu-item" href="/">About</a>
				<a id="about" className="menu-item" href="/about">Pricing</a>
				<a id="contact" className="menu-item" href="/contact">Blog</a>
				<a id="settings" className="menu-item" href="">Events</a>
				<div className="bm-btns">
					<a to="/" className="bm-btns__singup"><span>Sign Up</span></a>
					<a to="/" className="bm-btns__login"><span>Log In</span></a>
				</div>
			</Menu>
			<motion.header 
				className="header"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: .4}}
				>
				<div className="container">
					<div className="header__menu menu">
						<a href="/" className="menu__icon">
							<img className="menu__logo" src={logo} alt="logo"/>
						</a>
						<nav className="menu__body">
							<ul className="menu__list">
								<li className="menu__item">
									<a href="/" className="menu__link">About</a>
								</li>
								<li className="menu__item">
									<a href="/" className="menu__link">Pricing</a>
								</li>
								<li className="menu__item">
									<a href="/" className="menu__link">Blog</a>
								</li>
								<li className="menu__item">
									<a href="/" className="menu__link">Events</a>
								</li>
							</ul>
						</nav>
						<div className="menu__log log">
							<a to="" className="log__login btn"><span>Log In</span></a>
							<a to="" className="log__signup btn"><span>Sign Up</span></a>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	)
}

export default Header;