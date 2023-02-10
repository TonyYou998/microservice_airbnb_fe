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
      
        <Card.Text>
            Người Đặt : Phan Thành Đạt
        </Card.Text>
        <Card.Text>
            Ngày Đặt : 22/12/2001
        </Card.Text>
        <Card.Text>
            Ngày Trả : 22/12/2001
        </Card.Text>
        <Card.Text>
          Trạng Thái : Đã Đặt
        </Card.Text>

      </Card.Body>
      </Col>
      </Row>
    </Card>

     </>
    );
  }