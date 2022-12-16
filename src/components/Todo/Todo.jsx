import React from "react";
import style from "./style.module.css";

export default function Todo({ item, isActive, setTodos }) {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div key={item.id} className={style.todo}>
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwitchButtonClick} className={style.button}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
}
