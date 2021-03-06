import React, {useState, useEffect} from 'react'
import axios from '../axios'
import request from "../request";
import './Banner.css'

function Banner({handleClick}){
	const [movie, setMovie] = useState([])
	const baseURL_image = 'https://image.tmdb.org/t/p/original'



	useEffect( () =>{
		async function fetchData(){
			return await axios.get(request.fetchNetflixOriginal)
		}

		fetchData().then( result => {
			const random = Math.floor( Math.random() * result.data.results.length )

			// slice if overview is too big
			if( String(result.data.results[random].overview).length > 300 ){
				result.data.results[random].overview = String(result.data.results[random].overview).slice(0, 300) + '...'
			}
			setMovie( result.data.results[random] )

		})


	}, [])

	return(
		<header className="banner" style={{backgroundImage: `url(${baseURL_image}${movie?.backdrop_path})`}}>
			<div className="banner__content">
				<h1>{movie?.name || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button" onClick={() => handleClick(movie)}>Play</button>
					<button className="banner__button">My List</button>
				</div>

				<div className="banner__description">
					<p>{movie?.overview}</p>
				</div>
			</div>

			<div className="banner--fadeBottom"/>

		</header>
	)
}

export default Banner