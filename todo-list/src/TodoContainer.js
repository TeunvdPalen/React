import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

class TodoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todoItems: []
    }
  }

  handleAddTodo = (text) => {
    this.setState(({todoItems}) => ({
      todoItems: [...todoItems, {
        text: text,
        completed: false
      }]
    }))
  }

  handleDeleteTodo = (todoItem) => {
    this.setState((state) => {
      let index = state.todoItems.indexOf(todoItem)
      const newlist = state.todoItems.filter((item, i) => i !== index )
      return {
        todoItems: newlist
      }
    })
  }

  handleClearTodos = () => {
    this.setState({
      todoItems: []
    })
  }

  handleClearCompleted = () => {
    this.setState((state) => {
      const newList = state.todoItems.filter((item) => !item.completed)
      return {
        todoItems: newList
      }
    })
  }

  handleCompleteTodo = (todoItem) => {
    this.setState((state) => {
      let index = state.todoItems.indexOf(todoItem)
      const newList = state.todoItems.map((item, i) => {
        if (i === index) item.completed = !item.completed
        return item
      })
      return {
        todoItems: newList
      }
    })
  }

  render() {
    return (
      <div className="TodoListContainer">
        <TodoInput onSubmit={this.handleAddTodo} />
        <TodoList 
          onComplete={this.handleCompleteTodo} 
          onDelete={this.handleDeleteTodo} 
          list={this.state.todoItems} 
        />
        <TodoFooter 
          onClearCompleted={this.handleClearCompleted} 
          onClearAll={this.handleClearTodos} 
        />
      </div>
    )
  }
}

export default TodoContainer