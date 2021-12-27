import React from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

export const UserPosts = () => {
  const { userId } = useParams();

  const { data, isLoading } = useRequest(`users/${userId}/posts`);

  data.find((post) => post.id === Number(userId));

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id} className="list-item">
          <span>{post.id}</span>.<span className="name">{post.title}</span>:
          <span>{post.body}</span>
        </li>
      ))}
    </ul>
  );
};
