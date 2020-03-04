import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')
export default () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="aboutModalContainer">
			<button onClick={() => setModalIsOpen(true)} >About Us!</button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<h2>About</h2>
				<p>This is the about page of Shopping Cart Cart Shop</p>
				<button onClick={() => setModalIsOpen(false)}>Close</button>
			</Modal>
		</div>
	)
}

