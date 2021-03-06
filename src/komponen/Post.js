import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Chat from "@material-ui/icons/ChatBubble";
import NearMe from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Feed";

function Post({ profilePict, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePict} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_optionS">
        <div className="post_option">
          <ThumbUp />
          <p>kerrren</p>
        </div>
        <div className="post_option">
          <Chat />
          <p>kerrren</p>
        </div>
        <div className="post_option">
          <NearMe />
          <p>kerrren</p>
        </div>
        <div className="post_option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
