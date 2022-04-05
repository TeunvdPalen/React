import React from "react";
import Link from "./Link";


function FilterLink({ onClick, children, active}) {
	return (
		<Link onClick={onClick} active={true}>
			{children}
		</Link>
	)
}

export default FilterLink