import React from "react";
import "./MessegeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessegeSender() {
  const handleSubmit = (e) => {
    e.prefentDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input placeholder={"apa yang terjadi?"} />
          <input placeholder={"URL"} />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Siaran</h3>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Foto dan Video</h3>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Suka</h3>
        </div>
      </div>
    </div>
  );
}

export default MessegeSender;
