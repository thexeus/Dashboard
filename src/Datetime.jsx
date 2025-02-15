import { useState, useEffect } from "react";

function Datetime() {
    const [time, setTime] = useState(getTime());
    const [dayDate, setDayDate] = useState(getDayDate());

    function getTime() {
        return new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    }

    function getDayDate() {
        return new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
            setDayDate(getDayDate());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="datetime-widget">
            <h2>{time}</h2>
            <h3>{dayDate}</h3>
        </div>
    );
}

export default Datetime;
