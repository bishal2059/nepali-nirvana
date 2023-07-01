import React, { useEffect, useState, useRef } from "react";
import classes from "./MiddleSearch.module.css";
import { Stack } from "@mui/material";

function Card(props) {
  function addToFavourite(e) {
    fetch("http://localhost:8000/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ destinationId: e.target.dataset.id }),
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message) {
          alert("Added To Favourite");
        }
        if (data.error) {
          alert("Coudn't add to Favourite");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className={classes.cart}>
      <main>
        <img src={props.photo} alt="places" />
        <div className={classes.detailcontainer}>
          <h1>{props.name}</h1>
          <h5 className={classes.brand}>{props.brand}</h5>
          <p>{props.description}</p>
          <Stack direction="row" gap={4}>
            <button onClick={addToFavourite} data-id={props.data}>
              Add to Favorites
            </button>

            <button>See More</button>
          </Stack>
        </div>
      </main>
    </div>
  );
}

function MiddleSearch() {
  const [data, setdata] = useState([]);

  const searchRef = useRef();
  function handleInput(e) {
    e.preventDefault();
    fetch(`http://localhost:8000/dashboard?search=${searchRef.current.value}`, {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setdata(data.destinations);
      });
  }

  useEffect(() => {
    fetch(`http://localhost:8000/dashboard?search=`, {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setdata(data.destinations);
      });
  }, []);

  return (
    <div className={classes.middle}>
      <div className={classes.searchbox}>
        <input type="text" placeholder="Search Any place" ref={searchRef} />
        <button onClick={handleInput}>Search</button>
      </div>
      {console.log(data)}
      {data ? (
        data.map((ele) => {
          return (
            <Card
              name={ele.placeName}
              photo={ele.thumbnail}
              description={ele.description}
              data={ele._id}
            />
          );
        })
      ) : (
        <p>hello</p>
      )}
    </div>
  );
}

export default MiddleSearch;
