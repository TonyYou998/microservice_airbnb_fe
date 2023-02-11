import { actGetHostBookingApi } from 'container/HostTemplate/modules/actions';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from './item';


export default function ListItem() {
  const {id}=useParams();
  
  const dispatch=useDispatch();

  const content=useSelector(state=>{
    return  state.hostBookingReducer;
  
  });
  useEffect(()=>{
    dispatch(actGetHostBookingApi(id));
  },[])
  const renderItem=(content)=>{
    const {data}=content;
    if(data){
     
        const {Content} = data;
        
        return Content.map((item,index)=>{
          return (<Item key={index} info={item}/>)
        })
      
    }
  
  }
  return (
    <div className='list_item'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item className="nav_item">
              <Nav.Link eventKey="first">Coming soon</Nav.Link>
            </Nav.Item>
          
            <Nav.Item className="nav_item">
              <Nav.Link eventKey="thỉrd">Cancle</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col ></Col>
        <Col sm={8}>
            
          <Tab.Content>
            <Tab.Pane className='scroll' eventKey="first">
                  {renderItem(content)}
                  
                 
              
           
           
     
            </Tab.Pane>
        
            <Tab.Pane className='scroll' eventKey="thỉrd">
            {/* <Item></Item> */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

