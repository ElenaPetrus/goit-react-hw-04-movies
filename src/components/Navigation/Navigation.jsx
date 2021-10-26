import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {NavLink} from 'react-router-dom';


const NavBar = () =>{
    return(
       
      <ButtonGroup variant="outlined" aria-label="outlined button group">
         <>
        <NavLink to ="/" style={{textDecoration:'none'}}>
        <Button>Home</Button> 
         </NavLink>
        <NavLink to ="/movies" style={{textDecoration:'none'}}>
        <Button>Movie search</Button>
        </NavLink>
        </>
      </ButtonGroup>
      
    )
}

export default NavBar