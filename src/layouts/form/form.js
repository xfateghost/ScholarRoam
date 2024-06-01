import * as React from "react";
import { Box, Stack, Typography, TextField, Button, Slider, CardActionArea } from "@mui/material";
import { Checkbox, FormGroup, FormControlLabel, Divider, CardMedia } from "@mui/material";
import { Card, CardContent, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function InputQuestion() {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Stack spacing={3}>
      <Box style={{ marginBottom: "2rem", width: "50vw" }}>
        <Typography variant="h1" style={{ marginBottom: "1rem" }}>
          What city are you studying abroad in?
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{
            width: "100%",
          }}
        >
          <TextField
            focused
            fullWidth
            InputProps={{
              style: { fontSize: "2rem", padding: "1rem" },
            }}
          />
        </Box>
      </Box>
      <Box style={{ marginBottom: "2rem" }}>
        <Typography variant="h1" style={{ marginBottom: "1rem" }}>
          How many trips are you planning on going on?
        </Typography>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          aria-label="Temperature"
          defaultValue={1}
          valueLabelDisplay="auto"
          shiftStep={4}
          step={1}
          marks
          min={0}
          max={15}
        />
        <TextField
          variant="outlined"
          value={value}
          size="small"
          onChange={handleInputChange}
          noValidate
          autoComplete="off"
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 15,
            type: "number",
            style: { fontSize: "1.2rem", padding: "1rem" },
          }}
        />
      </Box>
    </Stack>
  );
}

function CardOption({ value }) {
  return (
    <Box>
      <FormGroup>
        <CardActionArea
          style={{
            border: "1.5px solid black",
            borderRadius: "1rem",
            width: "30vw",
            marginBottom: "1rem",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={value}
            sx={{
              padding: "1rem",
              width: "103%",
              cursor: "pointer",
              ".MuiFormControlLabel-label": { fontSize: "1.5rem" },
            }}
          />
        </CardActionArea>
      </FormGroup>
    </Box>
  );
}

function Question({ question }) {
  return (
    <Box style={{ display: "flex", alignItems: "flex-start", position: "relative", top: "0" }}>
      <Typography variant="h1">{question}</Typography>
    </Box>
  );
}

function FormQuestions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const navigate = useNavigate();

  const questions = [
    { component: <InputQuestion /> },
    {
      component: <Question question="Which season are you studying abroad?" />,
      options: ["Fall", "Winter", "Spring", "Summer"],
    },
    {
      component: <Question question="Where will you be living?" />,
      options: ["Dormitory", "Apartment", "Homestay"],
    },
    {
      component: <Question question="What gets you excited when visiting a new place?" />,
      options: ["Food", "Adventure", "Culture", "Relaxation"],
    },
    {
      component: <Question question="What kind of destinations interest you most?" />,
      options: ["City", "Beach", "Mountains", "Historical Sites"],
    },
    {
      component: (
        <Question question="Would you rather visit populuar spots or locations off the beaten path?" />
      ),
      options: [
        "Only popular spots",
        "Mostly popular",
        "Mix of both",
        "Mostly locations off the beaten path",
        "Only locations off the beaten path",
      ],
    },
    {
      component: <Question question="What is your preferred travel pace?" />,
      options: ["Relaxed", "Balanced", "Have to see everything"],
    },
    {
      component: <Question question="What type of accomodations you you prefer?" />,
      options: ["Hotels", "Airbnb", "Hostels"],
    },
    {
      component: <Question question="What are your preferences of travel?" />,
      options: [
        "Just the country I am studying abroad in",
        "Mostly host country but a few times outside the country",
        "Mostly outside country but a few in host country",
        "Only outside host country",
      ],
    },
    {
      component: <Question question="What type of food would you like as you travel?" />,
      options: [
        "Only food from that region",
        "Only food from that country",
        "As long as it's delicious",
      ],
    },
    {
      component: <Question question="How many museums would you like to visit?" />,
      options: ["None", "Some", "Lots"],
    },
    {
      component: <Question question="How many bars would you like to visit?" />,
      options: ["None", "Some", "Lots"],
    },
    {
      component: <Question question="Will you go to any sporting events?" />,
      options: ["None", "Some", "Lots"],
    },
    {
      component: (
        <Question question="Are you interested in going to a festival while traveling like Oktoberfest or King's Day?" />
      ),
      options: ["None", "Some", "Lots"],
    },
  ];

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Box style={{ width: "50vw", padding: "2rem" }}>
          {questions[currentQuestionIndex].component}
        </Box>
        <Box style={{ width: "80%", height: "70%", padding: "1rem" }}>
          {questions[currentQuestionIndex].options &&
            questions[currentQuestionIndex].options.map((option, index) => (
              <CardOption key={index} value={option} />
            ))}
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
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Generate"}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default FormQuestions;

CardOption.propTypes = {
  value: PropTypes.string.isRequired,
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};
