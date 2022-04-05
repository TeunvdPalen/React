import React from "react";

function Link({ onClick, active, children}) {
	return (
		<button onClick={onClick} disabled={!active}>
			{children}
		</button>
	)
}

export default Link