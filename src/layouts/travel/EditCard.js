import "react-calendar/dist/Calendar.css";
import "./DateRange.css";
import Calendar from "react-calendar";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React, { useState } from "react";
import "./EditCard.css";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function EditCard() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const handleDateRangeChange = (item) => {
    console.log("Start Date:", item.selection.startDate);
    console.log("End Date:", item.selection.endDate);
    setState([item.selection]);
  };

  return (
    <MDBox>
      <div className="container">
        <div className="calendar-box">
          <DateRange
            onChange={(item) => handleDateRangeChange(item)}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            ranges={state}
            direction="vertical"
            showMonthAndYearPickers={false}
            showDateDisplay={true}
            showPreview={true}
            editableDateInputs={true}
            fixedHeight={true}
          />
        </div>
      </div>
    </MDBox>
  );
}

export default EditCard;
