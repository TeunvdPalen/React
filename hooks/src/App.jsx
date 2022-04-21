import { useState } from 'react';


function App() {

    const [visible, setVisible] = useState(false)
    // eerste variabele is een en tweede een functie

    return <div>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>

        {true && <p>
            This is just some <textarea name="" id="" cols="30" rows="10"></textarea></p>}

    </div>

}

export default App;