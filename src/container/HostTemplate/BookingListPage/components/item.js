import { Col, Row } from "react-bootstrap"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function ItemChild() {
    return (
     <>
    <Card className="table_list_host" style={{ width: '35rem' }}>
        <Row>
        <Col>
      <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=1200" />
      </Col>
      <Col>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go </Button>{' '}
      </Card.Body>
      </Col>
      </Row>
    </Card>

     </>
    );
  }