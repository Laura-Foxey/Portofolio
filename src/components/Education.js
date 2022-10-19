import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import { useRef, useState } from 'react';
import { motion} from "framer-motion"
import "./CSS/Education.css"
import pointer from '../images/pointer.png'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function Education({direction}) {
    const [eduInfo, setEduInfo] = useState(0);
    const today = Date.parse(new Date());
    const salt = Math.ceil((Date.parse('02 May 2022 00:00:00 GMT') - today) / (1000 * 60 * 60 * 24) * -1)
    const data = {
        datasets: [{
            data: [310, 420, salt],
            backgroundColor: ['#96ceff', '#2011a2', '#ff34b3', '#f7a35b', '#8286e9'],
            borderColor: '#55e7ff',
            hoverOffset: 10,
            },
        ],
        labels: [
            'Self-Taught',
            '42 Wolfsburg',
            'Salt Stockholm'
        ],      
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
    <div>
        <h3>Online classes (2020-2021)</h3>
        <h4>All passions start out as curiosities. Mine began as exploring the unknown and gaining knowledge through various platforms. </h4>
        <h4>New skills unlocked: HTML, CSS, Python, Unity. </h4>
    </div>

    const eduInfo2 = 
    <div>
        <h3>42 Wolfsburg (2021-2022)</h3>
        <h4>After a month of trial, acepted into a wide-spread school to learn programming at my own pace. </h4>
        <h4>New skills unlocked: VSC, Mac, C. </h4>
    </div>

    const eduInfo3 = 
    <div>
        <h3 className='remove-border-bottom'>Salt Sthlm</h3>
        <h3>(2022-present)</h3>
        <h4>All good knowledge needs a solid foundation, and Salt helped me build mine through three months of intensive coding. </h4>
        <h4>New skills & level ups: C#, HTML, CSS, Javascript, VSC. </h4>
    </div>

    const eduInfo0 = 
    <div>
        <br/>
        <h4>Click a doghnut section to learn more! </h4>
        <img src={pointer} alt="pointer-arrow"/>
    </div>
    
    return (
        <motion.div className="education template"
        initial= {{x: direction > 0 ? -100: 100}}
        animate={{x: 0, opacity: 1}}
        >
            <div className="donut">
                <Doughnut id="chart" data={data} ref={chartRef} onClick={e => onClick(e)} width={400} padding={10}/>
                <p>Total: {310 + 420 + salt} days</p>
            </div>
            <ul className='mobile-education-info'>
                <li>{eduInfo1} </li>
                <li>{eduInfo2}</li>
                <li>{eduInfo3}</li>
            </ul>
            <div className="education-info">
                {eduInfo === 0 && eduInfo0}
                {eduInfo === 1 && eduInfo1}
                {eduInfo === 2 && eduInfo2}
                {eduInfo === 3 && eduInfo3}
            </div>
        </motion.div>
    );
  }
  
  export default Education;
