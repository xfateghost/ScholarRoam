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
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CottageIcon from "@mui/icons-material/Cottage";

const iconMap = [
  { title: "Flight", icon: <FlightIcon /> },
  { title: "Lodging", icon: <CottageIcon /> },
  { title: "Food", icon: <RestaurantMenuIcon /> },
  { title: "Drinks", icon: <NightlifeIcon /> },
  { title: "Shopping", icon: <StoreIcon /> },
  { title: "Transit", icon: <TrainIcon /> },
  { title: "Car Rental", icon: <DirectionsCarIcon /> },
  { title: "Sightseeing", icon: <AccountBalanceIcon /> },
  { title: "Activities", icon: <GroupIcon /> },
  { title: "Gas", icon: <LocalGasStationIcon /> },
  { title: "Groceries", icon: <ShoppingBasketIcon /> },
  { title: "Other", icon: <AssignmentIcon /> },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Icon = ({ title, icon, onClick, selected }) => {
  return (
    <Grid container>
      <CardActionArea
        style={{
          borderRadius: "8px",
          backgroundColor: selected ? "lightblue" : "inherit",
          width: "120px",
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

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function BudgetPicker({ onSelect, onInput }) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const rows = chunkArray(iconMap, 4);

  const handleCardClick = (title) => {
    const selectedIcon = iconMap.find((item) => item.title === title);
    setSelectedCard(title);
    onSelect({ title, icon: selectedIcon.icon });
  };

  const [values, setValues] = React.useState({
    numberformat: "",
  });
  const handleChange = (event) => {
    const newValue = event.target.value;
    const logEntry = { event: newValue };
    console.log(JSON.stringify(logEntry));
    setValues({
      ...values,
      [event.target.name]: newValue,
    });
    onInput(newValue);
  };

  return (
    <MDBox>
      <MDBox style={{ width: "100%" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > :not(style)": { m: 1 },
            margin: "1rem",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Amount"
            value={values.numberformat}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: NumericFormatCustom,
              style: { fontSize: 20, padding: "10px" },
            }}
            variant="outlined"
            helperText="Please enter a number"
            color="success"
            focused
          />
        </Box>
        <Grid container justifyContent="center">
          {rows.map((row, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ marginTop: index > 0 ? "1rem" : 0 }}
            >
              {row.map((iconItem, idx) => (
                <Icon
                  key={idx}
                  title={iconItem.title}
                  icon={iconItem.icon}
                  onClick={() => handleCardClick(iconItem.title)}
                  selected={selectedCard === iconItem.title}
                />
              ))}
            </Stack>
          ))}
        </Grid>
      </MDBox>
    </MDBox>
  );
}

BudgetPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default BudgetPicker;
