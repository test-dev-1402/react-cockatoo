import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onCompleteTodo }) {
  const filteredTodoList = todoList.filter((item) => !item.isCompleted);
  return (
    <>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              item={todo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
