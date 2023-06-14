import { FC, FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
type NewToDoProps = {};

const NewTodo: FC<NewToDoProps> = (props) => {
  const addTodoHandler = useContext(TodosContext).addTodo;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = toDoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    addTodoHandler(enteredText);
  };

  const toDoTextRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={toDoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
