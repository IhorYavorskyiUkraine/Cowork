import { useState } from 'react';

import icon from "/images/header/dark.svg"

import './DarkTheme.scss'

const DarkTheme = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	const toggleAttribute = () => {
		darkTheme ? document.body.removeAttribute('data-theme') : document.body.setAttribute('data-theme', "dark");
		setDarkTheme(!darkTheme);
	};

	return(
		<>
			<button className="theme-btn" onClick={toggleAttribute} value="dark">
				<img src={icon} alt="icon"/>
			</button>
		</>
	);
}

export default DarkTheme;