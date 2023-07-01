import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { GoHome } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className={classes.pageHeader}>
        <nav>
          <button
            className={classes.toggleMobMenu}
            aria-expanded="false"
            aria-label="open menu"
          ></button>
          <ul className={classes.adminMenu}>
            <li className={classes.menuHeading}>
              <h3>Nepali Nirvana</h3>
            </li>
            <li>
              <div className={classes.spaceright}>
                <AiFillDashboard size={20} />
                <span>Dashboard</span>
              </div>
            </li>
            <li>
              <div className={classes.spaceright}>
                <GoHome size={20} />
                <span>Destinations</span>
              </div>
            </li>
            <li>
              <div
                className={classes.spaceright}
                onClick={(e) => {
                  navigate("/search");
                }}
              >
                <AiOutlineSearch size={20} />
                <span>Search New Destinations</span>
              </div>
            </li>
            <li>
              <div className={classes.spaceright}>
                <AiFillSetting size={20} />
                <span>Settings</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      ;
    </div>
  );
};

export default Sidebar;
