import MoodSelect from "./MoodSelect";
import "./CSS/Mood.css"


function Mood({setMood}) {
    return (
        <div className="mood-select">
            <h1>How are we feeling today?</h1>
            <ul className="mood-select-list">
              <MoodSelect text={<p>Relaxed</p>} name={"dot relaxed"} setMood={setMood} moodName={"relaxed"}/>
              <MoodSelect text={<p>Sleepy</p>} name={"dot sleepy"} setMood={setMood} moodName={"sleepy"}/>
              <MoodSelect text={<p>Focused!</p>} name={"dot focused"} setMood={setMood} moodName={"focused"} />
            </ul>
        </div>
    );
  }
  
  export default Mood;