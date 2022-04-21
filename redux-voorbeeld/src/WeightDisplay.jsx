import {connect} from 'react-redux'
import { removeWeight } from './redux/actions'

function WeigthDisplay({weight, length, onRemove, index}) {
	const bmi = Math.floor((weight / (length * length)) * 100) /100

	return <li>
		{weight} (bmi: {bmi}) <button onClick={() => onRemove(index)}>remove</button>
	</li>
}

const mapStateToProps = state => {
	return {
		length: state.length
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onRemove: (index) => dispatch(removeWeight(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeigthDisplay)