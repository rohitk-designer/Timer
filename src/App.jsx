import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [sec, setSec] = useState(0);
  useEffect(() => {
    let timer = null;
    if (start) {
      timer = setInterval(() => {
        setSec((sec) => sec + 1);
      } ,1000);
    } 
    return ()=>{
      clearInterval(timer)
    }
    
  },[start, stop]);

  
  const StopWatch=()=>{
      setStart(false)
      setStop(true)
  }
  const Resumewatch =()=>{
    setStart(true)
  }
  const  Restartwatch =()=>{
    setSec(0)
    setStart(true)
  } 

  const updatedata = () => {
    let mintue =Math.floor(sec/60)
    let hours =Math.floor(mintue/60)
    let secs = sec%60
    let mins = mintue%60
    return `${String(hours).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`

  };

  return (
    <>
      <div
        style={{
          borderRadius: "20px",
          background: "lightgray",
          boxShadow: "0px 0px 4px 5px gray",
          paddingBottom: "10px",
        }}>
        <div>
          <h1>{updatedata()}</h1>
        </div>
        <div>
          <button style={{ margin: "5px" }} onClick={() => setStart(true)}>
            Start
          </button>
          <button style={{ margin: "5px" }} onClick={()=>StopWatch()}>Stop</button>
          <button style={{ margin: "5px" }} onClick={()=>Resumewatch()}>Resume</button>
          <button style={{ margin: "5px" }} onClick={()=>Restartwatch()}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default App;
