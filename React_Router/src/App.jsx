import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Admin from './components/Admin'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import { fontFamily } from '@mui/system'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
    const handleLogin = (event) => {
      event.preventDefault();
      if (id === "65130500220") {
        setIsLoggedIn(true);
      } else {
        navigate("/error");
      }
    };

  return (
    <div className="top">
      <BrowserRouter>
        <div className="top">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Profile/:id" element={<Profile />} />
            <Route
              path="/Admin"
              element={
                <Admin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
          </Routes>
        </div>
        <br></br>
        <nav className="bot">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/About"}>About</NavLink>
          <NavLink to={"/Contact"}>Contact</NavLink>
          <NavLink replace to={"/Profile/220"}>
            Profile
          </NavLink>
          <NavLink to={"/Admin"}>For Admin!!</NavLink>
        </nav>
      </BrowserRouter>
      <br />
      {!isLoggedIn && (
        <form onSubmit={handleLogin}>
          <label style={{ fontFamily: "sans-serif" }}>Student ID: </label>
          <input
            type="text"
            placeholder="65130500220"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          &nbsp;&nbsp;
          <button type="submit" className="button2">
            Log in
          </button>
        </form>
      )}
    </div>
  );
}

export default App
