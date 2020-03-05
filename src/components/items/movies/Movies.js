import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';



Modal.setAppElement('#root');

export default () => {

	useEffect(() => {
		axios.get('http://192.168.64.3/jsonparser/get/movie_items.php')
			.then(res => setMovies(res.data))
	}, []);




	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [movies, setMovies] = useState([]);

	const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

	return (
		<div className="movieContainer">
			{movies.map((movieDetail, index) => {
				return <div id={index} key={index}>
					<h1>{movieDetail.title}</h1>
					<h2>Year: {movieDetail.year}</h2>
					<h2>${movieDetail.price}</h2>
					<button onClick={() => setModalIsOpen(true) || setCurrentMovieIndex(index)} >More Info</button>
					<br></br>
				</div>

			})}
			{movies.length > 0 &&
				<Modal
					className="moviesModalContent"
					isOpen={modalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
				>
					<h1>{movies[currentMovieIndex].title}</h1>
					<h2>Year: {movies[currentMovieIndex].year}</h2>
					<h2>${movies[currentMovieIndex].price}</h2>
					<h2>Genre: {movies[currentMovieIndex].genre}</h2>
					<h3>Synopsis:</h3>
					<p>{movies[currentMovieIndex].synopsis}</p>
					<button onClick={() => setModalIsOpen(false)}>Close</button>
				</Modal>}



		</div>
	)

}