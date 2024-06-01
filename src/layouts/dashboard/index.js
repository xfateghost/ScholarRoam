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
import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import BudgetGoal from "examples/BudgetGoal";

function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: ["Travel", "Lodging", "Food", "Shopping", "Nightlife", "Misc.", "Discretionary"],
    datasets: [
      {
        label: "$",
        data: [977, 1189, 1665, 570, 394, 150, 300],
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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <BudgetGoal />
        <MDBox mt={3.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={29} lg={8}>
              <MDBox mb={5}>
                <DynamicBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="Budget by Type"
                  description="This chart is for budgeting each expense type"
                  height={460}
                  chart={chartData}
                  setChartData={setChartData}
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
                  <TripLog />
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
