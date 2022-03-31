import React, { useState, useEffect } from 'react';
import useClock from "./hooks/useClock"
import useKanye from './hooks/useKanye'

function KanyeQuote() {

	// const [quote, setQuote] = useState('')
	// const [loading, setLoading] = useState(false)
	const [quote, loading, loadQuote] = useKanye()
	const time = useClock()

	// // componentDidMount => 1 keer in het begin
	// useEffect(() => {
	// 	loadQuote()
	// }, [])

	// // componentDidUpdate => elke keer qls waarde van quote veranderd
	// useEffect(() => {
	// 	document.title = quote
	// }, [quote]);
	

	// const loadQuote = () => {
	// 	setLoading(true)
	// 	fetch('https://api.kanye.rest/')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setQuote(data.quote)
	// 			setLoading(false)
	// 		});
	// }
	return <div>
		<button onClick={loadQuote}>Load Quote</button>

		{loading && <p>Loading...</p>}
		{!loading && <p>{quote}</p>}

		<p>the time is {time}</p>
	</div>
}

export default KanyeQuote