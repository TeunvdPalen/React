import TodoItem from './TodoItem';

function TodoList({items}) {
  return (
    <div>
      {items.map(item => <TodoItem item={item} />)}
    </div>
  )
}

export default TodoList;