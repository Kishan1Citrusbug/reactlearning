import React,{useState,useEffect} from "react";


export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
      let interval = null;
    if (isActive && isStopped === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isStopped]);
  
  useEffect(() => {
    console.log("timeout called")
    const timeout = setTimeout(() => {
      setIsActive(!isActive)
      setTime(0);
    }, 5000);
    return () => {
      clearTimeout(timeout)
    }
  },[isActive])
  const handleStart = () => {
    setIsActive(true);
    setIsStopped(false);
  };
  
  const handlePauseResume = () => {
    setIsStopped(!isStopped);
  };
  
  return <div><h1 > {time} </h1>
    <button onClick={handleStart} >start</button>  
    <button onClick={handlePauseResume} >stop</button>  
    </div>
}