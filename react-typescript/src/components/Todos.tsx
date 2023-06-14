import React, { FC, useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./Todo";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

type TodosProps = {};

const Todos: FC<TodosProps> = (props) => {
  const items = useContext(TodosContext).items;

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
