import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";
import * as React from "react";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const iconMap = {
  Flight: <FlightIcon />,
  Car: <DirectionsCarIcon />,
  Bus: <DirectionsBusIcon />,
  Boat: <DirectionsBoatIcon />,
  Train: <DirectionsSubwayIcon />,
};

const Icon = ({ title, icon, onClick, selected }) => {
  return (
    <Grid container>
      <CardActionArea
        style={{
          borderRadius: "8px",
          backgroundColor: selected ? "lightblue" : "inherit",
          width: "100px",
          height: "70px",
        }}
        onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

function DestinationPicker({ onSelect }) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (title) => {
    setSelectedCard(title);
    onSelect({ title, icon: iconMap[title] });
  };

  return (
    <MDBox>
      <MDBox style={{ width: "100%", marginTop: "1rem" }}>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1} alignItems="center">
            {Object.keys(iconMap).map((title) => (
              <Icon
                key={title}
                title={title}
                icon={iconMap[title]}
                onClick={() => handleCardClick(title)}
                selected={selectedCard === title}
              />
            ))}
          </Stack>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

DestinationPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default DestinationPicker;
