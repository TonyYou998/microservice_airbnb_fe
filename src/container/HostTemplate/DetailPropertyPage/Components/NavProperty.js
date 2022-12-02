import Nav from 'react-bootstrap/Nav';


function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      
      <h5 className='listingdt'> Listing details   </h5>
      <Nav.Link href="/home">Photo</Nav.Link>
      <Nav.Link eventKey="link-1">Listing</Nav.Link>
      <Nav.Link eventKey="link-2">Location</Nav.Link>
      <Nav.Link eventKey="link-2">Property And Room</Nav.Link>
      
    
    </Nav>
  );
}

export default StackedExample;