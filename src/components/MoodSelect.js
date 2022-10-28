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
      scale: 1.1,
      transition: {
        ease: "easeInOut"
      }
    }
  };

function MoodSelect({text, name, setMood, moodName}) {
    const [hover, setHover] = useState(false);

    return (
        <li>
            <motion.div
                whileHover={["rotation", "scalation"]} 
                whileTap={{ scale: 0.8 }} variants={variants} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setMood(moodName)}
                className={name}>
            </motion.div>
              {hover && 
              <motion.div className="mood-select-text" 
              layout 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={3}>
                {text}
              </motion.div>}
        </li>
    );
  }
  
  export default MoodSelect;