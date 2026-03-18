import { useState } from "react";

interface TodoListProps {
  id: string;
  todo: string;
  completed: boolean;
}

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodoListProps[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const localStorageKey = "todoList";

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem: TodoListProps = {
        id: Date.now().toString(),
        todo: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      localStorage.setItem(
        localStorageKey,
        JSON.stringify([...todos, newTodoItem]),
      );
    }
  };

  const removeTodo = (id: string) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
    localStorage.setItem(localStorageKey, JSON.stringify(updateTodos));
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedTodos));
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
