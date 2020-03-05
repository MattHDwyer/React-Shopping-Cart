import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root')
export default () => {
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [price, setPrice] = useState("");
	const [genre, setGenre] = useState("");
	const [synopsis, setSynopsis] = useState("");

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://192.168.64.3/jsonparser/post/movie_items.php', {
			title,
			year,
			price,
			genre,
			synopsis
		})
		// alert(`${title} ${year} ${price} ${genre} ${synopsis}`);
	}

	const setTitleOnChange = (e) => {
		setTitle(e.target.value);
	}
	const setYearOnChange = (e) => {
		setYear(e.target.value);
	}
	const setPriceOnChange = (e) => {
		setPrice(e.target.value);
	}
	const setGenreOnChange = (e) => {
		setGenre(e.target.value);
	}
	const setSynopsisOnChange = (e) => {
		setSynopsis(e.target.value);
	}

	return (
		<span>
			<div className="aboutModalContainer">
				<button onClick={() => setModalIsOpen(true)} >About Us!</button>
				<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<h2>About</h2>
					<p>This is the about page of Shopping Cart Cart Shop</p>
					<button onClick={() => setModalIsOpen(false)}>Close</button>
				</Modal>
			</div>

			<div className="addMovieModal">
				<button onClick={() => setModalIsOpen(true)}>Add a Movie</button>
				<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<form onSubmit={handleSubmit} >
						<div className="form-group-add-movie">
							<span>
								<label>Title: </label>
								<input type="text" value={title} name="title" className="form-control" onChange={setTitleOnChange} />
							</span>
						</div>
						<div className="form-group-add-movie">
							<span>
								<label>Year: </label>
								<input type="text" name="year" className="form-control" onChange={setYearOnChange} />
							</span>
						</div>
						<div className="form-group-add-movie">
							<span>
								<label>Price: </label>
								<input type="text" name="price" className="form-control" onChange={setPriceOnChange} />
							</span>
						</div>
						<div className="form-group-add-movie">
							<span>
								<label>Genre: </label>
								<input type="text" name="genre" className="form-control" onChange={setGenreOnChange} />
							</span>
						</div>
						<div className="form-group-add-movie">
							<label>Synopsis:</label> <br></br>
							<textarea type="text" name="synopsis" className="form-control" onChange={setSynopsisOnChange}></textarea>
						</div>
						<input type="submit" value="Add Movie" className="button" />
						<br></br><br></br>
					</form>
					<button onClick={() => setModalIsOpen(false)}>Close</button>
				</Modal>
			</div>
		</span >

	)
}

