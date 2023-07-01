import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Resort from "./Resort/Resort";
import classes from "./Calendar.module.css";
import image1 from "../../../assests/img/1.jpg";
import image2 from "../../../assests/img/2.jpg";
import image3 from "../../../assests/img/3.jpg";

export default function BasicDateCalendar() {
  return (
    <div className={classes.halfcontainer}>
      <div className={classes.calendar}>
        <h2>Available Dates</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div className={classes.resortcontainer}>
        <h2>Best Resort</h2>
        <Resort
          image={image1}
          ResortName="Heritage Resort"
          adress="Pokhara"
          price="$120/day"
        />
        <Resort
          image={image2}
          ResortName="Hotel Lakeside"
          adress="Pokhara"
          price="$120/day"
        />
        <Resort
          image={image3}
          ResortName="Heritage Resort"
          adress="Pokhara"
          price="$120/day"
        />
      </div>
    </div>
  );
}
