import { FC, createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, "Learn React"),
    new Todo(2, "Learn Typescript"),
  ]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat(new Todo(Math.floor(Math.random() * 100), text))
    );
  };

  const onRemoveTodo = (id: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((t) => t.id !== id);
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider
      value={{
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: onRemoveTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
