function TodoListItem({ item, onCompleteTodo }) {
  return (
    <li>
      <form>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => onCompleteTodo(item.id)}
        />
        {item.title}
      </form>
    </li>
  );
}

export default TodoListItem;
