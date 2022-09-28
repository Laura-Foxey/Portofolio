import './CSS/Portofolio.css'
import tarot1 from '../images/tarot-reader-scrn1.png';
import tarot2 from '../images/tarot-reader-scrn2.png';
import tarot3 from '../images/tarot-reader-scrn3.png';
import twerp1 from '../images/twerp-scrn1.png';
import twerp2 from '../images/twerp-scrn2.png';
import twerp3 from '../images/twerp-scrn3.png';
import SimpleImageSlider from "react-simple-image-slider";
import { motion} from "framer-motion"

function Portofolio({direction}) {
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

    return (
        <motion.div className="portofolio template"
        initial= {{x: direction > 0 ? -100: 100}}
        animate={{x: 0, opacity: 1}}
        >
            <div className='slider-box'>
                <div className='slider'>
                    <SimpleImageSlider className='slider'
                        width={407}
                        height={229}
                        images={tarotimages}
                        autoPlay={true}
                        autoPlayDelay={4}
                    />
                </div>
                <div className='slider-overlay'>
                    <a href='https://github.com/Laura-Foxey/tarotReader' target="_blank" rel='noreferrer'> Tarot Reader </a>
                    <h5>Webapp built in the style of a game to simulate having your tarot cards read.</h5>
                </div>
            </div>
            <div className='slider-box'>
                <div className='slider'>
                    <SimpleImageSlider
                        width={407}
                        height={229}
                        images={twerpimages}
                        autoPlay={true}
                        autoPlayDelay={4.2}
                    />
                </div>
                <div className='slider-overlay'>
                    <a href='https://github.com/LucasCNordstrom/Loop5FinalProject' target="_blank" rel='noreferrer'> Twerp </a>
                    <h5>This webapp helps keep track of your perishables and their expiration countdown.</h5>
                </div>
            </div>
        </motion.div>
    );
  }
  
  export default Portofolio;
  