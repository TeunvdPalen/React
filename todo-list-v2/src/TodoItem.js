
const {content, completed} = item

function TodoItem() {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={completed}/>
      <span>{content}</span>
      <button>Delete item</button>
    </div>
  )
}

export default TodoItem;