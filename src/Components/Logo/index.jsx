import React from 'react'
import "./Logo.css"
import {  PiSolarPanelFill } from 'react-icons/pi'

const Logo = () => {
    return (
        <div className='logo'>
            <PiSolarPanelFill className='icon'/>
            <h1 className="name">Sola <span className="color_primary">Rix</span></h1>
        </div>
    )
}

export default Logo