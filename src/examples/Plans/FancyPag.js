import React, { useState } from "react";
import { Card, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./FancyPag.css";

function FancyPag({ dayIndexArray, shortDateArray, bgColor }) {
  const [activeDay, setActiveDay] = useState("");

  const handleScrollTo = (dayId) => {
    document.getElementById(dayId).scrollIntoView({ behavior: "smooth" });
    setActiveDay(dayId);
  };

  return (
    <Card
      className="card"
      sx={{
        overflowY: "auto",
        display: "flex",
        height: "80vh",
        width: "7.8%",
        borderRadius: "5px",
        paddingTop: 2,
        paddingLeft: -1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: bgColor,
      }}
    >
      <Stack spacing={3}>
        {shortDateArray.map((day, index) => (
          <Typography
            key={index}
            variant="button"
            onClick={() => handleScrollTo(dayIndexArray[index])}
            style={{
              cursor: "pointer",
              color: activeDay === dayIndexArray[index] ? "dodgerblue" : "black",
            }}
          >
            {day}
          </Typography>
        ))}
      </Stack>
    </Card>
  );
}

export default FancyPag;

FancyPag.propTypes = {
  dayIndexArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  shortDateArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.func,
};
