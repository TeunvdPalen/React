import React from "react";
import AddTodo from "./AddTodo";
import Count from "./Count";
import TodoList from "./TodoList";

function App() {
	return (
		<div>
			<h1>Todo List</h1>
			<AddTodo />
			<TodoList />
			<Count />
		</div>
	)
}

export default App