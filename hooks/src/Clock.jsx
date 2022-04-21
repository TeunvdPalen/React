//import React, { useState, useEffect } from 'react';
import useClock from './hooks/UseClock'


function Clock() {

    const time = useClock();

    return <p>
        {time}
    </p>
}
/* 
    const [time, setTime] = useState(Date)
 
 
    //elke seconde wil ik mijn state variabele van time laten updaten
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(Date);
        }, 1000)
 
        //interval blijft in het geheugen van js zitten, waardoor je browser zal crashen. Elke keer als je de clock wijzigt, moet je de timervariabele clearen
        //als je component verwijderd wordt, wordt de return uitgevoerd
        return () =>
            clearTimeout(timer)
 
    }, [])
 
    return <p>
        {time}
    </p>
}
*/

export default Clock;

