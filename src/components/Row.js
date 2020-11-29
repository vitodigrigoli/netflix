import React, {useEffect, useState, useContext} from 'react'
import axios from '../axios'
import './Row.css'
import youtube from "../youtube";

function Row({ title, fetchURL, setModal, isLargeRow }){

	const [ movies, setMovies ] = useState([])
	const baseURL_image = 'https://image.tmdb.org/t/p/w500/'

	const handleClick = (movie) => {
		const searchTrailer = `${movie?.name || movie?.title} trailer ufficiale ita`
		async function fetchTrailer(trailer){
			return await youtube.get('/search', {
				params:{
					q: trailer
				}
			})
		}

		fetchTrailer(searchTrailer).then( r => {
				console.log(r)
				console.log(searchTrailer)
				if (r.data.items.length>0){
					setModal({
						visibility: true,
						trailerID: r.data.items[0].id.videoId,
					})
				}

			}
		)

	}

	useEffect( () => {
		async function fetchData(){
			return await axios.get(fetchURL)
		}
		fetchData().then( r => setMovies( r.data.results))
	}, [fetchURL])

	return(
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
			{
				movies.map( movie =>
					<img
						key={movie.id}
						className={`row__poster ${isLargeRow && "row__poster--large"}`}
						src={`${baseURL_image}${ isLargeRow? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
						onClick={() => handleClick(movie)}
					/>
				)
			}

			</div>
		</div>
	)
}

export default Row