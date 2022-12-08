import React, { useState } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    setInterval(setTime, 1000)

    return(
        <>
        <span>

        </span>
        </>
    )
};



export default Clock;