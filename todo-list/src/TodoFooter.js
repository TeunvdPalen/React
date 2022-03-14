import React from "react";

class TodoFooter extends React.Component {
  render() {
    return (
      <div className="TodoFooter">
        <button onClick={this.props.onClearCompleted}>Clear completed</button>
        <button onClick={this.props.onClearAll}>Clear all</button>
      </div>
    )
  }
}

export default TodoFooter;