import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { Buscador } from "../components/buscador/Buscador"
import CardWrapper from "../components/tarjetas/CardWrapper";
import styles from './Home.module.css'

function Home (){
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return(
        <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{width:"80vw", margin:'0 auto'}}>
                <h1 className={styles.headingTitle}>Películas</h1>
                <Buscador/>
                <CardWrapper/>
            </Box>
            
        </ThemeProvider>
        </>
    )
}

export default Home
