import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar'

function App() {

  const [mins, setMins] = useState('25')
  const [seconds, setSeconds] = useState('00')
  const [time, setTime] = useState(1 * 60);
  const [isOn, setOn] = useState(false)

  /**Function tick which dictates what we are doing every tick of the clock */
  const tick = () => {

    setTime(prevCount => prevCount - 1)
    //Decrementing previous value in seconds by 1 
    let mins = convertToMins(time);
    //Converting seconds to mins
    if (mins < 10) {
      mins = "0" + mins
    }
    setMins(mins + "")
    let seconds = convertToSeconds(time)
    //Converting seconds to values between 0 and 60
    if (seconds <= 0) {
      seconds = "0" + seconds
    }
    setSeconds(seconds + "")

  }

  /**Functions to convert to Mins and Seconds */
  const convertToMins = (s) => {
    return Math.floor(s / 3600)
  }

  const convertToSeconds = (time) => {
    return time % 60
  }


  useEffect(() => {
    setTimeout(() => {
      if (time >= 0 && isOn) {
        tick()
      }
    }, 1000)

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
        <section>
          <div className="control-buttons">
            <ul>
              <li>
                <button id="start" className="button" onClick={() => { setOn(true) }}>Start</button>
              </li>
              <li>
                <button id="stop" className="button" onClick={() => { setOn(false) }} >Stop</button>
              </li>
              <li>
                <button id="reset" className="button" onClick={() => { setTime(0) }}>Reset</button>
              </li>
            </ul>
          </div>

        </section>
      </div>

    </div>
  );
}

export default App;
