import profilepic from '../images/profile-pic.png';
import { NavLink } from "react-router-dom";
import { motion} from "framer-motion"
import "./CSS/About.css"
import { useState } from 'react';

function About({direction}) {
    const [anim, setAnim] = useState(false);
    const variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -20, -10, -40, 0, -10, 0],
            damping: 10,
        }
      };

    const animateClick = () => {
        const timer = setTimeout(() => {
            setAnim(false);
        }, 1000);
        setAnim(true);
        return () => clearTimeout(timer);
    }
    return (
        <>
            <motion.div
            initial= {{x: direction > 0 ? -100: 100}}
            animate={{x: 0, opacity: 1}}
            className="template about"
            >
                {console.log(direction)}
                <div className="about__profile-picture">
                    <motion.div className="about__profile-picture__circle" variants={variants} animate={anim ? "animate" : "initial"}>
                        <img className="about__profile-picture__img" src={profilepic} alt="Profile pic"/>
                    </motion.div>
                </div>
                <div className="about__text">
                    <h2>Greetings, traveler!</h2>
                    <h3> It's no coincidence you are here, and our paths connected.</h3>
                    <div className="about__text__div">
                        <p>Pleasure to meet you, I'm <b className='complementary-color' onClick={() => animateClick()}>Laura</b>! A drifter in this vast world of knowledge, 
                        on a journey of finding that something to make my own.</p>
                        <p>I dream to be part of an amazing team that will help me unleash my full potential so I can become
                            a confident developer, and in return contribute with my newfound knowledge. </p>
                        <p><NavLink to='/contact' className='complementary-color'>Show me where I belong.</NavLink></p>
                    </div>
                    <h5> 
                        “Learn not as if you were reaching your goal, but as though you were scared of missing it.” 
                        <b><a href='https://en.wikipedia.org/wiki/Confucius'> -Confucius </a></b>
                    </h5>
                </div>
            </motion.div>
        </>
    );
  }
  
  export default About;
  