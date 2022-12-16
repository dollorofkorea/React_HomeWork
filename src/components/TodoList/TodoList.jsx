import React from "react";
import Todo from "../Todo/Todo";
import style from './style.module.css';

export default function TodoList({ todos, isActive, setTodos }) {
  return (
    <div className={style.todolist}>
      <h4>{isActive === true ? "해야할 것" : "완료된 것"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos} />;
        })}
    </div>
  );
}
