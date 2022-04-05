import {
	ADD_TODO,
	SET_VISIBILITY_FILTER,
	TOGGLE_TODO,
	VisibilityFilters
} from './actions'

const initalState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: [{
		text: 'test',
		completed: false,
	}]
}

function todoApp(state=initalState, action) {
	if (action.type === ADD_TODO) {
		return {
			...state,
			todos: [
				...state.todos, {
					text: action.text,
					completed: false
				}
			]
		}
	}

	if (action.type === TOGGLE_TODO) {
		return {
			...state,
			todos: state.todos.map((todo, i) => {
				if (i === action.index) {
					todo.completed = !todo.completed
				}
				return todo
			})
		}
	}

	if (action.type === SET_VISIBILITY_FILTER) {
		return {
			...state,
			visibilityFilter: action.filter
		}
	}

	return state
}

export default todoApp