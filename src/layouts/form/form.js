import * as React from "react";
import { Box, Stack, Typography, TextField, Button, Slider, CardActionArea } from "@mui/material";
import { Checkbox, FormGroup, FormControlLabel, Divider, CardMedia } from "@mui/material";
import { Card, CardContent, Grid, FormControl } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function BudgetQuestion({ question }) {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
      label: "$",
    },
    {
      value: 1,
      label: "$$",
    },
    {
      value: 2,
      label: "$$$",
    },
    {
      value: 3,
      label: "$$$$",
    },
  ];

  return (
    <FormControl>
      <Box style={{ marginBottom: "2rem", marginTop: "4rem", width: "100%" }}>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>
          {question}
        </Typography>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          aria-label="Temperature"
          defaultValue={1}
          step={1}
          marks={marks}
          min={0}
          max={3}
        />
      </Box>
    </FormControl>
  );
}

BudgetQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

function SliderQuestion({ question }) {
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
    <FormControl component="form" required>
      <Box style={{ marginBottom: "2rem", marginTop: "4rem" }}>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>
          {question}
        </Typography>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          aria-label="Temperature"
          defaultValue={1}
          valueLabelDisplay="auto"
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
    </FormControl>
  );
}

SliderQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

function InputQuestion({ onValueChange }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <FormControl required>
      <Stack spacing={3}>
        <Box style={{ marginBottom: "2rem", width: "50vw" }}>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>
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
              required
              focused
              fullWidth
              value={value}
              onChange={handleChange}
              InputProps={{
                style: { fontSize: "2rem", padding: "1rem" },
              }}
            />
          </Box>
          <SliderQuestion question="How many trips will you go on?" />
        </Box>
      </Stack>
    </FormControl>
  );
}

InputQuestion.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

function CardOption({ value, onValueChange }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onValueChange(event.target.checked);
  };

  return (
    <FormControl component="form" required>
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
              control={<Checkbox checked={checked} onChange={handleChange} />}
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
    </FormControl>
  );
}

function Question({ question }) {
  return (
    <Box style={{ display: "flex", alignItems: "flex-start", position: "relative", top: "0" }}>
      <Typography variant="h1">{question}</Typography>
    </Box>
  );
}

function FormQuestions(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [buttonCount, setButtonCount] = React.useState(0);

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (validateCurrentQuestion()) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setButtonCount(buttonCount + 1);
        props.updateButtonCount(buttonCount + 1);
      } else {
        navigate("/dashboard");
      }
    }
  };

  const validateCurrentQuestion = () => {
    if (currentQuestionIndex === 0 && inputValue.trim() === "") {
      return false;
    }
    if (questions[currentQuestionIndex].options && !checkboxValue) {
      return false;
    }
    return true;
  };

  const questions = [
    { component: <InputQuestion onValueChange={setInputValue} /> },
    {
      component: (
        <>
          <Box sx={{ width: "50vw" }}>
            <Stack>
              <BudgetQuestion question="What is your budget?" />
              <SliderQuestion question="How many people will travel with you?" />
            </Stack>
          </Box>
        </>
      ),
    },
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
      component: <Question question="What type of accomodations you prefer?" />,
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
              <CardOption key={index} value={option} onValueChange={setCheckboxValue} />
            ))}
        </Box>
        <Box style={{ position: "absolute", bottom: 16, right: 16 }}>
          <Button
            onClick={handleNextClick}
            disabled={!validateCurrentQuestion()}
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

FormQuestions.propTypes = {
  updateButtonCount: PropTypes.func.isrequired,
};

CardOption.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};
