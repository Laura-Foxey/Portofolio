import About from './About';
import Contact from './Contact';
import Education from './Education';
import Portofolio from './Portofolio';
import arrow from '../images/arrow.png';
import leftarrow from '../images/leftarrow.png';
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState, useCallback} from 'react';

function Routing({mood}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [direction, setDirection] = useState(0);

    const rightArrow = useCallback(() => {
        switch(location.pathname) {
            case '/':
                setDirection(1)
                navigate("/education")
                break;
            case '/education':
                setDirection(1)
                navigate("/portofolio")
                break;
            case '/portofolio':
                setDirection(1)
                navigate("/contact")
                break;
            case '/contact':
                setDirection(1)
                navigate("/")
                break;
            default:
                break;
        }
    }, [location.pathname, navigate])

    const leftArrow = useCallback(() => {
        switch(location.pathname) {
            case '/':
                setDirection(0)
                navigate("/contact")
                break;
            case '/education':
                setDirection(0)
                navigate("/")
            break;
            case '/portofolio':
                setDirection(0)
                navigate("/education")
                break;
            case '/contact':
                setDirection(0)
                navigate("/portofolio")
                break;
            default:
                break;
        }
    }, [location.pathname, navigate])

    useEffect(() => {
        var scrollableElement = document.body; //document.getElementById('scrollableElement');

        scrollableElement.addEventListener('wheel', checkScrollDirection);

        function checkScrollDirection(event) {
            if (checkScrollDirectionIsUp(event)) {
            leftArrow();
            } else {
            rightArrow();
            }
        }

        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
            return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
        }

    }, [leftArrow, rightArrow]);

    return (
        <>
            <div className='arrow'> 
                <motion.img className="color-recolor" src={leftarrow} whileHover={{ scale: 1.2 }} onClick={leftArrow}/>
            </div>
            <div className='outline'>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<About direction={direction}/>} />
                        <Route path="/education" element={<Education direction={direction} mood={mood}/>} />
                        <Route path="/portofolio" element={<Portofolio direction={direction}/>} />
                        <Route path="/contact" element={<Contact direction={direction}/>} />
                    </Routes>
            </div>
            <div className='arrow'>
                <motion.img className="color-recolor" src={arrow} whileHover={{ scale: 1.2 }} onClick={rightArrow}/> 
            </div>
      </>
    );
  }
  
  export default Routing;
