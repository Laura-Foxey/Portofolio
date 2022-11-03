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
    },
    initial: {
      scale: 0
    },
    grow: {
      scale: 30
    }
  };

function MoodSelect({text, name, setMood, moodName, bg}) {
    const [hover, setHover] = useState(false);
    const [anim, setAnim] = useState(false);

    const moodSelect = () => {
      const timer = setTimeout(() => {
        setAnim(false);
        setMood(moodName);
    }, 300);
    setAnim(true);
    return () => clearTimeout(timer);
    }

    return (
        <li>
            <motion.div
              whileHover={["rotation", "scalation"]} 
              whileTap={{ scale: 0.8 }} variants={variants} 
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => moodSelect()}
              className={name}>
            </motion.div>
            { anim && <motion.div className="growing-circle" style={{backgroundColor: bg}}variants={variants} animate={anim ? "grow" : "initial"}></motion.div> }

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