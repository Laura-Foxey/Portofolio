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
                <section> a</section>
                <section> b</section>
            </div>
        </motion.div>
    );
  }
  
  export default Portofolio;
  