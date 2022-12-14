import './App.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Routing from './components/Routing';
import { useState, useEffect } from 'react';
import Mood from './components/Mood';

function App() {
	const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(true);

	const headTag = document.getElementsByTagName('head')[0];
  const styleTag = document.createElement("style");

  useEffect(() => {
    const selectMood = () => {
      if ( mood === 'focused') {
        styleTag.innerHTML = `
          :root {
            --background-color: #201148;
            --dark-color: #2011a2;
            --light-color: #55e7ff;
            --contrast-color: #ff34b3;
          }
  
          .color-recolor {
            filter: invert(73%) sepia(71%) saturate(1833%) hue-rotate(169deg) brightness(108%) contrast(117%);
          }
    
          .contrast-recolor {
            filter: invert(34%) sepia(38%) saturate(4081%) hue-rotate(301deg) brightness(101%) contrast(101%);
          }
          `;
      }
      if (mood === 'relaxed') {
        styleTag.innerHTML = `
        :root {
          --background-color: #ff8121;
          --dark-color: #f27928;
          --light-color: #ffc94a;
          --contrast-color: #38ff8e;
        }
  
        .color-recolor {
          filter: invert(92%) sepia(32%) saturate(2939%) hue-rotate(317deg) brightness(99%) contrast(102%);
        }
  
        .contrast-recolor {
          filter: invert(75%) sepia(72%) saturate(451%) hue-rotate(81deg) brightness(102%) contrast(102%);
        }
        `;
      }
      if (mood === 'sleepy') {
        styleTag.innerHTML = `
        :root {
          --background-color: #3c245f;
          --dark-color: #3c245f;
          --light-color: #9a82bf;
          --contrast-color: #b54a4e;
        }
  
        .color-recolor {
          filter: invert(68%) sepia(92%) saturate(1079%) hue-rotate(203deg) brightness(79%) contrast(85%);  
        }
  
        .contrast-recolor {
          filter: invert(29%) sepia(15%) saturate(5730%) hue-rotate(325deg) brightness(102%) contrast(73%);
        }
        `;
      }
      if (!mood) {
        return;
      };
      headTag.appendChild(styleTag);
      setLoading(false);
    }
  
    selectMood();
  }, [mood, headTag, styleTag])


	if (!mood) return (<Mood setMood={setMood} />)
  if (loading) return (<p>Loading...</p>)

	return (
	<BrowserRouter>
		<Navbar /> 
		<div className='grid'>
			<Routing mood={mood}/> 
		</div> 
	</BrowserRouter>
  );
}

export default App;
