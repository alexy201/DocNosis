import Sidebar from "../pages/Sidebar.jsx";
import Navbar from "../pages/Navbar.jsx";
import React from 'react';



const MainPage = () => {
    return (
        <div className = "home">
           <Sidebar/>
           <div className = "homeContainer">
            <Navbar/>
           </div>
        </div>
    )
}

export default MainPage