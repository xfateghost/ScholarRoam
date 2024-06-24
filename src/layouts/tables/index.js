/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, Stack } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import DynamicBarChart from "examples/Charts/BarCharts/DynamicBarChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import FormDialog from "examples/Feedback/Dialog";

// Data
import BudgetMaker from "examples/BudgetMaker";

function Budget() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [saveChartData, setSaveChartData] = useState({
    labels: ["Madrid", "Vienna", "Stockholm", "London", "Sevilla", "Berlin"],
    datasets: [
      {
        label: "Budgeted Cost ($)",
        data: [100, 200, 150, 300, 250, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
      {
        label: "Additional Cost ($)",
        data: [30, 40, 20, 50, 60, 10],
        backgroundColor: "rgba(201, 203, 207, 0.8)",
      },
    ],
  });

  const [chartData, setChartData] = useState({
    labels: [
      "Flight",
      "Lodging",
      "Food",
      "Drinks",
      "Shopping",
      "Transit",
      "Car Rental",
      "Sightseeing",
      "Activities",
      "Gas",
      "Groceries",
      "Other",
    ],
    datasets: [
      {
        label: "$",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
      },
    ],
  });

  const handleExpense = (newValue) => {
    const { title, amount } = newValue;

    setChartData((prevChartData) => {
      const labelIndex = prevChartData.labels.indexOf(title);

      if (labelIndex >= 0) {
        const newData = [...prevChartData.datasets[0].data];

        const existingAmount = parseFloat(newData[labelIndex]) || 0;
        const newAmount = parseFloat(amount) || 0;
        newData[labelIndex] = existingAmount + newAmount;

        const updatedDataset = {
          ...prevChartData.datasets[0],
          data: newData,
        };

        return {
          ...prevChartData,
          datasets: [updatedDataset],
        };
      } else {
        return prevChartData;
      }
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3}>
        <Grid container spacing={3} style={{ marginBottom: "3rem" }}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="account_balance"
                title="Total Trip Amount"
                count={`$9,200`}
                percentage={{
                  color: "success",
                  amount: "$8,500",
                  label: "is the average cost",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="paid"
                title="Avg. per week"
                count="$575"
                percentage={{
                  color: "success",
                  amount: "$531",
                  label: "is the average cost",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="savings"
                title="Money Saved if You Book Now"
                count="$250"
                percentage={{
                  color: "success",
                  amount: "$320",
                  label: "is the average cost",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="restaurant"
                title="Food is your largest expense"
                count="$3500"
                percentage={{
                  color: "success",
                  amount: "$2,500",
                  label: "is the average cost",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            <MDBox mb={7}>
              <HorizontalBarChart
                icon={{ color: "success", component: "leaderboard" }}
                title="Trip Savings"
                description="Trip costs if you book ahead vs. last minute"
                height={460}
                chart={saveChartData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
              >
                <Stack direction="row">
                  <MDTypography variant="h6" color="white">
                    Track Expenses
                  </MDTypography>
                  <Button
                    color="secondary"
                    onClick={handleClickOpen}
                    variant="contained"
                    sx={{ marginLeft: "auto", marginTop: -1, width: "10px", height: "10px" }}
                  >
                    Show Chart
                  </Button>
                </Stack>
              </MDBox>
              <MDBox pt={3}>
                <BudgetMaker onExpense={handleExpense} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <FormDialog
        title="Expenses by Type"
        description="This chart breaks down expenses by type."
        open={open}
        showTextField={false}
        handleClose={handleClose}
        ExitButton=""
        SaveButton="Exit"
        onEnter={() => console.log("Click")}
        component={<HorizontalBarChart height={460} chart={chartData} />}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Budget;
