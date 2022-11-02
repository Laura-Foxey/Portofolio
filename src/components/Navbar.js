import { NavLink } from "react-router-dom";
import profileNav from "../images/profile-nav.png";
import contactNav from "../images/contact-nav.png";
import portofolioNav from "../images/portofolio-nav.png";
import educationNav from "../images/education-nav.png";
import { motion } from "framer-motion";
import "./CSS/Navbar.css"


function Navbar() {
    return (
    <header>
        <ul className="navigation-bar">
            <motion.li whileHover={{ scale: 1.2 }} >
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/">
                        <img src={profileNav} alt="profile-navigation" className="navigation-bar__icon"/>
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} >     <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/education" >
                        <img src={educationNav} alt="education-navigation" className="navigation-bar__icon"/>
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} >
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/portofolio">
                        <img src={portofolioNav} alt="portofolio-navigation" className="navigation-bar__icon"/>
                </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} >
                <NavLink className={({ isActive }) => 
                      (isActive ? "contrast-recolor" : "color-recolor")} to="/contact">
                        <img src={contactNav} alt="contact-navigation" className="navigation-bar__icon"/>
                </NavLink>
            </motion.li>
        </ul>
    </header>
    );
  }
  
  export default Navbar;
  