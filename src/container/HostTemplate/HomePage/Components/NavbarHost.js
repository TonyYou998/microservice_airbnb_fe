import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBarHost() {
  return (
    <Navbar className='host__navbar'>
      <Container fluid>
        <Navbar style={{ fontStyle: "italic", fontWeight: "400" }}><h5>Rental<span style={{ color: "blue" }}>.com</span></h5></Navbar>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <Nav className="text-center ">
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Today</span></Nav.Link>
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Message</span></Nav.Link>
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Callendar</span></Nav.Link>
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Statistic</span></Nav.Link>
          {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>

        <Nav>
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Today</span></Nav.Link>
          <Nav.Link ><span style={{ fontWeight: "500", fontSize: "14px", lineHeight: "18px" }}>Today</span></Nav.Link>
        </Nav>
      </Container>
    </Navbar>



  );
}

