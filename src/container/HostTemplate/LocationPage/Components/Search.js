import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddAdress, actAddLat, actAddLong, actAddPropertyApi } from 'container/HostTemplate/modules/actions';
import { NavLink } from 'react-router-dom';
const modalStyle = {
    position: 'absolute',
    top: '50px',
    left: '50%',
    
    // right:'0',
    // transform: 'translate(-50%, -50%)',
    width: '50%',
    height:"80%",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius:"16px",
    p: 4,

  };
let addressComponent=[];
export default function Search({ panTo,fun }) {
   
    let dispatch=useDispatch();
    const propertyInfo=useSelector((state)=>state.hostReducer);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (arr,lat,lng) => {
        
        if(addressComponent!==[])
            addressComponent=[];
        arr.forEach((element,index) => {
            let{long_name}=arr[index];
            addressComponent.push(long_name);
        });
        dispatch(actAddAdress(addressComponent[0]+" "+addressComponent[1]));
        dispatch(actAddLat(lat));
        dispatch(actAddLong(lng));
       
        fun({
            lat,
            lng,
        });
        
        setOpen(true);
    }
    const handleClose = (lat,lng) =>{
        setOpen(false);
      
    } 
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 43.653225,
                lng: () => -79.383186,
            },
            radius: 200 * 1000,
        }
    });
  

    return (
        <div className='search d-flex'>


            <Combobox className='search__container'
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    try {
                        const result = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(result[0]);
                        const { address_components } = result[0];
                       
                        
                        // panTo({lat,lng});
                        // fun({
                        //     lat,
                        //     lng,
                        // });
                        
                        handleOpen(address_components,lat,lng);
                       
                       
                    }
                    catch {

                    }

                }}
            >
                <div className='d-flex'>
                    <button className='locate__icon'
                        onClick={() => {
                            handleOpen();
                            navigator.geolocation.getCurrentPosition((position) => {
                                
                                panTo({
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                });

                            }, () => null);
                        }}
                    ><i class="fa fa-map-marker-alt"></i></button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div>
                        <Box sx={modalStyle}>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography> */}
                            {/* <form onSubmit={(e)=>{
                                e.preventDefault();
                                dispatch(actAddPropertyApi(propertyInfo));
                               
                                handleClose();
                            }}>
                        
                            </form> */}
                            <TextField required  fullWidth label="Address" id="address" defaultValue={addressComponent[0]}  color="secondary" margin='normal' />
                            <TextField required fullWidth label="Street" id="street"   margin='normal'  color="secondary" defaultValue={addressComponent[1]} />
                            <TextField required fullWidth label="District" id="district"   margin='normal'  color="secondary" defaultValue={addressComponent[2]} />
                            <TextField required fullWidth label="Province/State" id="province-state"   margin='normal'  color="secondary" defaultValue={addressComponent[3]} />
                            <TextField required fullWidth label="Country" id="country"   margin='normal'  color="secondary" defaultValue={addressComponent[4]} />
                            <NavLink to={"/title"}>
                            <div className='button__container'>
                                <Button type='submit' className='legit__btn'>Next</Button>    
                            </div>
                            </NavLink>
                           
                           
                           
                        
                        </Box>
                        </div>
                        
                    </Modal>
                    <ComboboxInput className='search__input'
                        placeholder='Enter your address'
                        value={value} onChange={(e) => {

                            setValue(e.target.value);
                        }}
                        disabled={!ready}
                    >

                    </ComboboxInput>
                    <ComboboxPopover>
                        <ComboboxList className='result__list'>
                            {
                                status === "OK" && data.map(({ id, description }) => (
                                    <ComboboxOption className='result' key={id} value={description} />
                                ))
                            }
                        </ComboboxList>
                    </ComboboxPopover>
                </div>

            </Combobox>
        </div>
    )
}
