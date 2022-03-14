import React from 'react'

class TodoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleKeydown = (e) => {
    if (e.keyCode === 13 && this.state.inputText.length) {
      this.props.onSubmit(this.state.inputText)
      this.resetInput()
    }
  }

  resetInput = () => {
    this.setState({
      inputText: ''
    })
  }

  render() {
    return (
      <input 
        value={this.state.inputText}
        onChange={this.handleChange}
        onKeyDown={this.handleKeydown}
        className="TodoInput" type="text" placeholder="Type new todo" />
    )
  }
}

export default TodoInput