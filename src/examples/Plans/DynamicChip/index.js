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
      <Grid item xs={12} md={12} lg={12}>
        <Stack direction="row">
          <Card style={{ width: "31em", height: "80vh" }}>
            <DynamicPlan />
          </Card>
        </Stack>
      </Grid>
    </Box>
  );
}

export default DynamicChip;
