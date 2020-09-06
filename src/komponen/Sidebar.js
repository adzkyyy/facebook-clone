import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Flag from "@material-ui/icons/Flag";
import Friend from "@material-ui/icons/People";
import Chat from "@material-ui/icons/Chat";
import Store from "@material-ui/icons/Storefront";
import Video from "@material-ui/icons/VideoLibrary";
import Covid from "@material-ui/icons/LocalHospital";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
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
