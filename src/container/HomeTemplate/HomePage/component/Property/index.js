import React from 'react'
import PropertyItem from './PropertyItem'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default function Property() {
  return (
    // <div className='container pt-4'>
    //     <div className='row'>
    //         <PropertyItem/>
    //         <PropertyItem/>
    //         <PropertyItem/>
    //         <PropertyItem/>
    //         <PropertyItem/>
    //         <PropertyItem/>

    //     </div>
       
    // </div>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 container mt-4 pt-4"
    >
      <Tab eventKey="home" title="Home">
        <div className='container'>
            <div className='row'>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
            </div>
        </div>
        
       
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div className='container'>
            <div className='row'>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
            </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" >
      <div className='container'>
            <div className='row'>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
            </div>
        </div>
      </Tab>
    </Tabs>
  )
}
