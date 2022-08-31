import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/navbar.css';
import gk from "../../assets/2.png"

function Navbar(props) {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div id='navbar'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo logo-crown' onClick={closeMobileMenu}>
         <img src={gk} alt="gk" className='gk-logo'/>
          Alex Perde GK Academy
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             Despre
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link
              to='/Planuri'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Planuri
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Copii'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Copii
            </Link>
          </li>
          <li className='nav-item'>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contact'
              className='nav-links'
              id='cart-number'
              onClick={closeMobileMenu}
            >
                Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;