import React, { useState, useEffect } from 'react';

function useKanye() {
	const [quote, setQuote] = useState('')
	const [loading, setLoading] = useState(false)

	// componentDidMount => 1 keer in het begin
	useEffect(() => {
		loadQuote()
	}, [])

	// componentDidUpdate => elke keer qls waarde van quote veranderd
	useEffect(() => {
		document.title = quote
	}, [quote]);

	const loadQuote = () => {
		setLoading(true)
		fetch('https://api.kanye.rest/')
			.then(res => res.json())
			.then(data => {
				setQuote(data.quote)
				setLoading(false)
			});
	}

	return [quote, loading, loadQuote]
}

export default useKanye