import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types";
import "./DateRange.css";
import "./EditCard.css";
import MDBox from "components/MDBox";

function EditCard({ onDateEnter, onFullDateEnter }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const handleDateRangeChange = (item) => {
    const startDate = item.selection.startDate;
    const endDate = item.selection.endDate;
    const formattedStartDate = format(startDate, "M/dd");
    const formattedEndDate = format(endDate, "M/dd");

    const formattedDateRange = `${formattedStartDate} to ${formattedEndDate}`;

    console.log("Formatted Date Range:", formattedDateRange);
    setState([item.selection]);

    if (onFullDateEnter) {
      onFullDateEnter(startDate, endDate);
    }

    if (onDateEnter) {
      onDateEnter(formattedDateRange);
    }
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

EditCard.propTypes = {
  onFullDateEnter: PropTypes.func,
  onDateEnter: PropTypes.func,
};

export default EditCard;
