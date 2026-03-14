import { useState } from "react";
import { Input } from "./input";

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos[index];
    updatedTodos[index] = todo.startsWith("✓ ") ? todo.slice(2) : "✓ " + todo;
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-100 mx-auto">
      <h1>Todo List</h1>
      <div className="flex gap-2 w-full justify-between">
        <Input
          value={newTodo}
          handleChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo"
        />

        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="w-full border-t pt-4 mt-4 flex flex-col gap-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex gap-8 w-full justify-between ">
            <button
              className={`${todo.startsWith("✓ ") ? "line-through text-gray-500" : ""} `}
              onClick={() => toggleTodo(index)}
            >
              {todo}
            </button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
