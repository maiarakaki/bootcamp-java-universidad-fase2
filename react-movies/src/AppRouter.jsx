import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import { TarjetaDetalle } from './pages/detalle/TarjetaDetalle'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const AppRouter =()=>{
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });


    return(
        <>
        <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />

            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/movies/:id'element={<TarjetaDetalle/>}/>
            </Routes>

        </ThemeProvider>
        </BrowserRouter>
        </>
    )
}
export default AppRouter