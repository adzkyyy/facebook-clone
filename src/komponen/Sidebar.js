import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Flag from "@material-ui/icons/Flag";
import Friend from "@material-ui/icons/People";
import Chat from "@material-ui/icons/Chat";
import Store from "@material-ui/icons/Storefront";
import Video from "@material-ui/icons/VideoLibrary";
import Covid from "@material-ui/icons/LocalHospital";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://pbs.twimg.com/profile_images/1290221793702109184/0G3p5kkY_400x400.jpg"
        title="jakiiiikkkkk"
      />
      <SidebarRow Icon={Covid} title="COVID-19: Pusat Informasi" />
      <SidebarRow Icon={Flag} title="Halaman" />
      <SidebarRow Icon={Friend} title="Teman" />
      <SidebarRow Icon={Chat} title="Pesan" />
      <SidebarRow Icon={Store} title="Penjualan" />
      <SidebarRow Icon={Video} title="video" />
    </div>
  );
}
export default Sidebar;
