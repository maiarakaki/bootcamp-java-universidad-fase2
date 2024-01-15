import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { Buscador } from "../components/buscador/Buscador"

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
                <Buscador/>
            </Box>
            
        </ThemeProvider>
        </>
    )
}

export default Home
