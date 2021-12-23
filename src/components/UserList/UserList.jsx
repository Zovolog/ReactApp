import React from "react";
import { useRequest } from "../../hooks/useRequest";
import { Link } from "react-router-dom";
import "./UserList.css";

export const UserList = () => {
  const { data, isLoading } = useRequest(`users`);

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id} className="list-item">
          <Link to={`/user-profile/${user.id}`}>{user.username}</Link>
        </li>
      ))}
    </ul>
  );
};
