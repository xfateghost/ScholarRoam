import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DynamicPlan from "./DynamicChip";
import FancyPag from "../FancyPag";
import { Grid, Stack, Typography } from "@mui/material";
import GoogleMapsPlaceholder from "assets/images/GoogleMapsPlaceholder.jpg";

function DynamicChip() {
  return (
    <Box
      width="auto"
      height="auto"
      marginBottom={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={6}>
          <Stack direction="row">
            <Card style={{ width: "31em", height: "80vh" }}>
              <DynamicPlan />
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={0} md={0} lg={6}>
          <Card style={{ width: "45vw", height: "80vh", position: "relative" }}>
            <img
              src={GoogleMapsPlaceholder}
              alt="Google Maps Placeholder"
              style={{ width: "100%", height: "100%", borderRadius: "1%" }}
            />
            <Box
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "1%",
              }}
            >
              <Typography variant="h4" style={{ opacity: 1 }}>
                Map component currently in the works!
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DynamicChip;
