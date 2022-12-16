import React, { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import style from "./App.module.css";

export default function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>ToDoList _ React</Header>

      <main className={style.main}>
        {/* 여기는 component의 input이 들어갈 자리입니다. */}
        <Input setTodos={setTodos} />
        {/* 여기는 TodoList가 들어갈 자리입니다.  */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
      <footer>ToDoList 혼자 만들기 (여기는 footer입니다)</footer>
    </div>
  );
}

const initialState = [
  {
    title: "제목1",
    contents: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목2",
    contents: "내용2",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목3",
    contents: "내용3",
    isDone: true,
    id: uuidv4(),
  },
];
