import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css"
function Header() {
  const [menuOpen,setMenuOpen]=useState(false);
    return (
     <>
      <nav>
      <Link to='/' className="title">Portfolio</Link>
      <div className="menu" onClick={()=>{setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen?"open":""}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/skill'>Skill</NavLink></li>
          <li><NavLink to='/project'>Project</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
     </>
    );
  }
  
  export default Header;
  