import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { navTabs } from '../../data'
import { Link } from 'react-scroll'
import { RiMenu3Fill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import Logo from '../Logo'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState(false)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setActiveNavbar(currentScrollPos > 50)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
            {/* Overlay when sidebar is open */}
            {open && (
                <div
                    className='sidebar_overlay'
                    onClick={() => setOpen(false)}
                ></div>
            )}

            <Logo />

            {/* Sidebar Navigation Tabs */}
            <div className={`box nav_tabs ${open ? 'visible' : ''}`}>
                <div
                    className='icon_container cancel_btn'
                    onClick={() => setOpen(false)}
                    role="button"
                    aria-label="Close menu"
                >
                    <FaTimes />
                </div>
                {navTabs.map((tab, index) => (
                    <Link
                        key={index}
                        to={tab.id}
                        className='tab'
                        activeClass='g-text'
                        smooth={true}
                        spy={true}
                        offset={-70}
                        onClick={() => setOpen(false)}
                    >
                        {tab.name}
                    </Link>
                ))}
            </div>

            {/* Right side: Get Started button & Menu icon */}
            <div className="box">
                <Link to="contact" className='btn contact_btn'>
                    Get started
                </Link>
                <div
                    className='icon_container menu_btn'
                    onClick={() => setOpen(true)}
                    role="button"
                    aria-label="Open menu"
                >
                    <RiMenu3Fill />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
