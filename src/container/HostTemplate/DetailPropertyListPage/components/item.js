import { Col, Row } from "react-bootstrap"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { convertData } from "api/utils/helper";
export default function ItemChild(props) {
  const {info}=props;
  console.log(info);
    return (
     <>
    <Card className="table_list_host" style={{ width: '40rem' }}>
        <Row>
        <Col>
      <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=1200" />
      </Col>
      <Col>
      <Card.Body>
      
        <Card.Text>
            Checkin Date: {convertData(info.checkInDate)}
        </Card.Text>
        <Card.Text>
            Checkout Date : {convertData(info.checkOutDate)}
        </Card.Text>
        
        <Card.Text>
          Status: {info.guestStatus} 
        </Card.Text>
        <Card.Text>
          Number of guest: {info.guestAmount}
        </Card.Text>

      </Card.Body>
      </Col>
      </Row>
    </Card>

     </>
    );
  }