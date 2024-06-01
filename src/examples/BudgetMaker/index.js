import React, { useState } from "react";
import Button from "@mui/material/Button";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FormDialog from "examples/Feedback/Dialog";
import BudgetTimeline from "./budgettimeline";
import BudgetPicker from "./budgetpicker";

function BudgetMaker() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBox>
      <MDBox style={{ width: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ color: "black" }}
                size="large"
                variant="outlined"
                sx={{
                  "&:hover": {
                    borderColor: "green",
                  },
                }}
                onClick={handleClickOpen}
              >
                Add Expense
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h3">Total: $500</Typography>
          </Grid>
        </Grid>
      </MDBox>
      <Divider
        flexItem={true}
        variant="fullWidth"
        style={{
          backgroundColor: "black",
          height: "0.2px",
          margin: "13px 0",
        }}
      />
      <BudgetTimeline />
      <FormDialog
        title="Add Expenses"
        description="Here you can add expenses based off a category."
        open={open}
        handleClose={handleClose}
        component={<BudgetPicker />}
      />
    </MDBox>
  );
}

export default BudgetMaker;
