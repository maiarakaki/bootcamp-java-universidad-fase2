import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import { TarjetaDetalle } from './components/detalle/TarjetaDetalle'

const AppRouter =()=>{

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/detail'element={<TarjetaDetalle/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRouter