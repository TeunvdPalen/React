import React, { useState, useEffect } from 'react';
import useKanye from './hooks/useKanye';
// niet alleen state maar ook effect inladen om 'mount' functie te kunnen gebruiken

//met useEffect kan je enkele dingen doen

function KanyeQuote() {

    const [quote, loading, loadQuote] = useKanye();
    return <div>
        <button onClick={loadQuote}>Load quote</button>

        {loading && <p>Loading...</p>}
        {!loading && <p>{quote}</p>}
        {/* als ik aan het laden ben kan ik een paragraaf 'loading' tonen. Als ik niet aan het laden ben dan kan ik mijn quote tonen */}
    </div>
}

/*  

const [quote, setQuote] = useState('');
//defaultwaarde is lege string
const [loading, setLoading] = useState(false);

// componentDidMount: 1 keer aan het begin
useEffect(() => {
    loadQuote();
    //document.title veranderen naar de quote die ingeladen is
    //hij zal de titel pas veranderen als de load wordt gedaan

}, [])

//componentDidUpdate -> elke keer als de waarde van quote verandert
useEffect(() => {
    document.title = quote
    //document.title veranderen naar de quote die ingeladen is
    //hij zal de titel pas veranderen als de load wordt gedaan

}, [quote])

const loadQuote = () => {
    setLoading(true)
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(res => {
            setQuote(res.quote)
            setLoading(false)
        });
}
return <div>
    <button onClick={loadQuote}>Load quote</button>

    {loading && <p>Loading...</p>}
    {!loading && <p>{quote}</p>}
    als ik aan het laden ben kan ik een paragraaf 'loading' tonen. Als ik niet aan het laden ben dan kan ik mijn quote tonen
</div >
  */

export default KanyeQuote



