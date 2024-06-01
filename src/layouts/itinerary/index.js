import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Footer from "examples/Footer";
import DynamicChip from "examples/Plans/DynamicChip";
import GoogleMapsPlaceholder from "assets/images/GoogleMapsPlaceholder.jpg";

function Itinerary() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box mt={5}>
        <Box mb={8}>
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "75vh",
            }}
          >
            <DynamicChip />
          </Grid>
        </Box>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Itinerary;
