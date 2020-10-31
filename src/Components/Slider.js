import React from 'react'
import Film from "./Film";
import './Slider.css'

function Slider( props ){

	const list = props.list.map( ( el, i ) => <Film key={i} title={el.title} image={el.image} /> )

	return(
		<section className="slider">
			<h3>{props.title}</h3>
			<div className="slider__list">
				{list}
			</div>

		</section>


	)
}

export default Slider