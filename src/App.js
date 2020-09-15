import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar'

function App() {

  const [mins, setMins] = useState('25')
  const [seconds, setSeconds] = useState('00')
  const [time, setTime] = useState(1 * 60);


  const tick = () => {

    setTime(prevCount => prevCount - 1)
    let mins = convertToMins(time);
    if (mins < 10) {
      mins = "0" + mins
    }
    setMins(mins + "")
    let seconds = convertToSeconds(time)
    if (seconds <= 0) {
      seconds = "0" + seconds
    }
    setSeconds(seconds + "")

  }

  const convertToMins = (s) => {
    return Math.floor(s / 3600)
  }

  const convertToSeconds = (time) => {
    return time % 60
  }


  useEffect(() => {

    setTimeout(() => {
      tick();
    }, 1000)

    return () => {
    }
  }, [time])


  return (
    <div>
      <Header title="Tomato Timer" />
      <div className="row">
        <section>
          <TopBar setTimer={setTime} />
        </section>
        <section>
          <div className="time">
            <h1> {mins} : {seconds}</h1>
            <h2>{time}</h2>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
