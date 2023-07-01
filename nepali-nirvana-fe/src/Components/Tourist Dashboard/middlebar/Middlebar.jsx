import React, { useEffect, useState } from "react";
import { Stack, InputAdornment, TextField } from "@mui/material";
import classes from "./middlebar.module.css";
import ActionAreaCard from "./Card";
import BasicDateCalendar from "./Calendar";
import { BsSearch } from "react-icons/bs";
import { Button } from "@mui/material";

const Middlebar = () => {
  const [username, setUsername] = useState("");
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/user", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        setUsername(data.firstName);
        setDestination(data.destination);
      });
  });

  return (
    <div className={classes}>
      <Stack
        direction="row"
        justifyContent="space-between"
        marginRight={2}
        marginTop={2}
      >
        <Stack padding={2} direction="column" gap={3}>
          <div>
            <h1>Hello, {username}</h1>
            <p>Welcome back and explore the world</p>
          </div>
          <div className={classes.middleseeall}>
            <h2>Recent Places</h2>
          </div>
        </Stack>
        <Stack direction="column" gap="60px">
          <TextField
            id="search"
            type="search"
            label="Search"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <BsSearch />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" sx={{ width: "50%" }}>
            See all
          </Button>
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="center" gap={5}>
        <div className={classes.destination}>
          {destination
            ? destination.map((ele) => {
                return (
                  <ActionAreaCard
                    heading={`${ele.placeName.slice(0, 13)}.`}
                    image={ele.thumbnail}
                    text={`${ele.description.slice(0, 80)}...`}
                    data={ele._id}
                  />
                );
              })
            : null}
        </div>
      </Stack>
      <div className={classes.downcontainer}>
        <BasicDateCalendar />
      </div>
    </div>
  );
};

export default Middlebar;
