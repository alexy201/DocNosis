import "./Sidebar.scss";
import React from 'react';
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <div className = "sidebar">
           <div className = "top">
            <span className = "logo">Doctor</span>
           </div>
           <div class = "button-worker">
                    <button id = "errorBtn" class="custom-btn btn-16">Get Diagnosed</button>
            </div>
           <div className = "center">
            <ul>
                <p className = "title">Main</p>
                <Link to="/" className = "removeLink">
                <li>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to="/calendar" className = "removeLink">
                <li>
                    <span>Inbox</span>
                </li>
                </Link>
                <Link to="/rewards" className = "removeLink">
                <li>
                    <span>Rewards</span>
                </li>
                </Link>
            </ul>
            <ul>
                <p className = "title">Settings</p>
                <Link to="/settings" className = "removeLink">
                <li>
                    <span>User Settings</span>
                </li>
                </Link>
            </ul>
           </div>
        </div>
    )
}

export default Sidebar



