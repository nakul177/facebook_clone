import { Avatar } from "@mui/material";
import React from "react";
import "./PostList.css";

export const PostList = ({ list }) => {
  return (
    <div className="postlist">
      <div className="post__header">
        <Avatar
          className="post__avtar"
          alt=""
          src="/static/images/avatar/1.jpg"
        />
        <h3>Nakul</h3>
      </div>
      <h4 className="post__text">{list.title}</h4>
      <img className="post__img" src={list.imgUrl} alt="" />
    </div>
  );
};
