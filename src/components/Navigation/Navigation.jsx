import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/posts">PostList</Link>
          </li>
          <li>
            <Link to="/todo-list">TodoList</Link>
          </li>
          <li>
            <Link to="/user-list">UserList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
