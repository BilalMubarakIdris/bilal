import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change color while scrolling

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header' }>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h2>Bilal</h2>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#education' onClick={closeMenu}>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar