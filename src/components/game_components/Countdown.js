import React, { useEffect, useState }  from 'react';


function Countdown () {


    const [timeUntilNextDaydream, setTimeUntilNextDaydream] = useState("");

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;



    useEffect(() => {
        const interval = setInterval(() => {

            const todayTimestamp = new Date();
            let tomorrowDay = new Date();
            tomorrowDay = new Date(todayTimestamp.getFullYear(), todayTimestamp.getMonth(), todayTimestamp.getDate()+1);
            var dateDiff = tomorrowDay - todayTimestamp;

            if (dateDiff > 0) {

                var hours = Math.floor((dateDiff % _day) / _hour);
                var minutes = Math.floor((dateDiff % _hour) / _minute);
                var seconds = Math.floor((dateDiff % _minute) / _second);

                setTimeUntilNextDaydream(String(hours).padStart(2, '0')+":"+String(minutes).padStart(2, '0')+":"+String(seconds).padStart(2, '0'));

            } else {
                setTimeUntilNextDaydream("Reload the page");
            }

        }, 100);
        return () => clearInterval(interval);
    }, []);




    return (
        <div className="countdown">
            Next Daydream:
            <br/>
            <span className="countdownCounter">
                {timeUntilNextDaydream}
            </span>
            <br/>
            <span className="countdown-announcement">
            An exciting new feature is launching on Monday..
            </span>

        </div>
         );
}

export default Countdown;