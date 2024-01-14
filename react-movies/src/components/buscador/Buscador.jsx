import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export const Buscador = () => {

    
  return (
    <>
    <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <SearchIcon sx={{fontSize:'2rem'}}/>
        <TextField
            label="Search"
            variant="standard"
            shrink="true"
            type="search"
            sx={{
                width: '80vw',
                color: 'success.main',
            }}
            
        />

    </Box>
    </>
  )


}
