import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import TripLog from "examples/TripLog";
import DynamicBarChart from "examples/Charts/BarCharts/DynamicBarChart";
import { Card, Box } from "@mui/material";
import MDTypography from "components/MDTypography";
import BudgetGoal from "examples/BudgetGoal";

function Dashboard() {
  const [budget, setBudget] = useState(8500);

  const [totalBudget, setTotalBudget] = useState(8500);

  const handleChartChange = (value) => {
    console.log("Received value from chart:", value);
    const chartDataSum = chartData.datasets.reduce((sum, dataset) => {
      return sum + dataset.data.reduce((datasetSum, data) => datasetSum + data, 0);
    }, 0);
    const newTotalBudget = chartDataSum + value;
    setTotalBudget(newTotalBudget);
  };

  const [chartData, setChartData] = useState({
    labels: ["Travel", "Lodging", "Food", "Shopping", "Nightlife", "Misc.", "Discretionary"],
    datasets: [
      {
        label: "$",
        data: [
          8500 * 0.15,
          8500 * 0.2,
          8500 * 0.3,
          8500 * 0.1,
          8500 * 0.1,
          8500 * 0.05,
          8500 * 0.1,
        ],
        backgroundColor: [
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

  const handleValueChange = (newValue) => {
    setTotalBudget(newValue);

    const updatedData = [
      newValue * 0.15, // Travel
      newValue * 0.2, // Lodging
      newValue * 0.3, // Food
      newValue * 0.1, // Shopping
      newValue * 0.1, // Nightlife
      newValue * 0.05, // Misc.
      newValue * 0.1, // Discretionary
    ];

    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: updatedData,
        },
      ],
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <BudgetGoal totalBudget={totalBudget} budget={budget} onValueChange={handleValueChange} />
        <MDBox mt={3.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={8}>
              <MDBox mb={5}>
                <DynamicBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="Budget by Type"
                  description="This chart is for budgeting each expense type"
                  height={460}
                  chart={chartData}
                  onChartChange={handleChartChange}
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
                  bgColor="primary"
                  borderRadius="lg"
                  coloredShadow="primary"
                >
                  <MDTypography variant="h6" color="white">
                    Trip Log
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <TripLog onValueChange={handleValueChange} />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
