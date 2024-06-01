import React from "react";
import { Grid, Card, Box, TextField, Typography } from "@mui/material";
import { Slider } from "@mui/material";
import { NumericFormat } from "react-number-format";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import PropTypes from "prop-types";

const marks = Array.from({ length: 12 }, (_, i) => {
  const value = 4000 + i * 1000;
  return {
    value,
    label: `$${value / 1000}K`,
  };
});

function BudgetGoal() {
  const [value, setValue] = React.useState(8500);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const formattedValue = `$${new Intl.NumberFormat().format(value)}`;
  const roundedValue = Math.round(value / 700);

  return (
    <Grid container spacing={4} style={{ marginBottom: "3rem", marginTop: 0.01 }}>
      <Grid item xs={3} md={3} lg={3}>
        <ComplexStatisticsCard
          color="success"
          icon="savings"
          title="Total Budget"
          count={formattedValue}
          percentage={{
            color: "success",
            amount: "$8,000",
            label: "is the average budget",
          }}
        />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <ComplexStatisticsCard
          color="secondary"
          icon="kitesurfing"
          title="Number of Trips"
          count={roundedValue}
          percentage={{
            color: "success",
            label: `Most people go on 9 trips`,
          }}
        />
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Card style={{ padding: "2rem" }}>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-label="Budget"
            defaultValue={8500}
            shiftStep={5000}
            step={100}
            marks={marks}
            min={4000}
            max={15000}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default BudgetGoal;
