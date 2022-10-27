import "./CSS/Mood.css"
import { motion} from "framer-motion"
import { useState } from "react";

const variants = {
    rotation: {
      rotate: 350,
      transition: {
        ease: "linear",
        duration: 1.5,
        repeat: Infinity
      }
    },
    scalation: {
      scale: 1.2,
      transition: {
        ease: "easeInOut"
      }
    }
  };

function MoodSelect({text, name}) {
    const [hover, setHover] = useState(false);

    return (
        <>
            <motion.div whileHover={["rotation", "scalation"]} 
                whileTap={{ scale: 0.8 }} variants={variants} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={name}>
            </motion.div>
            {hover && text}
        </>
    );
  }
  
  export default MoodSelect;