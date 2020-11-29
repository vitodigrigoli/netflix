import React, {useState} from "react";
import './App.css';
import Row from "./components/Row";
import request from './request'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Modal from "./components/Modal";

function App() {

	const toggleModal = () => {
		modal.visibility? setModal({...modal, visibility: false}) : setModal({...modal, visibility: true})
	}

	const [ modal, setModal ] = useState({
		visibility: false,
		trailerID: ''
	})



	return (
		<div className="App">
			{modal.visibility && <Modal trailerID={modal.trailerID} toggleModal={toggleModal}/>}
			{!modal.visibility && <Navbar/>}
			<Banner/>
			<Row
				title="NETFLIX ORIGINALS"
				fetchURL={request.fetchNetflixOriginal}
				setModal={setModal}
				isLargeRow
			/>
			<Row
				title="Trending"
				fetchURL={request.fetchTrending}
				setModal={setModal}
			/>
			<Row
				title="Azione"
				fetchURL={request.fetchAction}
				setModal={setModal}
			/>
			<Row
				title="Avventura"
				fetchURL={request.fetchAdventure}
				setModal={setModal}
			/>
			<Row
				title="Commedia"
				fetchURL={request.fetchComedy}
				setModal={setModal}
			/>
			<Row
				title="Documentari"
				fetchURL={request.fetchDocumentary}
				setModal={setModal}
			/>
			<Row
				title="Storia"
				fetchURL={request.fetchHistory}
				setModal={setModal}
			/>
			<Row
				title="Scienza"
				fetchURL={request.fetchScience}
				setModal={setModal}
			/>
			<Row
				title="Horror"
				fetchURL={request.fetchHorror}
				setModal={setModal}
			/>
			<Row
				title="Romantico"
				fetchURL={request.fetchRomance}
				setModal={setModal}
			/>
			<Row
				title="Fantasy"
				fetchURL={request.fetchFantasy}
				setModal={setModal}
			/>
			<Row
				title="Western"
				fetchURL={request.fetchWestern}
				setModal={setModal}
			/>
		</div>
	);
}

export default App;
