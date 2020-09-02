import React from "react";
import "./StoryReal.css";
import Story from "../asset/Story";

function StoryReal() {
  return (
    <div className="storyReal">
      <Story
        image="https://pbs.twimg.com/profile_banners/1148978724102033409/1596060197/1080x360"
        profileSrc="https://pbs.twimg.com/profile_images/1290221793702109184/0G3p5kkY_400x400.jpg"
        title="Zaky"
      />
      <Story
        image="https://pbs.twimg.com/profile_banners/1256111682960502785/1589176681/1080x360"
        profileSrc="https://pbs.twimg.com/profile_images/1259339752399986689/fQ13BMCh_400x400.jpg"
        title="anak awtis"
      />
      <Story
        image="https://pbs.twimg.com/profile_images/1299325355132502016/lDkGs7F9_400x400.jpg"
        profileSrc="https://pbs.twimg.com/media/Eg0ASV1UcAAyHYt?format=jpg&name=900x900"
        title="kim jong unch"
      />
      <Story
        image="https://pbs.twimg.com/media/Eg2OtVWVkAASPMI?format=jpg&name=large"
        profileSrc="https://pbs.twimg.com/profile_images/1300493442024259584/XSr2WljY_400x400.jpg"
        title="yo wassap"
      />
    </div>
  );
}

export default StoryReal;
