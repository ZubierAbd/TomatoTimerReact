import React from 'react'

const TopBar = ({ setTimer, setOn, setSetting }) => {

    const setTime = setTimer
    return (
        <div className="ten-cols">
            <ul>
                <li>
                    <button className="button" onClick={() => { setTime(25 * 60); setOn(true); setSetting('25') }}>Pomodoro</button>
                </li>
                <li>
                    <button className="button" onClick={() => { setTime(5 * 60); setOn(true); setSetting('5') }} >Short Break</button>
                </li>
                <li>
                    <button className="button" onClick={() => { setTime(10 * 60); setOn(true); setSetting('10') }}>Long Break</button>
                </li>
            </ul>
        </div>
    )
}

export default TopBar
