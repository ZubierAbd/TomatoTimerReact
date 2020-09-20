import React from 'react'
import Favicon from '../assets/favicon.png'

const Header = ({ title }) => {
    return (
        <div className="panel">
            <header className="header">
                <span className="tomatoHeader"><img src={Favicon}></img></span>   <h2>{title}</h2>        <span className="tomatoHeader"><img src={Favicon}></img></span>
            </header>

        </div >
    )
}

export default Header
