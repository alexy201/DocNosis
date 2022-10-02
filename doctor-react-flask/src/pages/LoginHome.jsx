import React, { useState, useEffect } from 'react';
import Row from '../components/Row.jsx'
import Login from '../components/Login.jsx'

function LoginHome() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div >
      <Login />
    </div>
  );
}

export default LoginHome;