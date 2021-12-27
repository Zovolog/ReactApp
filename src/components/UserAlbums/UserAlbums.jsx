import React from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

export const UserAlbums = () => {
  const { userId } = useParams();

  const { data, isLoading } = useRequest(`users/${userId}/albums`);

  data.find((album) => album.id === Number(userId));
  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }
  return (
    <ul>
      {data.map((album) => (
        <li key={album.id} className="list-item">
          <span className="name">{album.id}</span>:
          <span className="body">{album.title}</span>
        </li>
      ))}
    </ul>
  );
};
