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
				toggleModal={toggleModal}
				setModal={setModal}
				isLargeRow
			/>
			<Row
				title="Trending"
				fetchURL={request.fetchTrending}
			/>
			<Row
				title="Action"
				fetchURL={request.fetchAction}
			/>
		</div>
	);
}

export default App;
