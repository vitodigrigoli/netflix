import React, {useState} from "react";
import './App.css';
import Row from "./components/Row";
import request from './request'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Modal from "./components/Modal";
import youtube from "./youtube";

function App() {

	const toggleModal = () => {
		modal.visibility? setModal({...modal, visibility: false}) : setModal({...modal, visibility: true})
	}

	const [ modal, setModal ] = useState({
		visibility: false,
		trailerID: ''
	})

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



	return (
		<div className="App">
			{modal.visibility && <Modal trailerID={modal.trailerID} toggleModal={toggleModal}/>}
			{!modal.visibility && <Navbar/>}
			<Banner setModal={setModal} handleClick={handleClick}/>
			<Row
				title="NETFLIX ORIGINALS"
				fetchURL={request.fetchNetflixOriginal}
				handleClick={handleClick}
				isLargeRow
			/>
			<Row
				title="In Tendenza"
				fetchURL={request.fetchTrending}
				handleClick={handleClick}
			/>
			<Row
				title="Azione"
				fetchURL={request.fetchAction}
				handleClick={handleClick}
			/>
			<Row
				title="Avventura"
				fetchURL={request.fetchAdventure}
				handleClick={handleClick}
			/>
			<Row
				title="Commedia"
				fetchURL={request.fetchComedy}
				handleClick={handleClick}
			/>
			<Row
				title="Documentari"
				fetchURL={request.fetchDocumentary}
				handleClick={handleClick}
			/>
			<Row
				title="Storia"
				fetchURL={request.fetchHistory}
				handleClick={handleClick}
			/>
			<Row
				title="Scienza"
				fetchURL={request.fetchScience}
				handleClick={handleClick}
			/>
			<Row
				title="Horror"
				fetchURL={request.fetchHorror}
				handleClick={handleClick}
			/>
			<Row
				title="Romanzi"
				fetchURL={request.fetchRomance}
				handleClick={handleClick}
			/>
			<Row
				title="Fantasy"
				fetchURL={request.fetchFantasy}
				handleClick={handleClick}
			/>
			<Row
				title="Western"
				fetchURL={request.fetchWestern}
				handleClick={handleClick}
			/>
		</div>
	);
}

export default App;
