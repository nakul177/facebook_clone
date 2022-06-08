import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationAdd,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  StrollerOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiVvmOMci8wDv3CZXhsjkd46QgVcy_RLV1w&usqp=CAU"
          alt=""
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option-active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src="" />
          <h4>Nakul</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};
