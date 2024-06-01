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
          width: "120px",
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

function BudgetPicker() {
  const [values, setValues] = React.useState({
    numberformat: "",
  });
  const handleChange = (event) => {
    const newValue = event.target.value;
    const logEntry = { event: newValue };
    console.log(JSON.stringify(logEntry));
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
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
          <Stack direction="row" spacing={1} alignItems="center">
            <Icon title="Flight" icon={<FlightIcon color="black" />} />
            <Icon title="Lodging" icon={<CottageIcon color="black" />} />
            <Icon title="Food" icon={<RestaurantMenuIcon color="black" />} />
            <Icon title="Drinks" icon={<NightlifeIcon color="black" />} />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" style={{ marginTop: "1rem" }}>
            <Icon title="Shopping" icon={<StoreIcon color="black" />} />
            <Icon title="Transit" icon={<TrainIcon color="black" />} />
            <Icon title="Car Rental" icon={<DirectionsCarIcon color="black" />} />
            <Icon title="Sightseeing" icon={<AccountBalanceIcon color="black" />} />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" style={{ marginTop: "1rem" }}>
            <Icon title="Activities" icon={<GroupIcon color="black" />} />
            <Icon title=" Gas" icon={<LocalGasStationIcon color="black" />} />
            <Icon title="Groceries" icon={<ShoppingBasketIcon color="black" />} />
            <Icon title="Other" icon={<AssignmentIcon color="black" />} />
          </Stack>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default BudgetPicker;
