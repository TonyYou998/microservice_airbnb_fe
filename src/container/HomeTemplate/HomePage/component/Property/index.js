import React from "react";
import PropertyItem from "./PropertyItem";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import Nav from "react-bootstrap/Nav";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Property() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    rows: 2,
    dot:true,
    dotClass: 'slick-dots'
  };
  return (

    <Tab.Container   defaultActiveKey="first">
      <Nav className="container px-auto justify-content-around"  >
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="first">
              <button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="second">
          <button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="third"><button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="fourth"><button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="fifth"><button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav__item' eventKey="sixth"><button className="btn__nav" >
                <div>
                  <span>
                    <img style={{width:'24px',height:"24px"}} src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"/>
                    <div>
                      <span style={{fontSize:"12px" ,lineHeight:'16px'}}>
                        national park
                      </span>
                    </div>
                  </span>
                </div>
              </button></Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className='container'>
        <Tab.Pane eventKey="first" >
          <Slider {...settings}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Slider>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Slider {...settings}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Slider>
        </Tab.Pane>
        <Tab.Pane eventKey="third" >
          <Slider {...settings}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Slider>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth" >
          <Slider {...settings}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Slider>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth" >
          <Slider {...settings}>
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </Slider>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
