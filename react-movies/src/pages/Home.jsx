import { Box } from "@mui/material"
import { Buscador } from "../components/buscador/Buscador"

function Home (){
    return(
        <>
            <h1>home</h1>
            <Box sx={{width:"80vw", margin:'0 auto'}}>
                <Buscador/>
            </Box>
        </>
    )
}

export default Home
