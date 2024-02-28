import { Form, TodoList } from "components";
import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem("todos");
    if (savedTodos !== null) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const deleteTodos = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <Form onSubmit={addTodos} />

      <TodoList array={todos} onDelete={deleteTodos} />
    </>
  );
};

{
  /* <Text textAlign="center">There are no any todos ...</Text>; */
}
