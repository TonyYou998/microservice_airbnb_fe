import React, { useRef } from 'react'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import { NavLink } from 'react-router-dom'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from 'react';
import Search from './Components/Search';
import { useCallback } from 'react';

export default function LocationPage() {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh"
  }
  const center = {
    lat: 10.870106577618968,
    lng: 106.80306576764985
  }
  const option = {
    disableDefaultUI: true,
  }
  const [markers, setMarkers] = useState({});

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;

  });
  const panTo = ({ lat, lng }) => {
   
    mapRef.current.panTo({ lat, lng });
    // mapRef.current.SetZoom(19);

  }
  const [libraries] = useState(['places'])
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: AIzaSyBuRxJV_ZQ4VoGQbzJgVgd0hrgWbRwX90A,
    libraries,
  });
  const renderMarker=(marker)=>{
    console.log(marker);
    if(marker)
      return <Marker
      key={`${marker.lat}-${marker.lng}`}
      position={{ lat: marker.lat, lng: marker.lng }}
      icon={{
        url: `./img/bear.svg`,
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15),
        scaledSize: new window.google.maps.Size(30, 30),
      }}
    />
    
  }
  if (loadError)
    return "error loading map";
  if (!isLoaded)
    return "loading map";
  return (
    <div className='d-flex'>
      <div className='col-6 image__container'>
        <ImageComponent img={"./img/location.png"} />
      </div>

      <div className='col-6 options__container ' style={{ position: "relative" }}>
        {/* <AddPropertyStepBar className="location__tittle__bar" tittle={"Location"} /> */}

        <Search panTo={panTo} fun={setMarkers} />
        <div>

          <GoogleMap
            onLoad={onMapLoad}
            options={option}
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={20}
            center={center}

          >
            {/* {
              renderMarker(markers)
            } */}
          </GoogleMap>
        </div>

        {/* <div className='navigate__components'>
            <div className='d-flex justify-content-between'>
              <NavLink to="/classifycation">
                <button className='btn   back__btn'>Back</button>
              </NavLink>
              <NavLink to="/location">
                <button className='btn  next__btn'>Next</button>
              </NavLink>

            </div>

          </div> */}


      </div>


    </div>
  )
}
