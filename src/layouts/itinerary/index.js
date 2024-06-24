import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import Footer from "examples/Footer";
import DynamicChip from "examples/Plans/DynamicChip";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

function Itinerary() {
  return (
    <PageLayout>
      <Card sx={{ textAlign: "center", borderRadius: "0 0 8px 8px", padding: "0.8rem" }}>
        <Box component={Link} to="/" lineHeight={3} ml={5}>
          <Typography variant="h3" fontWeight="bold">
            ScholarRoam
          </Typography>
        </Box>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "88vh",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <DynamicChip />
      </Box>
      <Footer />
    </PageLayout>
  );
}

export default Itinerary;
