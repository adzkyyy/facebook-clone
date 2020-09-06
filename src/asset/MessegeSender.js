import React, { useState } from "react";
import "./MessegeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessegeSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePict: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            placeholder="apa yang terjadi?"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"URL"}
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Siaran</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Foto dan Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Suka</h3>
        </div>
      </div>
    </div>
  );
}

export default MessegeSender;
