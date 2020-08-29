import React from "react";
import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import Group from "@material-ui/icons/SupervisedUserCircle";
import Live from "@material-ui/icons/LiveTv";
import Friend from "@material-ui/icons/People";
import Game from "@material-ui/icons/VideogameAsset";
import Add from "@material-ui/icons/Add";
import Chat from "@material-ui/icons/Chat";
import Notif from "@material-ui/icons/Notifications";
import Selengkapnya from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header_input">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_mid">
        <div className="header_option header_option_active">
          <Home fontSize="large" />
        </div>
        <div className="header_option">
          <Friend fontSize="large" />
        </div>
        <div className="header_option">
          <Live fontSize="large" />
        </div>
        <div className="header_option">
          <Group fontSize="large" />
        </div>
        <div className="header_option">
          <Game fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1290221793702109184/0G3p5kkY_400x400.jpg"
            fontSize="large"
          />
          <h4>jakiiikkkkkkk</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <Notif />
        </IconButton>
        <IconButton>
          <Selengkapnya />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
