import "./Home.scss";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import React from 'react';
import Card from "./Card";

const Home = () => {
    return (
        <div className = "home">
           <Sidebar/>
           <div className = "homeContainer">
            <Navbar/>
            <Card title = "Is This Rash Harmful?" img = "rash"/>
            <Card title = "Don't Know What This Is: HELP!" img = "mole"/>
            <Card title = "Take a look at my MRI Scan" img = "mri"/>
           </div>
        </div>
    )
}

export default Home
