import "./CSS/Mood.css"
import { motion} from "framer-motion"
import { useState } from "react";
import MoodSelect from "./MoodSelect";

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


function Mood() {

    return (
        <>
            <h1>How are we feeling today?</h1>
            <MoodSelect text={<p>Relaxed</p>} name={"dot relaxed"}/>
            <MoodSelect text={<p>Sleepy</p>} name={"dot sleepy"}/>
            <MoodSelect text={<p>Focused</p>} name={"dot focused"}/>



            {/* <motion.div whileHover={["rotation", "scalation"]} whileTap={{ scale: 0.8 }} variants={variants} className="dot sleepy"></motion.div>
            <motion.div whileHover={["rotation", "scalation"]} whileTap={{ scale: 0.8 }} variants={variants} className="dot focused">

            </motion.div> */}
        </>
    );
  }
  
  export default Mood;