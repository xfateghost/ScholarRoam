import { Card, IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import PropTypes from "prop-types";
import * as React from "react";
import { NumericFormat } from "react-number-format";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const Icon = ({ title, icon }) => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    const logEntry = { title: title };
    console.log(JSON.stringify(logEntry));
    setClicked(true);
  };

  return (
    <Grid container>
      <CardActionArea
        style={{
          borderRadius: "8px",
          backgroundColor: clicked ? "lightblue" : "inherit",
          width: "100px",
          height: "70px",
        }}
        onClick={handleClick}
      >
        <MDBox shadow="sm" borderRadius="lg" style={{ width: "100%", height: "100%" }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.7rem",
            }}
          >
            {icon}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="button">{title}</Typography>
          </Grid>
        </MDBox>
      </CardActionArea>
    </Grid>
  );
};

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

function DestinationPicker() {
  return (
    <MDBox>
      <MDBox style={{ width: "100%", marginTop: "1rem" }}>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Icon title="Flight" icon={<FlightIcon color="black" />} />
            <Icon title="Car" icon={<DirectionsCarIcon color="black" />} />
            <Icon title="Bus" icon={<DirectionsBusIcon color="black" />} />
            <Icon title="Boat" icon={<DirectionsBoatIcon color="black" />} />
            <Icon title="Train" icon={<DirectionsSubwayIcon color="black" />} />
          </Stack>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default DestinationPicker;
