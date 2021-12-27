import React from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

import "./UserTodos.scss";
export const UserTodos = () => {
  const { userId } = useParams();
  const { data, isLoading, setData } = useRequest(`users/${userId}/todos`);

  data.find((todo) => todo.id === Number(userId));

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  const changeStatus = (id) => {
    var newData = data.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setData(newData);
  };

  return (
    <ul className="todo-list">
      {data.map((todo) => (
        <li key={todo.id} className="todo-list-item">
          <span className="id">{todo.id}</span>.
          <label htmlFor={todo.id}>
            <input
              type="checkbox"
              onChange={() => changeStatus(todo.id)}
              value={todo.completed}
              className="point"
              id={todo.id}
            />
            <span className={todo.completed ? "bt-active" : "bt"}></span>
          </label>
          <span className={todo.completed ? "todo-name-done" : "todo-name"}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
