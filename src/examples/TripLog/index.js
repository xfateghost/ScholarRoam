import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormDialog from "examples/Feedback/Dialog";
import EditCard from "layouts/travel/EditCard";
import DestinationPicker from "./DestinationPicker";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const Trip = ({ trip, index }) => {
  const { icon, city, dateRange } = trip;
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Link to="/travel">
        <MDBox
          key={index}
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
              <MDTypography variant="h6">{dateRange}</MDTypography>
            </Grid>
          </Stack>
        </MDBox>
      </Link>
    </Box>
  );
};

Trip.propTypes = {
  trip: PropTypes.shape({
    city: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function TripLog() {
  const [open, setOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState({
    city: "",
    dateRange: "",
    icon: null,
  });

  useEffect(() => {
    validateForm();
  }, [selectedTrip]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (data) => {
    setSelectedTrip((prev) => ({ ...prev, icon: data.icon }));
    console.log(data);
  };

  const handleDateEnter = (formattedDateRange) => {
    setSelectedTrip((prev) => ({ ...prev, dateRange: formattedDateRange }));
    console.log(formattedDateRange);
  };

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
    setSelectedTrip({ city: "", dateRange: "", icon: null });
  };

  const handleEnter = (data) => {
    const updatedTrip = {
      city: selectedTrip.city,
      icon: selectedTrip.icon,
      dateRange: selectedTrip.dateRange,
    };
    addTrip(updatedTrip);
    console.log(data);
  };

  const validateForm = () => {
    const { city, dateRange, icon } = selectedTrip;
    if (city && dateRange && icon) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleEnterCity = (city) => {
    setSelectedTrip((prev) => ({ ...prev, city: city }));
    console.log(city);
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
          <MDBox style={{ maxHeight: "410px", height: "410px", overflowY: "auto" }}>
            <Divider />
            {trips.length === 0 && (
              <Box sx={{ textAlign: "center", marginTop: "4em" }}>
                <Typography variant="h4">Track all of your trips in one place</Typography>
              </Box>
            )}
            <Grid container justifyContent="center">
              {trips.map((trip, index) => (
                <Trip key={index} trip={trip} index={index} />
              ))}
            </Grid>
          </MDBox>
        </MDBox>
      </Grid>
      <FormDialog
        title="Edit Travel Info"
        description="Here you can edit the details of your trip."
        textlabel="City"
        open={open}
        onEnter={handleEnter}
        handleClose={handleClose}
        isFormValid={isFormValid}
        onInput={handleEnterCity}
        component={
          <div>
            <DestinationPicker onSelect={handleSelect} />
            <EditCard onDateEnter={handleDateEnter} />
          </div>
        }
        showTextField={true}
      />
    </MDBox>
  );
}

export default TripLog;
