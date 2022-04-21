import {useState} from 'react'
import {connect} from 'react-redux'
import {setLength} from './redux/actions'

function LengthInput({onSave}) {
	const [input, setInput] = useState('')

	const onClick = () => {
		onSave(input)
		setInput('')
	}

	return <div>
		Length in m: <input value={input} onChange={(e) => setInput(e.target.value)} />
		<button onClick={onClick}>Save</button>
	</div>
}

const mapDispatchToProps = (dispatch) => {
	return { onSave: (length) => dispatch(setLength(length))}
}

export default connect(null, mapDispatchToProps)(LengthInput)