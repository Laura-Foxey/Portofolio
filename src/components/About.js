import './CSS/About.css';
import profilepic from '../images/profile-pic.png';
import { NavLink } from "react-router-dom";
import { motion} from "framer-motion"

function About({direction}) {
    return (
        <motion.div className="about template"
        initial= {{x: direction > 0 ? -100: 100}}
        animate={{x: 0, opacity: 1}}
        >
            {console.log(direction)}
            <div className="about-image">
                <img src={profilepic} alt="Profile pic"/>
            </div>
            <div className="about-text">
                <h3>Greetings, traveler!</h3>
                <h5 className='about-text-underline'> It's no coincidence your journey brought you here, and our paths connected.</h5>
                <h4>
                    <br />
                    Pleasure to meet you, I'm <b style={{color: '#ff34b3'}}>Laura</b>! A drifter in a wast world of knowledge, seeking to make something my own.
                    <br />
                    <br />I dream to be part of an amazing team that will help me unleash my full potential so I can become
                    a confident developer, and in return contribute with my newfound knowledge.
                    <br />
                    <NavLink to='/contact' style={{color: '#ff34b3'}}>Show me where I belong.</NavLink>
                </h4>
                <h5 className="quote"> 
                    “Learn not as if you were reaching your goal, but as though you were scared of missing it.” 
                    <b style={{ fontFamily: 'Indie Flower' }}> -Confucius</b>
                </h5>
            </div>
        </motion.div>
    );
  }
  
  export default About;
  