import { useState } from "react";
import { addTodo } from "./redux/actions";
import {connect} from 'react-redux'

function AddTodo({addTodo}) {

	const [input, setInput] = useState('')

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(input)
		setInput('')
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
				<button type="submit">Add todo</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		addTodo: text => dispatch(addTodo(text))
	}
}

export default connect(null, mapDispatchToProps())(AddTodo)