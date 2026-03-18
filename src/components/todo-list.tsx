import { useState } from "react";
import { Input } from "./input";


interface TodoListProps {
  id: string;
  todo: string;
  completed: boolean;
}
export const TodoList = () => {
  const [todos, setTodos] = useState<TodoListProps[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now().toString(), todo: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
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
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-8 w-full justify-between ">
            <button
              className={`${todo.completed ? "line-through text-gray-500" : ""} `}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.todo}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
