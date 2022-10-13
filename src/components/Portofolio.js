import './CSS/Portofolio.css'
import tarot1 from '../images/tarot-reader-scrn1.png';
import tarot2 from '../images/tarot-reader-scrn2.png';
import tarot3 from '../images/tarot-reader-scrn3.png';
import twerp1 from '../images/twerp-scrn1.png';
import twerp2 from '../images/twerp-scrn2.png';
import twerp3 from '../images/twerp-scrn3.png';
import ghostbuster1 from  '../images/ghost-buster-scrn1.png';
import SimpleImageSlider from "react-simple-image-slider";
import { shuffle } from "lodash";

import { motion} from "framer-motion"
import { useEffect, useMemo, useRef, useState} from 'react';

const Twerp =
    [1, <a href='https://github.com/LucasCNordstrom/Loop5FinalProject' target="_blank" rel='noreferrer'>
        <motion.div className='project-card' whileHover={{ scale: 1.1 }}>
            <h3>Twerp</h3>
            <h5>Final group project for Salt's curriculum</h5>
            <h5>Webapp for storing and tracking perishables's expiration date.</h5>
            <img src={twerp1} alt="twerp-prntscreen" width={250}/>
        </motion.div>
    </a>]

const Tarot =
    [2, <a href='https://github.com/Laura-Foxey/tarotReader' target="_blank" rel='noreferrer'>
        <motion.div className='project-card' whileHover={{ scale: 1.1 }}>
            <h3>Tarot Reader</h3>
            <h5>Hackday project built in 24h</h5>
            <h5>Webapp in the style of a game to simulate having your cards read.</h5>
            <img src={tarot1} alt="twerp-prntscreen" width={250}/>
        </motion.div>
    </a>]

const Ghostbuster =
        [3, <a href='https://github.com/Laura-Foxey/Ghost-Buster' target="_blank" rel='noreferrer'>
            <motion.div className='project-card' whileHover={{ scale: 1.1 }}>
                <h3>Ghost Buster</h3>
                <h5>Windows Forms game in C#</h5>
                <h5>Shoot ghosts with this simple game and try not to die!</h5>
                <img src={ghostbuster1} alt="twerp-prntscreen" width={250}/>
            </motion.div>
        </a>]
        
const spring = {
    type: "spring",
    damping: 25,
    stiffness: 120
    };
        
function Portofolio({direction}) {
    const [array, setArray] = useState([Twerp, Tarot, Ghostbuster]);
    const tarotimages = [
        {url: tarot1},
        {url: tarot2},
        {url: tarot3},
    ];

    const twerpimages = [
        {url: twerp1},
        {url: twerp2},
        {url: twerp3},
    ];

    //let projectList = [Twerp, Tarot, Ghostbuster];

    const cshift = (arr) => 
    {
        let temp;
        if (arr.length > 2)
        {   
            temp = arr[0];
            for (let i = 1; i < arr.length; i++)
            {
                arr[i - 1] = arr[i];
            }
            arr[arr.length - 1] = temp;
        }
        return arr;;
    }

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //        array = shift(array);
    //     }, 1000);
      
    //     return () => clearInterval(interval);
    //   }, []);


    // useEffect(() => {
    //     const intervalID = setInterval(() =>  {
    //         setArray(shift(array));
    //     }, 1000);
    
    //     return () => clearInterval(intervalID);
    // }, [array]);

    useEffect(() => {
        
        setTimeout(() => setArray(cshift(array)), 3000);
      }, [array]);

    return (
        <>
            <motion.div className="portofolio template"
            initial= {{x: direction > 0 ? -100: 100}}
            animate={{x: 0, opacity: 1}}
            >
                <ul className='slider-box'>
                    {array.map(x =>
                    (<motion.li key={x[0]}
                        layout
                        transition={spring} >
                        {x[1]}
                    </motion.li>))}
                </ul>
            </motion.div>
        </>
    );
  }
  
  export default Portofolio;
  