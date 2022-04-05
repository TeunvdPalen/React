import React from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';
import { toggleTodo	} from './redux/actions'

function TodoList({todos, onClick}) {
	return (
		<ul>
			{todos.map((item, index) => {
				return <Todo 
					onClick={() => onClick(index)}
					key={index}
					text={item.text} 
					completed={item.completed}
				/>
			})}
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: index => dispatch(toggleTodo(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)