import React from "react";
import classes from "./Dashboard.module.css";
import Middlebar from "../../Components/Tourist Dashboard/middlebar/Middlebar";
import Sidebar from "../../Components/Tourist Dashboard/SideBar/Sidebar";
import Rightbar from "../../Components/Tourist Dashboard/Rightbar/Rightbar";

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <div className={classes.leftbar}>
        <Sidebar />
      </div>
      <div className={classes.middlebar} style={{ backgroundColor: "#F0F1F6" }}>
        <Middlebar />
      </div>
      <div className={classes.rightbar} style={{ backgroundColor: "white" }}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
