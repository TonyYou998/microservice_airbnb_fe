import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { actAddImg } from 'container/HostTemplate/modules/actions';
import { useState } from 'react';

export default function UploadButtons() {
  const[img,setImg]=useState({});
  const dispatch=useDispatch();
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button  className='upload__button' component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" onChange={(e)=>{
          dispatch(actAddImg(e.target.files[0]))
            // setImg(e.target.files[0]);
        }} />
      </Button>
      <IconButton color="primary" style={{color:"#000000"}} aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}