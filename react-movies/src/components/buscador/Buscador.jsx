import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import styles from './Buscador.module.css';

export const Buscador = () => {

    
  return (
    <>
    <Box className={styles.buscador}>
        <SearchIcon className={styles.searchIcon}/>
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
