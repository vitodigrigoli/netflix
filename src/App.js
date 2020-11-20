import React from "react";
import './App.css';
import Row from "./components/Row";
import request from './request'
import Banner from './components/Banner'

function App() {

	return (
		<div className="App">
			<Banner/>
			<Row
				title="NETFLIX ORIGINALS"
				fetchURL={request.fetchNetflixOriginal}
				isLargeRow
			/>
			<Row title="Trending" fetchURL={request.fetchTrending}/>
			<Row title="Action" fetchURL={request.fetchAction}/>
		</div>
	);
}

export default App;
