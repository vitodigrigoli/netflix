import React from 'react'
import './Film.css'

function Film( props ){
	return(
		<div className="film" style={{backgroundImage: 'url(' + props.image + ')'}}>
			<header className="film__title">
				<h4>{props.title}</h4>
			</header>
		</div>
	)
}

export default Film