import React from 'react'
import './Header.css'

function Header(){
	return(
		<header className="header">
			<picture className="header__logo">
				<img src={"../../Images/Netflix_Logo_RGB.png"} alt={'logo'}/>
			</picture>
			<ul className="header__menu">
				<li className="header__menu__item">Home</li>
				<li className="header__menu__item">Serie TV</li>
				<li className="header__menu__item">Film</li>
				<li className="header__menu__item">Nuovi arrivi</li>
				<li className="header__menu__item">La mia lista</li>
			</ul>

		</header>
	)
}

export default Header
