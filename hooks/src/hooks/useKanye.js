import { useState, useEffect } from 'react'
function useKanye() {
    const [quote, setQuote] = useState('');
    //defaultwaarde is lege string
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadQuote();
        //document.title veranderen naar de quote die ingeladen is
        //hij zal de titel pas veranderen als de load wordt gedaan

    }, [])
    const loadQuote = () => {
        setLoading(true)
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(res => {
                setQuote(res.quote)
                setLoading(false)
            });
    }
    return [quote, loading, loadQuote]
}

export default useKanye