import React from "react";
import { useForm } from "react-hook-form";
import { useRequest } from "../../hooks/useRequest";
import { Button } from "../Button";

import "./TodoList.css";

export const TodoList = () => {
  const { data, isLoading, setData } = useRequest(`todos`);

  const { register, handleSubmit } = useForm();

  const changeStatus = (id) => {
    var newData = data.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setData(newData);
  };

  const addNewPost = (values, item, id) => {
    const newPost = {
      id: data.length + 1,
      title: values.taskName,
      completed: false,
    };
    setData([...data, newPost]);
  };

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <ul>
      <form onSubmit={handleSubmit(addNewPost)}>
        <input {...register("taskName")} />
        <Button type="submit">Add</Button>
      </form>
      {data.map((item) => (
        <li key={item.id} className="todo-list-item">
          <span className="id">{item.id}.</span>
          <span className="name">{item.title}</span>:
          <span className="status">{item.completed.toString()}</span>
          <button className="btn-status" onClick={() => changeStatus(item.id)}>
            Change
          </button>
        </li>
      ))}
    </ul>
  );
};
