import { ADD_WEIGHT, REMOVE_WEIGHT, SET_LENGTH } from "./actions"

const intitialStore = {
	length: 1.85,
	weights: [
		71,
		72,
		73,
		74,
		75
	]
}

function bmiApp(state=intitialStore, action) {
	if (action.type === SET_LENGTH) {
		return {
			...state,
			length: action.length
		}
	}

	if (action.type === ADD_WEIGHT) {
		return {
			...state,
			weights: [
				...state.weights,
				action.weight
			]
		}
	}

	if (action.type === REMOVE_WEIGHT) {
		return {
			...state,
			weights: state.weights.filter((item, itemIndex) => itemIndex !== action.index)
		}
	}

	return state
}

export default bmiApp