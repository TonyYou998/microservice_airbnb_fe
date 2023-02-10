import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Item from './item';


export default function listitem() {
  return (
    <div className='list_item'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Phòng Đã Tạo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Phòng Đã Cho Thuê</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thỉrd">Phòng Chưa Cho Thuê</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col ></Col>
        <Col sm={8}>
            
          <Tab.Content>
            <Tab.Pane className='scroll' eventKey="first">
           
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    
           
           
     
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Item></Item>
            </Tab.Pane>
            <Tab.Pane eventKey="thỉrd">
            <Item></Item>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

