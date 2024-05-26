import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiSearchLine } from "react-icons/ri";

function OffcanvasExample() {
    const expand = false;
    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 w-[100%]">
            <Container fluid>
                <Navbar.Brand href="#" className='w-[80%]'>
                    <Form className="d-flex items-center justify-around">
                        <RiSearchLine />
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 w-[90%]"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <nav className='HeadNav'>
                            <a href="#" className='hover:text-[#4f46e5] border-b-2 pb-2'>Community</a>
                            <a href="#" className='hover:text-[#4f46e5] border-b-2 pb-2'>Support</a>
                            <button className='w-[40%] h-[25%] text-[white] bg-[#4f46e5] hover:bg-[#655ee7] rounded-lg p-1'>+ New event</button>
                        </nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default OffcanvasExample;