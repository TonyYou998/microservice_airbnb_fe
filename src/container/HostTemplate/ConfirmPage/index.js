
import { Col, Row } from "react-bootstrap"
import HeaderPage from "./Components/HeaderPage"
import InfoPage from "./Components/InfoPage"
import MapPage from "./Components/MapPage"
import DescripPage from "./Components/DescripPage"

export default function ConfirmPage() {


  return (
<>
      <HeaderPage></HeaderPage>
      <div className="container">
      <div className="main_info_map">
      <Row>
        <Col sm >
        <div className="main_info">
            <InfoPage></InfoPage>
        </div>
        </Col>
        <Col sm className="col-6">
        <div className="">
          <div className="main_map">
          <MapPage></MapPage>
          </div>
    
        </div>
        </Col>
      </Row>

      <Row className="main_des">
      <DescripPage></DescripPage>
      </Row>
      </div>

    </div>
    </>
  )
}
