
import {Link} from 'react-router-dom';
import {useEffect,useState } from 'react';
import { FaBeer} from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from '@material-ui/core';
import ParticlesBg from 'particles-bg' 

const NavBar = () => {

   

  

    return (


        <nav className="navbar" >
        
          
       
      
        <Link to="/">
            <h1>Book.lk</h1>
            </Link>
            <div className="links">

           
                <Link to="/create"> <b>AddBook</b> </Link>
                <Link to="/admin"> <b>Admin</b> </Link>
                
                
            </div>

           
        </nav>
    );
}
 
export default NavBar;