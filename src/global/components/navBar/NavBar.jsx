import React from 'react';

import { BiSearchAlt2 } from "react-icons/bi";
import './NavBar.scss';


const NavBar = () => {
  return (
    <div className='navBarcontainer'>
     <img src={require('../../../assets/images/unsplash_logo.png')} alt="logo" />

     <form>
     <BiSearchAlt2 />
      <input type="text"required />
      
      </form> 

<span>Advertise</span>

<span>Blog</span>

<span>Unsplash</span>

<span>Advertise</span>

<span>Advertise</span>

    </div>
  )
}

export default NavBar
