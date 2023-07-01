import React from "react";
import TopBar from "../../Components/Search/TopBar/TopBar";
import LeftBar from "../../Components/Search/LeftBar/LeftBar";
import MiddleSearch from "../../Components/Search/MiddleSearch/MiddleSearch";
import classes from "./Search.module.css";

function Search() {
  return (
    <div>
      <TopBar />
      <div className={classes.searchbar}>
        <LeftBar />
        <MiddleSearch />
      </div>
    </div>
  );
}

export default Search;
