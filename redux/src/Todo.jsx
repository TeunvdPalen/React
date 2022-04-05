import React from "react";

function Todo({ onClick, text, completed}) {
	return (
		<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : '' }}>
			{text}
		</li>
	)
}

export default Todo