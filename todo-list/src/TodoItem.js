import React from "react";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let className = "TodoItem"; 
    if (this.props.item.completed) {
      className += ' completed'
    }

    return (
      <div className={className}>
        <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.onComplete(this.props.item)} />
        <span>{this.props.item.text}</span>
        <button onClick={() => this.props.onDelete(this.props.item)}>Delete item</button>
      </div>
    )
  }
}

export default TodoItem;