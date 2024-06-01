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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import BudgetMaker from "examples/BudgetMaker";

function Budget() {
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
              <VerticalBarChart
                icon={{ color: "success", component: "leaderboard" }}
                title="Expenses by Month"
                description="This chart breaks down monthly expenses by type"
                height={460}
                chart={{
                  labels: ["January", "February", "March", "April", "May"],
                  datasets: [
                    {
                      label: "Travel",
                      color: "success",
                      data: [320, 375, 425, 380, 400, 450],
                    },
                    {
                      label: "Food",
                      color: "warning",
                      data: [500, 575, 625, 580, 700, 750],
                    },
                    {
                      label: "Nightlife",
                      color: "dark",
                      data: [100, 75, 125, 80, 100, 150],
                    },
                    {
                      label: "Groceries",
                      color: "info",
                      data: [150, 175, 225, 180, 200, 250],
                    },
                    {
                      label: "Shopping",
                      color: "error",
                      data: [100, 75, 25, 80, 100, 150],
                    },
                  ],
                }}
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
                <MDTypography variant="h6" color="white">
                  Track Expenses
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <BudgetMaker />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Budget;
