import { useState } from 'react';


function AppHooks() {

    const [visible, setVisible] = useState(false);
    // eerste variabele is een en tweede een functie
    const [input, setInput] = useState('');

    return <div>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>

        {visible && <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <p> This is just some text: {input}</p>
        </div>}

    </div >

}

export default AppHooks;