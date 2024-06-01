import React, { useState, useCallback } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Grow, Box, Select, MenuItem } from "@mui/material";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Divider from "@mui/material/Divider";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Grid from "@mui/material/Grid";
import FancyPag from "../FancyPag";
import "./DynamicChip.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormControl from "@mui/material/FormControl";
import FormDialog from "examples/Feedback/Dialog";
import EditCard from "layouts/travel/EditCard";
import Edit from "@mui/icons-material/Edit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import CityData from "./Data/CityData";
import FoodData from "./Data/FoodData";
import NightlifeData from "./Data/NightlifeData";

import { styled } from "@mui/system";

const DeleteIconButton = styled(IconButton)({
  visibility: "hidden",
  transition: "visibility 0.1s, opacity 0.1s",
});

const DragIconButton = styled(IconButton)({
  visibility: "hidden",
  transition: "visibility 0.1s, opacity 0.1s",
});

const ListItemWrapper = styled(ListItem)({
  "&:hover .delete-icon": {
    visibility: "visible",
    opacity: 1,
  },
});

const ListIconWrapper = styled(ListItem)({
  "&:hover .drag-icon": {
    visibility: "visible",
    opacity: 1,
  },
  "&:hover .delete-icon": {
    visibility: "visible",
    opacity: 1,
  },
});

const dayIndexArray = ["Friday, January 14th", "Saturday, January 15th", "Sunday, January 16th"];

const citysuggestions = CityData();
const foodsuggestions = FoodData();
const drinksuggestions = NightlifeData();

const Options = ({ suggestions, dayIndex, checked, handleToggle, removeOption }) => {
  if (!Array.isArray(suggestions)) {
    console.error("Suggestions should be an array");
    return null;
  }

  return (
    <List dense component="div" role="list">
      <TransitionGroup>
        {suggestions.map((value, index) => {
          const labelId = `transfer-list-item-${value}-label`;
          const delay = index * 20;

          return (
            <Grow in key={value} timeout={500} style={{ transitionDelay: `${delay}ms` }}>
              <ListItemWrapper key={index} role="listitem">
                <ListItemButton
                  key={value}
                  role="listitem"
                  onClick={() => handleToggle(value)}
                  disableRipple
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  </ListItemIcon>
                  <Card
                    style={{
                      width: "100%",
                      margin: "1%",
                      boxShadow: "none",
                      backgroundColor: "background.paper",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <ListItemText
                      primary={value}
                      primaryTypographyProps={{
                        color: "primary",
                        fontWeight: "medium",
                        variant: "body2",
                      }}
                      id={labelId}
                      sx={{
                        margin: "2.5em 2em",
                        width: "80%",
                        outline: "none",
                        border: "none",
                        padding: "0.7em",
                      }}
                    />
                    <IconButton
                      aria-label="sparkle"
                      sx={{
                        color: "rgba(0, 0, 0, 0.8)",
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        "&:hover": { cursor: "default" },
                      }}
                    >
                      <AutoAwesomeIcon />
                    </IconButton>
                  </Card>
                </ListItemButton>
                <DeleteIconButton
                  className="delete-icon"
                  aria-label="trash"
                  onClick={() => removeOption(index)}
                  sx={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, 0.8)",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <DeleteIcon />
                </DeleteIconButton>
              </ListItemWrapper>
            </Grow>
          );
        })}
      </TransitionGroup>
    </List>
  );
};

Options.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  dayIndex: PropTypes.number.isRequired,
  checked: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleToggle: PropTypes.func.isRequired,
  removeOption: PropTypes.func.isRequired,
};

function Task({ task, index, tasks, removeTask }) {
  return (
    <List dense component="div" role="list">
      <ListIconWrapper key={index} role="listitem">
        <DragIconButton
          className="drag-icon"
          aria-label="drag"
          onClick={() => console.log("click")}
          sx={{
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.8)",
            "&:hover": {
              color: "orange",
            },
          }}
        >
          <DragIndicatorIcon />
        </DragIconButton>
        <Card
          style={{
            width: "100%",
            margin: "1%",
            boxShadow: "none",
            backgroundColor: "background.paper",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Badge color="primary" badgeContent={index + 1} />
          <ListItemText
            primary={task.title}
            primaryTypographyProps={{
              color: "primary",
              fontWeight: "medium",
              variant: "body2",
            }}
            id={task.title}
            sx={{
              margin: "1%",
              width: "100%",
              outline: "none",
              border: "none",
              padding: "0.6em",
              marginLeft: "1em",
            }}
          />
        </Card>
        <DeleteIconButton
          className="delete-icon"
          aria-label="trash"
          onClick={() => removeTask(index)}
          sx={{
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.8)",
            "&:hover": {
              color: "red",
            },
          }}
        >
          <DeleteIcon />
        </DeleteIconButton>
      </ListIconWrapper>
    </List>
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
};

function CreateTask({ addTask, dayIndex }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value, dayIndex);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        color="secondary"
        variant="standard"
        type="text"
        value={value}
        label="Add trip plans..."
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
        InputProps={{
          style: {
            fontSize: 15,
            padding: "5px",
            marginBottom: "20px",
            backgroundColor: "white",
          },
        }}
      />
    </form>
  );
}

CreateTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  dayIndex: PropTypes.string.isRequired,
};

export default function DynamicPlan() {
  const [tasks, setTasks] = useState({});
  const [activeChip, setActiveChip] = useState("City");
  const [cardBackgroundColor, setCardBackgroundColor] = useState("rgba(255, 128, 0, 0.10)");
  const [open, setOpen] = useState(false);
  const [trip, setTrip] = React.useState("Madrid");
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [checkedState, setCheckedState] = useState({});

  const ActiveSuggestions = (activeChip) => {
    switch (activeChip) {
      case "City":
        return citysuggestions;
      case "Food":
        return foodsuggestions;
      case "Nightlife":
        return drinksuggestions;
      default:
        return [];
    }
  };

  const getSuggestionsForDays = (chunkIndex, activeChip) => {
    const activeSuggestions = ActiveSuggestions(activeChip);
    return dayIndexArray.map((_, dayIndex) => {
      const startIndex =
        ((chunkIndex * dayIndexArray.length + dayIndex) * 5) % activeSuggestions.length;
      const endIndex = startIndex + 5;
      return activeSuggestions.slice(startIndex, endIndex);
    });
  };

  const [displaySuggestions, setDisplayedSuggestions] = useState(
    getSuggestionsForDays(currentChunkIndex)
  );

  const [showSuggestions, setShowSuggestions] = useState(true);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  React.useEffect(() => {
    if (showSuggestions) {
      setDisplayedSuggestions(getSuggestionsForDays(currentChunkIndex, activeChip));
    } else {
      const filtered = displaySuggestions.map((daySuggestions) =>
        daySuggestions.filter((suggestion) => checkedState[activeChip]?.includes(suggestion))
      );
      setDisplayedSuggestions(filtered);
    }
  }, [showSuggestions, currentChunkIndex, activeChip]);

  const refreshSuggestions = () => {
    const activeSuggestions = ActiveSuggestions(activeChip);
    const nextChunkIndex =
      (currentChunkIndex + 1) % Math.ceil(activeSuggestions.length / (dayIndexArray.length * 5));
    setCurrentChunkIndex(nextChunkIndex);
    setDisplayedSuggestions(getSuggestionsForDays(nextChunkIndex, activeChip));
  };

  const handleToggle = (value) => {
    setCheckedState((prevState) => {
      const currentChecked = prevState[activeChip] || [];
      const currentIndex = currentChecked.indexOf(value);
      const newChecked = [...currentChecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      return { ...prevState, [activeChip]: newChecked };
    });
  };

  const removeOption = (dayIndex, suggestionIndex) => {
    setDisplayedSuggestions((prevSuggestions) => {
      const newSuggestions = [...prevSuggestions];
      if (newSuggestions[dayIndex]) {
        newSuggestions[dayIndex].splice(suggestionIndex, 1);
      }
      return newSuggestions;
    });
  };

  const chipArray = ["City", "Food", "Nightlife"];

  const handleChipClick = (chipName, color) => {
    setActiveChip(chipName);
    setCardBackgroundColor(color);
    console.log(color);
  };

  const handleAddTask = (newTask, dayIndex) => {
    setTasks((prevTasks) => {
      const chipTasks = prevTasks[activeChip] || {};
      const dayTasks = chipTasks[dayIndex] || [];
      return {
        ...prevTasks,
        [activeChip]: {
          ...chipTasks,
          [dayIndex]: [...dayTasks, { title: newTask, completed: false }],
        },
      };
    });
  };

  const removeTask = (dayIndex, taskIndex) => {
    setTasks((prevTasks) => {
      const chipTasks = prevTasks[activeChip] || {};
      const dayTasks = chipTasks[dayIndex] || [];
      dayTasks.splice(taskIndex, 1);
      return {
        ...prevTasks,
        [activeChip]: {
          ...chipTasks,
          [dayIndex]: dayTasks,
        },
      };
    });
  };

  const cityBgColor = "rgba(255, 128, 0, 0.10)";
  const foodBgColor = "rgba(0, 204, 0, 0.10)";
  const drinkBgColor = "rgba(102, 0, 204, 0.10)";

  const getCardBackgroundColor = (activeChip) => {
    switch (activeChip) {
      case "City":
        return cityBgColor;
      case "Food":
        return foodBgColor;
      case "Nightlife":
        return drinkBgColor;
      default:
        return "";
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setTrip(selectedValue);
    console.log(selectedValue);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    width: "100%",

    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    width: "100%",
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }

      const dayIndex = result.source.droppableId;
      const reorderedTasks = reorder(
        tasks[activeChip][dayIndex] || [],
        result.source.index,
        result.destination.index
      );

      setTasks((prevTasks) => ({
        ...prevTasks,
        [activeChip]: {
          ...prevTasks[activeChip],
          [dayIndex]: reorderedTasks,
        },
      }));
    },
    [tasks, activeChip]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="card-container">
        <Card
          sx={{
            backgroundColor: "lightblue",
            borderRadius: "8px 8px 0px 0px",
            boxShadow: "none",
            padding: "0.5rem",
            paddingBottom: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Chip color="primary" label="1/14 to 1/16" sx={{ fontSize: "1rem" }} />
          <FormControl
            focused
            variant="standard"
            style={{ minWidth: 150, textAlign: "center", marginLeft: "5em" }}
          >
            <Select value={trip} onChange={handleChange} displayEmpty>
              <MenuItem value={"Madrid"}>
                <Typography>Madrid</Typography>
              </MenuItem>
              <MenuItem value={"Vienna"}>
                <Typography>Vienna</Typography>
              </MenuItem>
              <MenuItem value={"London"}>
                <Typography>London</Typography>
              </MenuItem>
              <MenuItem value={"Paris"}>
                <Typography>Paris</Typography>
              </MenuItem>
              <MenuItem value={"Munich"}>
                <Typography>Munich</Typography>
              </MenuItem>
              <MenuItem value={"Brussels"}>
                <Typography>Brussels</Typography>
              </MenuItem>
              <MenuItem value={"Stockholm"}>
                <Typography>Stockholm</Typography>
              </MenuItem>
              <MenuItem value={"Add new"}>
                <Typography>Add new</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <IconButton sx={{ marginLeft: "auto" }} onClick={handleClickOpen}>
            <Edit />
          </IconButton>
        </Card>
        <nav style={{ position: "sticky", top: 0 }}>
          <Card
            style={{
              backgroundColor: getCardBackgroundColor(activeChip),
              borderRadius: "0px",
              paddingTop: "6px",
            }}
          >
            <Stack direction="row" spacing={2} style={{ padding: "0.3rem", marginLeft: "20px" }}>
              {chipArray.map((chip) => (
                <Badge
                  key={chip}
                  badgeContent={Object.values(tasks[chip] || {}).reduce(
                    (acc, dayTasks) => acc + dayTasks.length,
                    0
                  )}
                  color="primary"
                  overlap="circular"
                >
                  <Chip
                    label={chip}
                    clickable
                    variant="outlined"
                    icon={
                      chip === "City" ? (
                        <LocationCityIcon />
                      ) : chip === "Food" ? (
                        <LunchDiningIcon />
                      ) : (
                        <LocalBarIcon />
                      )
                    }
                    style={{
                      width: "6rem",
                      backgroundColor:
                        activeChip === chip
                          ? chip === "City"
                            ? "rgba(255, 128, 0, 0.50)"
                            : chip === "Food"
                            ? "rgba(0, 204, 0, 0.50)"
                            : "rgba(102, 0, 204, 0.50)"
                          : chip === "Nightlife",
                    }}
                    onClick={() => handleChipClick(chip)}
                  />
                </Badge>
              ))}
              <Chip
                label="Refresh Suggestions"
                clickable
                variant="outlined"
                icon={<RefreshIcon />}
                style={{
                  width: "13em",
                  backgroundColor: "lightgreen",
                }}
                onClick={refreshSuggestions}
              />
              <Tooltip title="Toggle Suggestions">
                <Switch defaultChecked={displaySuggestions} onChange={toggleSuggestions} />
              </Tooltip>
            </Stack>
          </Card>
        </nav>
        <Card
          className="pa3 card"
          style={{
            maxHeight: "30em",
            overflowY: "auto",
            width: "31em",
            height: "30em",
            borderRadius: "0px 0px 8px 8px",
            backgroundColor: getCardBackgroundColor(activeChip),
          }}
        >
          <List sx={{ width: "100%", fontSize: "5px" }}>
            {dayIndexArray.map((dayIndex, dayIndexNumber) => (
              <React.Fragment key={dayIndex}>
                <Typography variant="h6" style={{ marginTop: "1px" }}>
                  {dayIndex}
                </Typography>
                <CreateTask addTask={handleAddTask} dayIndex={dayIndex} />
                <Options
                  key={dayIndex}
                  suggestions={displaySuggestions[dayIndexNumber]}
                  dayIndex={dayIndexNumber}
                  checked={checkedState[activeChip] || []}
                  handleToggle={handleToggle}
                  removeOption={(suggestionIndex) =>
                    removeOption(currentChunkIndex, suggestionIndex)
                  }
                />
                <Droppable droppableId={dayIndex} key={dayIndex}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      <TransitionGroup>
                        {(tasks[activeChip]?.[dayIndex] || []).map((task, taskIndex) => (
                          <Grow key={taskIndex}>
                            <ListItem key={taskIndex} disablePadding>
                              <Draggable
                                key={taskIndex}
                                draggableId={`${dayIndex}-${taskIndex}`}
                                index={taskIndex}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <ListItemText
                                      primary={
                                        <Task
                                          task={task}
                                          index={taskIndex}
                                          tasks={tasks[activeChip][dayIndex]}
                                          removeTask={() => removeTask(dayIndex, taskIndex)}
                                        />
                                      }
                                      primaryTypographyProps={{
                                        color: "primary",
                                        fontWeight: "medium",
                                        variant: "body2",
                                      }}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            </ListItem>
                          </Grow>
                        ))}
                        {provided.placeholder}
                      </TransitionGroup>
                    </div>
                  )}
                </Droppable>
              </React.Fragment>
            ))}
          </List>
        </Card>
        <FormDialog
          title="Edit Travel Info"
          description="Here you can edit the name of your city as well as your travel dates."
          textlabel="City"
          open={open}
          handleClose={handleClose}
          component={<EditCard />}
          showTextField={true}
        />
      </div>
    </DragDropContext>
  );
}
