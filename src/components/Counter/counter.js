import React from 'react'
import "./counter.css";

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { days=0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[dys, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);
    

    const tick = () => {
   
        if (dys==0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([dys, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dys, hrs, mins - 1, 59]);
        } else {
            setTime([dys, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div >
            <p className='timr'>{`${dys.toString().padStart(2, '0')} ${hrs.toString().padStart(2, '0')} ${mins.toString().padStart(2, '0')} ${secs.toString().padStart(2, '0')}`}</p> 
            <p className='tt'>&nbsp;&nbsp;&nbsp;<span>Days</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Hours</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Minutes</span>&nbsp;&nbsp;<span>Seconds</span></p>
        </div>
    );
}

export default CountDownTimer;