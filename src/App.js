import './App.css';
import React, { useState, useEffect } from 'react';
import getData from "./api/data";

const App = () => {
  const [dateTime, setDateTime] = useState();
  const [time, setTime] = useState();
  
  useEffect(() => {
    setInterval(() => {
      getData().then(data => {
        // console.log(data[data.length-1].updated_at.split(" ")[1]);
        // console.log(data);
        setDateTime(new Date(data[data.length-1].updated_at));
        setTime(data[data.length-1].updated_at.split(" ")[1]);
      });
    }, 500);
  }, []);

const msToTime = (duration) => {
  let milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

  return (
    <div className="App">
      <h1>When was the last time I drank?</h1>
      <h2 className="clock">{time ? time : '00:00:00'}</h2>
      <h2>How long since I last drink?</h2>
      <h2 className="clock">{dateTime ? msToTime(new Date() - dateTime) : '00:00:00'}</h2>
    </div>
  );
}

export default App;
