import './CSS/Portofolio.css'
import tarot1 from '../images/tarot-reader-scrn1.png';
import tarot2 from '../images/tarot-reader-scrn2.png';
import tarot3 from '../images/tarot-reader-scrn3.png';
import twerp1 from '../images/twerp-scrn1.png';
import twerp2 from '../images/twerp-scrn2.png';
import twerp3 from '../images/twerp-scrn3.png';
import ghostbuster1 from  '../images/ghost-buster-scrn1.png';
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

    const Twerp =
    <a href='https://github.com/LucasCNordstrom/Loop5FinalProject' target="_blank" rel='noreferrer'>
        <div className='project-card'>
            <h3>Twerp</h3>
            <h5>Final group project for Salt's curriculum</h5>
            <h5>Webapp for storing and tracking perishables's expiration date.</h5>
            <img src={twerp1} alt="twerp-prntscreen" width={250}/>
        </div>
    </a>

    const Tarot =
    <a href='https://github.com/Laura-Foxey/tarotReader' target="_blank" rel='noreferrer'>
        <div className='project-card'>
            <h3>Tarot Reader</h3>
            <h5>Hackday project built in 24h</h5>
            <h5>Webapp in the style of a game to simulate having your cards read.</h5>
            <img src={tarot1} alt="twerp-prntscreen" width={250}/>
        </div>
    </a>

    const Ghostbuster =
        <a href='https://github.com/Laura-Foxey/Ghost-Buster' target="_blank" rel='noreferrer'>
            <div className='project-card'>
                <h3>Ghost Buster</h3>
                <h5>Windows Forms game in C#</h5>
                <h5>Shoot ghosts with this simple game and try not to die!</h5>
                <img src={ghostbuster1} alt="twerp-prntscreen" width={250}/>
            </div>
        </a>

    return (
        <>
            <motion.div className="portofolio template"
            initial= {{x: direction > 0 ? -100: 100}}
            animate={{x: 0, opacity: 1}}
            >
                <div className='slider-box'>
                    <section> {Twerp} </section>
                    <section> {Tarot} </section>
                    <section> {Ghostbuster} </section>
                </div>
            </motion.div>
        </>
    );
  }
  
  export default Portofolio;
  