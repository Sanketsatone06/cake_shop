import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src="./images\illustration\logo (3).png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Product</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-none d-md-inline'>
                    <a className='text-warning me-3' href="#"><i className="bi bi-telephone-fill text-warning"></i>+10 (56) 745 3095</a>
                    <button type='button' className='btn btn-warning rounded-pill ms-3 text-white'>order online</button>
                </div>
            </Container>
        </Navbar>
    );
}

export default BasicExample;