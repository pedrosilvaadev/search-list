import { Input } from "./input";
import { useTodoList } from "../hook/useTodoList";

export const TodoList = () => {
  const { todos, newTodo, setNewTodo, addTodo, removeTodo, toggleTodo } =
    useTodoList();

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
