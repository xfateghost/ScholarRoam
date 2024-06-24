import React, { useState, useMemo, useEffect } from "react";
import Button from "@mui/material/Button";
import MDBox from "components/MDBox";
import { Grid, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FormDialog from "examples/Feedback/Dialog";
import BudgetTimeline from "./budgettimeline";
import BudgetPicker from "./budgetpicker";
import PropTypes from "prop-types";

function BudgetMaker({ onExpense }) {
  const [open, setOpen] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState({
    title: "",
    icon: null,
    amount: "",
  });

  useEffect(() => {
    validateForm();
  }, [selectedBudget]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleEnter = () => {
    const { amount, title } = selectedBudget;
    if (amount && title && selectedBudget.icon) {
      const updatedBudget = {
        icon: selectedBudget.icon,
        title: selectedBudget.title,
        amount: parseFloat(selectedBudget.amount) || 0,
      };
      addBudget(updatedBudget);
      console.log(updatedBudget);
      onExpense(updatedBudget);
    }
  };

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
    setSelectedBudget({
      title: "",
      icon: null,
      amount: "",
    });
  };

  const handleSelect = (data) => {
    setSelectedBudget((prev) => ({ ...prev, icon: data.icon, title: data.title }));
    console.log(data);
  };

  const handleEnterAmount = (amount) => {
    setSelectedBudget((prev) => ({ ...prev, amount: amount }));
    console.log(amount);
  };

  const totalAmount = useMemo(
    () => budgets.reduce((total, budget) => total + (parseFloat(budget.amount) || 0), 0),
    [budgets]
  );

  const validateForm = () => {
    const { title, icon, amount } = selectedBudget;
    if (title && icon && amount) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <MDBox sx={{ overflowY: "auto", height: "48vh", maxHeight: "48.5vh" }}>
      <MDBox style={{ width: "100%", marginBottom: "2em" }}>
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
            <Typography variant="h3">${totalAmount.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </MDBox>
      <Divider sx={{ marginTop: -3 }} />
      {budgets.length === 0 && (
        <Box sx={{ textAlign: "center", marginTop: "4em" }}>
          <Typography variant="h4">Track all of your expenses in one place</Typography>
        </Box>
      )}
      <Grid container justifyContent="center" sx={{ width: "100%" }}>
        {budgets.map((budget, index) => (
          <BudgetTimeline key={index} budget={budget} index={index} />
        ))}
      </Grid>
      <FormDialog
        title="Add Expenses"
        description="Here you can add expenses based off a category."
        open={open}
        handleClose={handleClose}
        onEnter={handleEnter}
        showTextField={false}
        isFormValid={isFormValid}
        component={<BudgetPicker onSelect={handleSelect} onInput={handleEnterAmount} />}
      />
    </MDBox>
  );
}

BudgetMaker.propTypes = {
  onExpense: PropTypes.func.isRequired,
};

export default BudgetMaker;
