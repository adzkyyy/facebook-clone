import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "../asset/MessegeSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      <Post
        profilePict="https://ents24.imgix.net/image/000/199/027/1e87a50cc9aef99e34d54fa5fbcf1ad527a95e45.jpg?auto=format&fit=crop&crop=faces&w=1081.5&h=1575&vib=50&q=50"
        message="mantap"
        timeStamp="initime"
        username="Zayn"
        image="https://www.goodnewsfromindonesia.id/uploads/post/large-suporter-e583d7bffeb6a4260cb3dfef3f74e0de.jpg"
      />
      <Post
        profilePict="https://ents24.imgix.net/image/000/199/027/1e87a50cc9aef99e34d54fa5fbcf1ad527a95e45.jpg?auto=format&fit=crop&crop=faces&w=1081.5&h=1575&vib=50&q=50"
        image="https://www.goodnewsfromindonesia.id/uploads/post/large-suporter-e583d7bffeb6a4260cb3dfef3f74e0de.jpg"
      />
      <Post
        profilePict="https://ents24.imgix.net/image/000/199/027/1e87a50cc9aef99e34d54fa5fbcf1ad527a95e45.jpg?auto=format&fit=crop&crop=faces&w=1081.5&h=1575&vib=50&q=50"
        image="https://www.goodnewsfromindonesia.id/uploads/post/large-suporter-e583d7bffeb6a4260cb3dfef3f74e0de.jpg"
      />
    </div>
  );
}

export default Feed;
