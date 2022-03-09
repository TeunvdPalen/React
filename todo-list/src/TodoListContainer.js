import TodoList from './TodoList'
import TodoInput from './TodoInput'
import TodoFooter from './TodoFooter'

function TodoListContainer() {

	const todoItems = [
		{content:'Task 1', completed: false},
		{content:'Task 2', completed: false},
		{content:'Task 3', completed: true},
		{content:'Task 4', completed: true},
		{content:'Task 5', completed: false},
	]
	return (
		<div className="TodoListContainer">
			<TodoInput />
			<TodoList item={todoItems} />
			<TodoFooter />
		</div>
	)
}

export default TodoListContainer