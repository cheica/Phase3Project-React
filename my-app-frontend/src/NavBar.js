import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar(){


    return(
        <header>
            <div className="header">
            </div>
            <h1>All Makeup Lovers, Welcome! </h1>
            <nav>

            
            <NavLink className="button" to="./">
                Home
            </NavLink>
            <NavLink className="button" to="./MakeUpEsssentials">
                MakeUp Essentials
            </NavLink>
            <NavLink className="button" to="./SuperGlam">
                SuperGlam
            </NavLink>

            </nav>
            </header>
    )
}





// import Routes from './Routes';



// const NavBar=()=>{

//     return(
//     <nav className="nav-links">
//     <span><Link to= "/" > Home </Link></span>
//     <span><Link to='/PlantsPage'> Plants </Link></span>
//     <span><Link to='/TipsPage'> Tips </Link></span>
//     <span><Link to='/Favorites'>   Plant Favorites   </Link></span>
   
// </nav>)
// }



// export default NavBar;

export default NavBar; 