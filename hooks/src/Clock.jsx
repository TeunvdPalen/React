import useClock from "./hooks/useClock"

function Clock() {

	const time = useClock()

	return <div>
		{time}
	</div>
}

export default Clock