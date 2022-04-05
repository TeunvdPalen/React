import React from "react";
import { connect } from "react-redux";

function Count({totalCount}) {
	return (
		<p>{totalCount}4 todo items</p>
	)
}

const mapStateToProps = state => {
	return {
		totalCount: state.todos.length
	}
}

export default connect(mapStateToProps, null)(Count)