import React, { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DynamicPlan from "./DynamicChip";
import FancyPag from "../FancyPag";
import FormDialog from "examples/Feedback/Dialog";
import Edit from "@mui/icons-material/Edit";
import EditCard from "layouts/travel/EditCard";
import { Chip, IconButton, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TransferList from "../TransferList";

function DynamicChip() {
  return (
    <Box
      width="100%"
      height="100%"
      marginBottom={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card style={{ width: "31em", height: "35.7em" }}>
        <DynamicPlan />
      </Card>
    </Box>
  );
}

export default DynamicChip;
