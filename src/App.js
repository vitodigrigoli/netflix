import React from "react";
import './App.css';
import Header from "./Components/Header";
import Slider from "./Components/Slider";


function App() {

	const filmList = [
		{
			title: 'Titolo 1',
			image: '/Images/the_witcher.jpg'
		},
		{
			title: 'Titolo 2',
			image: '/Images/the_witcher.jpg'
		},
		{
			title: 'Titolo 3',
			image: '/Images/the_witcher.jpg'
		},
		{
			title: 'Titolo 3',
			image: '/Images/the_witcher.jpg'
		},
		{
			title: 'Titolo 3',
			image: '/Images/the_witcher.jpg'
		},
		{
			title: 'Titolo 3',
			image: '/Images/the_witcher.jpg'
		}
	]
	return (
		<div className="App">
			<Header/>
			<Slider title={'I più visti'} list={filmList}/>
		</div>
	);
}

export default App;
