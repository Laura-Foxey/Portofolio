import MoodSelect from "./MoodSelect";
import "./CSS/Mood.css"

function Mood({setMood}) {

  const bg = ["#ff8e38", "#3c245f", "#201148"];

    return (
        <div className="mood-select">
            <h1>How are we feeling today?</h1>
            <ul className="mood-select-list">
              <MoodSelect text={<p>Relaxed</p>} name={"dot relaxed"} setMood={setMood} moodName={"relaxed"} bg={bg[0]} />
              <MoodSelect text={<p>Sleepy</p>} name={"dot sleepy"} setMood={setMood} moodName={"sleepy"} bg={bg[1]} />
              <MoodSelect text={<p>Focused!</p>} name={"dot focused"} setMood={setMood} moodName={"focused"} bg={bg[2]} />
            </ul>
        </div>
    );
  }
  
  export default Mood;