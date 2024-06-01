import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import MDInput from "components/MDInput";
import PropTypes from "prop-types";
import BackspaceIcon from "@mui/icons-material/Backspace";
import "./ThingsToDo.css";
import { TransitionGroup } from "react-transition-group";
import { Grow } from "@mui/material";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Divider from "@mui/material/Divider";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";

function Task({ task, index, tasks, removeTask, moveTaskUp, moveTaskDown }) {
  return (
    <Draggable bounds="parent">
      <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {index + 1}. {task.title}
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => removeTask(index)}
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <BackspaceIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="move-up"
          onClick={() => moveTaskDown(index)}
          disabled={index === tasks.length - 1}
          sx={{
            "&:hover": {
              color: "rgb(12, 124, 251)",
            },
          }}
        >
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="move-down"
          onClick={() => moveTaskUp(index)}
          disabled={index === 0}
          sx={{
            "&:hover": {
              color: "rgb(12, 124, 251)",
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </div>
    </Draggable>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          color="secondary"
          variant="standard"
          label="Add Trip Plans..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "100%" }}
          InputProps={{
            style: { fontSize: 15, padding: "5px", marginBottom: "20px" },
          }}
        />
      </form>
    </div>
  );
}

export default function ThingsToDo() {
  const [checked, setChecked] = React.useState([0]);
  const [tasks, setTasks] = useState([]);
  const [activeChip, setActiveChip] = useState("City");
  const [cardBackgroundColor, setCardBackgroundColor] = useState("rgba(255, 128, 0, 0.10");

  const [cityTasks, setCityTasks] = useState([]);
  const [foodTasks, setFoodTasks] = useState([]);
  const [nightlifeTasks, setNightlifeTasks] = useState([]);

  const handleChipClick = (chipName, color) => {
    setActiveChip(chipName);
    setCardBackgroundColor(color);
  };

  const addTask = (title) => {
    switch (activeChip) {
      case "City":
        setCityTasks([...cityTasks, { title, completed: false }]);
        break;
      case "Food":
        setFoodTasks([...foodTasks, { title, completed: false }]);
        break;
      case "Nightlife":
        setNightlifeTasks([...nightlifeTasks, { title, completed: false }]);
        break;
      default:
        break;
    }
  };

  const removeTask = (index) => {
    switch (activeChip) {
      case "City":
        const newCityTasks = [...cityTasks];
        newCityTasks.splice(index, 1);
        setCityTasks(newCityTasks);
        break;
      case "Food":
        const newFoodTasks = [...foodTasks];
        newFoodTasks.splice(index, 1);
        setFoodTasks(newFoodTasks);
        break;
      case "Nightlife":
        const newNightlifeTasks = [...nightlifeTasks];
        newNightlifeTasks.splice(index, 1);
        setNightlifeTasks(newNightlifeTasks);
        break;
      default:
        break;
    }
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index - 1];
    newTasks[index - 1] = temp;
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index + 1];
    newTasks[index + 1] = temp;
    setTasks(newTasks);
  };

  return (
    <div className="card-container">
      <Card
        className="pa3 card"
        style={{
          maxHeight: "50rem",
          overflowY: "auto",
          height: "43.5rem",
          backgroundColor: cardBackgroundColor,
        }}
      >
        <Stack direction="row" spacing={2} style={{ padding: "0.3rem" }}>
          <Badge badgeContent={cityTasks.length} color="primary" overlap="circular">
            <Chip
              label="City"
              clickable
              variant="outlined"
              icon={<LocationCityIcon />}
              style={{
                width: "6rem",
                backgroundColor: activeChip === "City" ? "rgba(255, 128, 0, 0.50)" : "",
              }}
              onClick={() => handleChipClick("City", "rgba(255, 128, 0, 0.10)")}
            />
          </Badge>
          <Badge badgeContent={foodTasks.length} color="primary" overlap="circular">
            <Chip
              label="Food"
              clickable
              variant="outlined"
              icon={<LunchDiningIcon />}
              style={{
                width: "6rem",
                backgroundColor: activeChip === "Food" ? "rgba(0, 204, 0, 0.50)" : "",
              }}
              onClick={() => handleChipClick("Food", "rgba(0, 204, 0, 0.10)")}
            />
          </Badge>
          <Badge badgeContent={nightlifeTasks.length} color="primary" overlap="circular">
            <Chip
              label="Nightlife"
              clickable
              variant="outlined"
              icon={<LocalBarIcon />}
              style={{
                width: "6rem",
                backgroundColor: activeChip === "Nightlife" ? "rgba(102, 0, 204, 0.50)" : "",
              }}
              onClick={() => handleChipClick("Nightlife", "rgba(102, 0, 204, 0.10)")}
            />
          </Badge>
        </Stack>
        <Divider
          flexItem={true}
          variant="fullWidth"
          style={{
            backgroundColor: "black",
            height: "0.2px",
            margin: "10px 0",
            border: "none",
            borderTop: "0.5px dotted black",
          }}
        />
        <CreateTask addTask={addTask} autoComplete="off" />
        <List sx={{ width: "100%", fontSize: "5px" }}>
          <TransitionGroup>
            {(() => {
              switch (activeChip) {
                case "City":
                  return cityTasks.map((task, index) => (
                    <Grow key={index}>
                      <ListItem key={index} disablePadding>
                        <Card
                          style={{
                            width: "100%",
                            margin: "1%",
                            boxShadow: "none",
                            bgcolor: "background.paper",
                          }}
                        >
                          <ListItemText
                            primary={
                              <Task
                                task={task}
                                index={index}
                                tasks={cityTasks}
                                removeTask={removeTask}
                                moveTaskUp={moveTaskUp}
                                moveTaskDown={moveTaskDown}
                              />
                            }
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                            }}
                          />
                        </Card>
                      </ListItem>
                    </Grow>
                  ));
                case "Food":
                  return foodTasks.map((task, index) => (
                    <Grow key={index}>
                      <ListItem key={index} disablePadding>
                        <Card
                          style={{
                            width: "100%",
                            margin: "1%",
                            boxShadow: "none",
                            bgcolor: "background.paper",
                          }}
                        >
                          <ListItemText
                            primary={
                              <Task
                                task={task}
                                index={index}
                                tasks={foodTasks}
                                removeTask={removeTask}
                                moveTaskUp={moveTaskUp}
                                moveTaskDown={moveTaskDown}
                              />
                            }
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                            }}
                          />
                        </Card>
                      </ListItem>
                    </Grow>
                  ));
                case "Nightlife":
                  return nightlifeTasks.map((task, index) => (
                    <Grow key={index}>
                      <ListItem key={index} disablePadding>
                        <Card
                          style={{
                            width: "100%",
                            margin: "1%",
                            boxShadow: "none",
                            bgcolor: "background.paper",
                          }}
                        >
                          <ListItemText
                            primary={
                              <Task
                                task={task}
                                index={index}
                                tasks={nightlifeTasks}
                                removeTask={removeTask}
                                moveTaskUp={moveTaskUp}
                                moveTaskDown={moveTaskDown}
                              />
                            }
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                            }}
                          />
                        </Card>
                      </ListItem>
                    </Grow>
                  ));
                default:
                  return null;
              }
            })()}
          </TransitionGroup>
        </List>
      </Card>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  tasks: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  removeTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};

CreateTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
