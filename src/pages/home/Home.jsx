import { Box} from "@mui/material"
import { Buscador } from "../../components/buscador/Buscador"
import CardWrapper from "../../components/tarjetas/CardWrapper";
import styles from './Home.module.css'

function Home (){

    return(
        <>
            <Box sx={{width:"80vw", margin:'0 auto'}}>
                <h1 className={styles.headingTitle}>Películas</h1>
                <Buscador/>
                <CardWrapper/>
            </Box>
            
        </>
    )
}

export default Home
