import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="danger" variant="dark" className='p-4'>

			<Container className="justify-content-start">
				<Link to="/" className="text-white ms-3 text-decoration-none"> 🏠 Home</Link>
				<Link to="/contacto" className="text-white ms-3 text-decoration-none">📔 Contacto</Link>
			</Container>
				<Navbar.Brand className="text-white ms-3 text-decoration-none" href="#">Happy Cake 🍰</Navbar.Brand>
		</Navbar>
	);
};

export default Navigation