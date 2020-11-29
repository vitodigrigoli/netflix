import React from 'react'
import YouTube from "react-youtube";
import './Modal.css'

function Modal({trailerID, toggleModal}){

	const handleClick = () => {
		console.log('toggle')
		toggleModal()
	}

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		}
	}

	return(
		<div className={`modal`}>
			<div onClick={handleClick} className="modal__close">
				<i  className="fas fa-times"/>
			</div>
			<div className="modal__trailer">
				<YouTube videoId={trailerID} opts={opts}/>
			</div>
		</div>
	)
}

export default Modal