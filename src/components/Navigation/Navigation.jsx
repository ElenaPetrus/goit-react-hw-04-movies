import Button from '@mui/material/Button';
import ButtonGroup from  '@mui/material/ButtonGroup';
import {NavLink} from 'react-router-dom';


const NavBar = () =>{
    return(
       
        <ButtonGroup variant="text" aria-label="text button group">
         <>
        <NavLink to ="/" style={{textDecoration:'none'}}>
        <Button>HomePage</Button> 
         </NavLink>
        <NavLink to ="/" style={{textDecoration:'none'}}>
        <Button>MoviesPage</Button>
        </NavLink>
        </>
      </ButtonGroup>
      
    )
}

export default NavBar