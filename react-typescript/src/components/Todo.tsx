import React, { FC, MouseEvent, useContext } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

type TodoProps = {
  todo: Todo;
};

const TodoItem: FC<TodoProps> = (props) => {
  const onRemoveTodo = useContext(TodosContext).removeTodo;

  const removeHandler = (e: MouseEvent) => {
    e.preventDefault();

    onRemoveTodo(props.todo.id);
  };

  return (
    <li className={classes.item} onClick={removeHandler}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
