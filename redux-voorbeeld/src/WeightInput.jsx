import {useState} from 'react'
import {connect} from 'react-redux'
import {addWeight} from './redux/actions'

function WeightInput({onSave}) {
	const [input, setInput] = useState('')

	const onClick = () => {
		onSave(input)
		setInput('')
	}

	return <div>
		Weight in kg: <input value={input} onChange={(e) => setInput(e.target.value)} />
		<button onClick={onClick}>Add weight</button>
	</div>
}

const mapDispatchToProps = (dispatch) => {
	return { onSave: (weight) => dispatch(addWeight(weight))}
}

export default connect(null, mapDispatchToProps)(WeightInput)