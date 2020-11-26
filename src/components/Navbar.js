import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../image/Netflix_Logo_RGB.png'
import avatar from '../image/profile.png'

function Navbar(){

	const [show, setShow] = useState( false )
	const handleScroll = () => {
		if( window.scrollY > 50 ){
			setShow(true)
		}
		else{
			setShow(false)
		}
	}

	useEffect( () => {
		window.addEventListener( "scroll", handleScroll )
		return () => window.removeEventListener("scroll", handleScroll )
	}, [])


	return(
		<div className={`navbar ${ show && "navbar--dark"}`}>
			<img className="navbar__logo" src={logo} alt="logo"/>
			<img className="navbar__avatar" src={avatar} alt="avatar"/>
		</div>
	)
}

export default Navbar