import React, { useState } from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FormDialog from "examples/Feedback/Dialog";
import EditCard from "layouts/travel/EditCard";
import DestinationPicker from "./DestinationPicker";

const Trip = ({ icon, city, date }) => {
  return (
    <MDBox
      width="100%"
      height="100%"
      variant="gradient"
      borderRadius="xl"
      display="flex"
      style={{ padding: "1rem", border: "2px solid lightblue", marginBottom: "1rem" }}
    >
      <Stack direction="row" spacing={1} width="100%">
        <Grid item xs={4} display="flex" justifyContent="flex-start" alignItems="center">
          {icon}
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
          <MDTypography variant="h5">{city}</MDTypography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center">
          <MDTypography variant="h6">{date}</MDTypography>
        </Grid>
      </Stack>
    </MDBox>
  );
};

Trip.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

function TripLog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBox>
      <Grid item xs={12} md={4} lg={12}>
        <MDBox>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            <Button
              style={{ color: "black" }}
              size="large"
              variant="outlined"
              sx={{
                "&:hover": {
                  borderColor: "green",
                },
              }}
              onClick={handleClickOpen}
            >
              Add Trip
            </Button>
          </div>
          <MDBox style={{ maxHeight: "410px", overflowY: "auto" }}>
            <Trip city="Madrid" date="1/30 to 2/4" icon={<FlightIcon fontSize="large" />} />
            <Trip
              city="Vienna"
              date="2/10 to 2/15"
              icon={<DirectionsSubwayIcon fontSize="large" />}
            />
            <Trip
              city="Sevilla"
              date="2/25 to 3/1"
              icon={<DirectionsBoatIcon fontSize="large" />}
            />
            <Trip city="London" date="3/6 to 3/9" icon={<DirectionsBusIcon fontSize="large" />} />
            <Trip
              city="Stockholm"
              date="3/20 to 3/25"
              icon={<DirectionsCarIcon fontSize="large" />}
            />
            <Trip
              city="Amsterdam"
              date="4/10 to 4/15"
              icon={<DirectionsSubwayIcon fontSize="large" />}
            />
            <Trip city="Brussels" date="4/23 to 4/26" icon={<FlightIcon fontSize="large" />} />
          </MDBox>
        </MDBox>
      </Grid>
      <FormDialog
        title="Edit Travel Info"
        description="Here you can edit the details of your trip."
        textlabel="City"
        open={open}
        handleClose={handleClose}
        component={
          <div>
            <DestinationPicker />
            <EditCard />
          </div>
        }
        showTextField={true}
      />
    </MDBox>
  );
}

export default TripLog;
