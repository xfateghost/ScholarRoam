import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Divider } from "@mui/material";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "pink",
        display: "flex",
        height: "30em",
        borderRadius: "5px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Day One" {...a11yProps(0)} />
        <Divider />
        <Tab label="Day Two" {...a11yProps(1)} />
        <Divider />
        <Tab label="Day Three" {...a11yProps(2)} />
        <Divider />
        <Tab label="Day Four" {...a11yProps(3)} />
        <Divider />
        <Tab label="Day Five" {...a11yProps(4)} />
        <Divider />
        <Tab label="Day Five" {...a11yProps(5)} />
      </Tabs>
    </Box>
  );
}
