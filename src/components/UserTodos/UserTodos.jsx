import React from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
export const UserTodos = () => {
  const { userId } = useParams();

  console.log(userId);
  return <h1>Hello</h1>;
};
