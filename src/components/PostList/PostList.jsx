import React from "react";
import { useRequest } from "../../hooks/useRequest";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

import "./PostList.css";

export const PostList = () => {
  const { data, isLoading, setData } = useRequest(`posts`);
  const { register, handleSubmit } = useForm();

  const addNewPost = (values) => {
    const newPost = {
      id: data.length + 1,
      title: values.name,
      body: values.description,
    };
    setData([...data, newPost]);
  };

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <ul>
      <form onSubmit={handleSubmit(addNewPost)}>
        <input {...register("name")} />
        <input {...register("description")} />
        <Button type="submit">Add</Button>
      </form>
      {data.map((item) => (
        <li key={item.id} className="list-item">
          <span className="name">{item.title}</span>:
          <span className="body">{item.body}</span>
        </li>
      ))}
    </ul>
  );
};
