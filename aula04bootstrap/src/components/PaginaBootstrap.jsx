import React from 'react'
import {Container, Navbar, Nav, Card, Button, Form, Row, Col} from 'react-bootstrap'
const PaginaBootstrap = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                ReactNews

            </Navbar.Brand>
            <Nav>
             <Nav.Link href="#">Home</Nav.Link>
             <Nav.Link href="#">Sobre</Nav.Link>
             <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
        </Container>
    

    </Navbar>

    <Container className='mt-4'> {/**abrir varios container para receber novos elementos e responsividade */}
    <Card>
        <Card.Body>
            <Card.Title>Bem-Vindo ao React Bootstrap</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque dicta sequi esse quidem ipsa, ad non veniam laboriosam aliquid maxime, soluta amet at laudantium reiciendis illum nesciunt, accusamus repellendus!

            </Card.Text>
              <Button variant='dark'>Saiba Mais</Button>
        </Card.Body>
    </Card>
    
    <Form className='mt-4'>
        <Row>
            <Col md={6}> 
            <Form.Group className='mb-4' controlId='formNome'>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type='text' placeholder='Digite seu nome...'></Form.Control>
            </Form.Group>
            </Col>
            <Col md={6}> 
            <Form.Group className='mb-4' controlId='formEmail'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' placeholder='Digite seu email...'></Form.Control>
            </Form.Group>
            </Col>
        </Row>

        <Form.Group className='mb-3' controlId="FormMensagem">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control as='textarea' rows={4} placeholder='Digite sua mensagem...'></Form.Control>
        </Form.Group>
          <Button variant='dark' type='submit' className= 'mt-4'>Enviar Mensagem</Button>
    </Form>
    
        
    </Container>




    </div>
  )
}

export default PaginaBootstrap