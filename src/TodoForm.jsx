import { useRef } from "react";
import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef("");
  const [workingTodoTitle, updateWorkingTodo] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();

    if (workingTodoTitle.trim() === "") {
      alert("Please add a todo list item");
      return;
    }

    onAddTodo(workingTodoTitle);
    updateWorkingTodo("");
    todoTitleInput.current.focus();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => {
          updateWorkingTodo(event.target.value);
        }}
      />
      <button type="submit" disabled={workingTodoTitle.trim() === ""}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
