import React from 'react';
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom';

const Navigator = () => {
    return (

    <div className="Navigator">
        <nav className="navbar navbar-expand-sm">
            <NavLink to='/'  className="navbar-brand" href="#"><img  src={logo} alt=""/> </NavLink>
            <button className='navbar-toggler' data-toggle='collapse' data-target='#menu'><span className='navbar-toggler-icon'></span></button>
            <div className='collapse navbar-collapse justify-content-end' id='menu'>
                <ul className='navbar-nav'>
                    <li className='nav-link'><NavLink to='/' >HOME</NavLink></li>
                    <li className='nav-link'><NavLink to='/menu' >MENU</NavLink></li>
                    <li className='nav-link'><NavLink to='/beignets' >BEIGNETS</NavLink></li>
                    <li className='nav-link'><NavLink  to='/samosa' >SAMOSA</NavLink></li>
                    <li className='nav-link'><NavLink  to='/contact' >CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    </div> 

    );
}
 
export default Navigator;