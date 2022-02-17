import { NavLink} from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const [icon,setIcon] = useState("fas fa-bars");
  const myfun = ()=>{
    if(menu){
      setMenu(false);
      setIcon("fas fa-bars")
    }else{
      setIcon("fas fa-times")
      setMenu(true);
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="./images/acmlogo.png" alt="logo" />
          <div className="menu-icon" onClick={myfun}><i className={icon}></i></div>
        </div>
        <ul className={menu ?"links":"links show-menu"} >
          <li>
            <NavLink smooth={true} duration={1000} to="/" className="navlink" activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink smooth={true} duration={1000} to="/event" className="navlink" activeclassname="active">Events</NavLink>
          </li>
          <li>
            <NavLink smooth={true} duration={1000} to="/about" className="navlink" activeclassname="active">About</NavLink>
          </li>
          <li>
            <NavLink smooth={true} duration={1000} to="/contact" className="navlink" activeclassname="active">Contact us</NavLink>
          </li>
          <li>
            <NavLink smooth={true} duration={1000} to="/blog" className="navlink" activeclassname="active">Blogs</NavLink>
          </li>
          <li>
            <NavLink smooth ={true} duration={1000} to="/join" className="navlink" activeclassname="active">Join</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
