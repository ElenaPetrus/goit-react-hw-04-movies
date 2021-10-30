import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {NavLink} from 'react-router-dom';
import s from './Navigation.module.css';

const NavBar = () =>{
    return(
       <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
         <>
        <NavLink to ="/"  className={s.link}
            activeClassName={s.activeLink}>
        <Button>Home</Button> 
         </NavLink>
        <NavLink to ="/movies"  className={s.link}
            activeClassName={s.activeLink}>
        <Button>Movie search</Button>
        </NavLink>
        </>
      </ButtonGroup>
      </div>
    )
}

export default NavBar