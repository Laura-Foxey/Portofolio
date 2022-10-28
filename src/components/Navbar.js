import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css"
import profileNav from "../images/profile-nav.png";
import contactNav from "../images/contact-nav.png";
import portofolioNav from "../images/portofolio-nav.png";
import educationNav from "../images/education-nav.png";
import { motion } from "framer-motion";

function Navbar() {
    return (
    <header className="navbar">
        <ul className="navbar-list">
            <motion.li whileHover={{ scale: 1.2 }} className="navbar-list_border">
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/">
                        <img src={profileNav} alt="profile-navigation" />
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="navbar-list_border">
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/education" >
                        <img src={educationNav} alt="education-navigation"/>
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="navbar-list_border">
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/portofolio">
                        <img src={portofolioNav} alt="portofolio-navigation"/>
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="navbar-list_border">
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/contact">
                        <img src={contactNav} alt="contact-navigation"/>
                </NavLink>
            </motion.li>
        </ul>
    </header>
    );
  }
  
  export default Navbar;
  