import { Typography, Box, TextField, Button, Grid, Card } from "@mui/material";
import { CardActionArea, CardMedia, CardContent } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

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

export default function InstantQuestions() {
  const navigate = useNavigate();
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

  const handleNextClick = () => {
    navigate("/dashboard");
  };

  return (
    <Box>
      <Box>
        <Typography variant="h1">Enter your budget for study abroad</Typography>
        <Typography variant="h6">Not including tuition or housing</Typography>
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
        <Typography variant="h1">OR choose from selection</Typography>
        <Grid container spacing={10}>
          <Grid item xs={6} md={6} lg={4}>
            <Card sx={{ width: "12em" }}>
              <CardActionArea onClick={() => console.log("click")}>
                <CardMedia
                  height="100%"
                  image="https://img.freepik.com/free-vector/flat-war-background-with-soldier-holding-weapon_52683-86501.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais"
                  alt="spartan"
                  style={{ height: 0, paddingTop: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    Spartan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A couple trips with small budget for food and shopping
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={4}>
            <Card sx={{ width: "12em" }}>
              <CardActionArea onClick={() => console.log("click")}>
                <CardMedia
                  height="100%"
                  image="https://img.freepik.com/premium-vector/save-planet-earth-globe-low-poly-design-illustration-mother-green-nature-icon_194708-1734.jpg"
                  alt="balanced"
                  style={{ height: 0, paddingTop: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    Balanced
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A decent amount of trips with moderate budget for food and shopping
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={4}>
            <Card sx={{ width: "12em" }}>
              <CardActionArea onClick={() => console.log("click")}>
                <CardMedia
                  height="100%"
                  image="https://img.freepik.com/premium-vector/queen-crown-vector_584573-377.jpg"
                  alt="super"
                  style={{ height: 0, paddingTop: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    Super
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A lot of trip with large budget for food, shopping, other things
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ position: "absolute", bottom: 16, right: 16 }}>
        <Button
          onClick={handleNextClick}
          style={{
            fontSize: "1.5rem",
            padding: "1rem 1.5rem",
            minWidth: "200px",
            backgroundColor: "#9c27b0",
            color: "white",
          }}
        >
          Generate
        </Button>
      </Box>
    </Box>
  );
}
