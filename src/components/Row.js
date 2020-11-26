import React, {useEffect, useState} from 'react'
import axios from '../axios'
import './Row.css'

function Row({ title, fetchURL, isLargeRow }){

	const [ movies, setMovies ] = useState([])
	const baseURL_image = 'https://image.tmdb.org/t/p/w500/'

	useEffect( () => {
		async function fetchData(){
			return await axios.get(fetchURL)
		}
		fetchData().then( r => setMovies( r.data.results))
	}, [fetchURL])

	return(
		<div className="row">
			<h2>{title}</h2>
			{console.log( movies )}
			<div className="row__posters">
			{
				movies.map( movie =>
					<img
						key={movie.id}
						className={`row__poster ${isLargeRow && "row__poster--large"}`}
						src={`${baseURL_image}${ isLargeRow? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				)
			}

			</div>
		</div>
	)
}

export default Row