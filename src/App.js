import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar'
import useSound from 'use-sound'
import Lakad from './LKMS.mp3'

function App() {

  const [mins, setMins] = useState('25')
  const [seconds, setSeconds] = useState('00')
  const [time, setTime] = useState(25 * 60);
  const [isOn, setOn] = useState(false)
  const [setting, setSetting] = useState('25');

  const [play] = useSound(Lakad);
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
    return Math.floor(s / 60)
  }

  const convertToSeconds = (time) => {
    return time % 60
  }

  /**Use Effect Hook. This requires a clean up function which takes care of the side effect we introduce. Everytime the tick function is called, whenever time or is on changes, 
   * we set up and remove the timeout exactly once. */
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isOn) {
        if (time > 0) {
          tick()
        } else if (time === 0) {
          play();
          setMins("00")
          setSeconds("00")
          setOn(false)
        }
      }
    }, 1000)


    return () => {
      clearTimeout(timeOut)
    }
  }, [time, isOn])

  /**Update time function I am giving so that time is changed immediately upon button click. Could make this more refined. */
  const updateTime = (time) => {
    let mins = convertToMins(time)
    let secs = convertToSeconds(time)
    setMins(mins)
    setSeconds(secs)
  }

  /**Reset time function  */
  const resetTime = () => {
    setTime(Number(setting) * 60);
    setOn(true)
  }

  return (
    <div>
      <Header title="Tomato Timer" />
      <div className="row">
        <section>
          <TopBar updateTime={updateTime} setTimer={setTime} setOn={setOn} setSetting={setSetting} />
        </section>
        <section>
          <div className="time">
            <h1> {mins} : {seconds}</h1>
            {/* <h2>{time}</h2> */}
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
                <button id="reset" className="button" onClick={() => { resetTime() }}>Reset</button>
              </li>
            </ul>
          </div>

        </section>
        <footer>
          <div className="footer">
            <p><strong>
              <a href="https://tomato-timer.com/"> Tomato Timer </a>
            </strong> is a great website for productivity. if you aren't familiar,
              the Pomodoro technique is a productivity technique. You block of 25 mins of uninterrupted work - then take a 5 min break and do it again. I have used it for multiple years whenever I want to do some coding or some writing and it works pretty well for me.
            This website is an homage to that site and an attempt for me to practice some React.</p>
          </div>
        </footer>
      </div>

    </div >
  );
}

export default App;
