import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




function Contacto() {
    return (
        
        
        <Form size="lg" className='contact-form'>
        <h2 className='p-5'>Cuéntanos, ¿en qué te podemos ayudar?</h2>
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Correo electronico" size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje" size="lg" />
        </Form.Group>
        <Button variant="danger">Enviar</Button>{" "}
        </Form>
        
    );
}



export default Contacto




