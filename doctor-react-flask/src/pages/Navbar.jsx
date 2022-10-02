import "./Navbar.scss"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "name">
                        Hi Matthew Lee!
                    </div>
                </div>
                <div className = "middle">
                    <div className = "firstHalf">

                    </div>
                </div>
                <div className = "right">
                    <div className = "logout" onClick={event =>  window.location.href='/'}>
                        <p className = "icon">icon</p>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
