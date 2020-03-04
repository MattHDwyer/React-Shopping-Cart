import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Movies from './components/items/movies/Movies';
import About from './components/tiles/About';


class App extends Component {
	render() {
		return (
			<div className="container" >
				<Header />
				<About />
				<hr></hr>
				<Movies />
				<Footer />
			</div>
		);
	}
}

export default App;
