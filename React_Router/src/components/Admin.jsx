import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.png'

function Admin({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div>
      <h1>This is Admin Page</h1>
      <box className='box'>
        <img    
          src={profile}
          height={"100px"}
        ></img>
      </box>
      <br></br>
      <br />
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
export default Admin;