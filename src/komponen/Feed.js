import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "../asset/MessegeSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
    </div>
  );
}

export default Feed;
