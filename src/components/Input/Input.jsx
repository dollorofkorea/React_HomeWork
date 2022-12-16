import React, { useState } from "react";
import style from "./style.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();

    //지금 세팅된 title과 contents를 todos에 넣어주는 작업
    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <section className={style.input}>
        <form onSubmit={handleSubmitClick}>
          <label for="title">제목 : </label>
          <input id="title" value={title} onChange={handleTitleChange} />
          <label for="contents">내용 : </label>
          <input
            id="contents"
            value={contents}
            onChange={handleContentsChange}
          />
          <button className={style.button}>추가하기</button>
        </form>
      </section>
    </div>
  );
}
