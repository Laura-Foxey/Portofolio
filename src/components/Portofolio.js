import './CSS/Portofolio.css'
import tarot1 from '../images/tarot-reader-scrn1.png';
import twerp1 from '../images/twerp-scrn1.png';
import ghostbuster1 from  '../images/ghost-buster-scrn1.png';

import { motion} from "framer-motion"
import { useEffect, useState} from 'react';

const Twerp =
    [1, <motion.section className='project-card' whileHover={{ scale: 1.1 }}>
            <a href='https://github.com/LucasCNordstrom/Loop5FinalProject' target="_blank" rel='noreferrer' className='project-card-flex'>
                <h3 className='project-card-title'>Twerp</h3>
                <h5>Final group project for Salt's curriculum</h5>
                <h5>Webapp for storing and tracking perishables's expiration date.</h5>
                <img src={twerp1} alt="twerp-prntscreen"/>
            </a>
        </motion.section>]

const Tarot =
    [2, <motion.section className='project-card' whileHover={{ scale: 1.1 }}>
            <a href='https://github.com/Laura-Foxey/tarotReader' target="_blank" rel='noreferrer' className='project-card-flex'>
                <h3 className='project-card-title'>Tarot Reader</h3>
                <h5>Hackday project built in 24h</h5>
                <h5>Webapp in the style of a game to simulate having your cards read.</h5>
                <img src={tarot1} alt="twerp-prntscreen"/>
            </a>
        </motion.section>]

const Ghostbuster =
        [3, <motion.section className='project-card' whileHover={{ scale: 1.1 }}>    
                <a href='https://github.com/Laura-Foxey/Ghost-Buster' target="_blank" rel='noreferrer' className='project-card-flex'>
                    <h3 className='project-card-title'>Ghost Buster</h3>
                    <h5>Windows Forms game in C#</h5>
                    <h5>Shoot ghosts with this simple game and try not to die!</h5>
                    <img src={ghostbuster1} alt="twerp-prntscreen"/>
                </a>
        </motion.section>]
        
const spring = {
    type: "spring",
    damping: 25,
    stiffness: 120
    };
        
function Portofolio({direction}) {
    const [array, setArray] = useState([Twerp, Tarot, Ghostbuster]);
    const isMobile = window.innerWidth < 700;

    const cshift = (arr) => 
    {
        let temp;
        let newArr = [];
        if (arr.length > 2)
        {   
            temp = arr[0];
            for (let i = 1; i < arr.length; i++)
            {
                newArr[i - 1] = arr[i];
            }
            newArr[arr.length - 1] = temp;
        }
        return newArr;
    }

    //only work while it is not mobile
    useEffect(() => {
        if (isMobile === false) {
        const intervalID = setInterval(() =>  {
        let replacement = cshift(array);
        setArray(replacement)}, 3500);

        return () => clearInterval(intervalID);}
      }, [array, isMobile]);

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
  