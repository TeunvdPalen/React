import { useState, useEffect } from 'react';

function useClock() {
	const [time, setTime] = useState(Date())

	useEffect(() => {
		let timer = setInterval(()=> setTime(Date()), 1000)
		return () => clearInterval(timer)
	})
	
	return time
}

export default useClock;