import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import { useRef, useState } from 'react';
import { motion} from "framer-motion"
import pointer from '../images/pointer.png'
import './CSS/Education.css'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function Education({direction, mood}) {
    const [eduInfo, setEduInfo] = useState(0);
    const isMobile = window.innerWidth < 700;

    const moodColor = () => {
        if (mood === 'focused') {
            return ['#96ceff', '#2011a2', '#ff34b3', '#f7a35b', '#8286e9'];
        }
        if (mood === 'relaxed') {
            return ['#ffce5e', '#ff5d0e', '#75ffb2', '#f7a35b', '#8286e9'];
        }
        if (mood === 'sleepy') {
            return ['#866faa', '#261144', '#cf6369', '#a997c7', '#a997c7'];
        }
    }

    const borderCol = () => {
        if (mood === 'focused') {
            return '#55e7ff';
        }
        if (mood === 'relaxed') {
            return '#ffe4a5';
        }
        if (mood === 'sleepy') {
            return '#a997c7';
        }
    }

    const today = Date.parse(new Date());
    const salt = Math.ceil((Date.parse('02 May 2022 00:00:00 GMT') - today) / (1000 * 60 * 60 * 24) * -1)
    const data = {
        datasets: [{
            data: [310, 420, salt],
            backgroundColor: moodColor(),
            borderColor: borderCol(),
            hoverOffset: 10,
            },
        ],
        labels: [
            'Self-Taught',
            '42 Wolfsburg',
            'Salt Stockholm'
        ],      
    };
    const options = {
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                family: "Montserrat", // Add your font here to change the font of your legend label
                size: 12
              }
            },
          }
        }
      };

    const chartRef = useRef();

    const onClick = (event) => {
        const dataset = getElementAtEvent(chartRef.current, event);
        if (dataset[0].index === 0) setEduInfo(1);
        else if (dataset[0].index === 1) setEduInfo(2);
        else if (dataset[0].index === 2) setEduInfo(3);
        else return;
    }
        

    const eduInfo1 = 
    <li>
        <h3>Online classes (2020-2021)</h3>
        <h4>All passions start out as curiosities. Mine began as exploring the unknown and gaining knowledge through various platforms. </h4>
        <h4>New skills unlocked: HTML, CSS, Python, Unity. </h4>
    </li>

    const eduInfo2 = 
    <li>
        <h3>42 Wolfsburg (2021-2022)</h3>
        <h4>After a month of trial, acepted into a wide-spread school to learn project-based programming at my own pace. </h4>
        <h4>New skills unlocked: VSC, Mac, C, Console. </h4>
    </li>

    const eduInfo3 = 
    <li>
        <h3>Salt Sthlm (2022-present)</h3>
        <h4>All good knowledge needs a solid foundation, and Salt helped me build mine through three months of intensive coding. </h4>
        <h4>New skills & level ups: C#, HTML, CSS, Javascript, VSC. </h4>
    </li>

    const eduInfo0 = 
    <li>
        <br/>
        <br/>
        <h5>Click a doghnut section to learn more! </h5>
        <img src={pointer} alt="pointer-arrow" className='color-recolor education__info__arrow'/>
    </li>

    return (
        <>
            <motion.div className="education template"
            initial= {{x: direction > 0 ? -100: 100}}
            animate={{x: 0, opacity: 1}}
            >
                { !isMobile && <div className="education__pie-chart">
                    <Doughnut id="chart" data={data} ref={chartRef} options={options} onClick={e => onClick(e)} width={400}/>
                    <p>{310 + 420 + salt}</p>
                </div> }
                { isMobile && <ul className="education__info">
                    {eduInfo1}
                    {eduInfo2}
                    {eduInfo3}
                </ul>}
                { !isMobile && <ul className="education__info">
                    {eduInfo === 0 && eduInfo0}
                    {eduInfo === 1 && eduInfo1}
                    {eduInfo === 2 && eduInfo2}
                    {eduInfo === 3 && eduInfo3}
                </ul>}
            </motion.div>
        </>
    );
  }
  
  export default Education;
