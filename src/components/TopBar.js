import React from 'react'

const TopBar = ({ setTimer }) => {

    const setTime = setTimer
    return (
        <div className="ten-cols">
            <ul>
                <li>
                    <button className="button" onClick={() => { setTime(25 * 60) }}>Pomodoro</button>
                </li>
                <li>
                    <button className="button" onClick={() => { setTime(5 * 60) }} >Short Break</button>
                </li>
                <li>
                    <button className="button" onClick={() => { setTime(10 * 60) }}>Long Break</button>
                </li>
            </ul>
        </div>
    )
}

export default TopBar
