import React, { useRef, useState } from 'react'
import { debounce } from "lodash";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import pattern_image from '../../assets/pattern_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu_icon.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" width="50px" height="50px"/>
        <img src={menu_icon} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef}className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
            <li onMouseOver = {() => setMenu("home")}><AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p>{menu==="home" ? <img src={pattern_image}/>:<></>}</AnchorLink></li>
            <li onMouseOver = {() => setMenu("experience")} ><AnchorLink className='anchor-link' offset={50} href='#experience'><p>My Experience</p>{menu==="experience" ? <img src={pattern_image}/>:<></>}</AnchorLink></li>
            <li onMouseOver = {() => setMenu("portfolio")}><AnchorLink className='anchor-link' offset={50} href='#mywork'><p>My Work</p>{menu==="portfolio" ? <img src={pattern_image}/>:<></>}</AnchorLink></li>
            <li onMouseOver = {() => setMenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p>{menu==="contact" ? <img src={pattern_image}/>:<></>}</AnchorLink></li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/venkat-subramanian5">
          <div className="nav-connect">Connect with Me</div>
        </a>
    </div>
  )
}

export default Navbar
