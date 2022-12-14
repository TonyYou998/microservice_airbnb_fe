import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function AddPropertyStepBar(props) {
  const {tittle,className}=props;
  
  return (
    <Box sx={{ flexGrow: 1 }} className={className}>
      <AppBar position="static">
        <Toolbar variant="dense">
        
          <Typography variant="h6" color="black" component="div">
            {tittle}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
