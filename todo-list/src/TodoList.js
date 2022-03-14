import TodoItem from './TodoItem';
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <div>
		    {this.props.list.map((item, index) => {
          return <TodoItem onComplete={this.props.onComplete} onDelete={this.props.onDelete} item={item} key={index} />
        })}
      </div>
    )
  }
}

export default TodoList;