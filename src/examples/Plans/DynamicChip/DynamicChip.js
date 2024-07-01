import React, { useState, useCallback } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Grow, Box, Select, MenuItem, Input } from "@mui/material";
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
import Menu from "@mui/material/Menu";
import { pink } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SaveIcon from "@mui/icons-material/Save";
import { format, eachDayOfInterval, parse } from "date-fns";

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

const SaveIconButton = styled(IconButton)({
  visibility: "hidden",
  transition: "visibility 0.1s, opacity 0.1s",
});

const ListItemWrapper = styled(ListItem)({
  "&:hover .delete-icon": {
    visibility: "visible",
    opacity: 1,
  },
  "&:hover .save-icon": {
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
                  onClick={() => {
                    handleToggle(value);
                    removeOption(index);
                  }}
                >
                  <Tooltip title="Save Suggestion">
                    <SaveIconButton
                      className="save-icon"
                      aria-label="save"
                      sx={{
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover": {
                          color: "green",
                        },
                      }}
                    >
                      <SaveIcon />
                    </SaveIconButton>
                  </Tooltip>
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
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [checkedState, setCheckedState] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState({
    dateRange: {
      startDate: [],
      endDate: [],
    },
  });
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().substr(0, 10);
  });
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    const defaultEndDate = new Date(today);
    defaultEndDate.setDate(defaultEndDate.getDate() + 4);
    return defaultEndDate.toISOString().substr(0, 10);
  });
  const [dayIndexArray, setDayIndexArray] = useState([]);
  const [shortDateRange, setShortDateRange] = useState([]);
  const [shortDateArray, setShortDateArray] = useState([]);
  const [cityDates, setCityDates] = useState([]);
  const [cityArray, setCityArray] = useState(["Madrid"]);
  const [activeTrip, setActiveTrip] = useState(cityArray[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(activeTrip);
  const [tempSelectedCity, setTempSelectedCity] = useState("");
  const [tempDateRange, setTempDateRange] = useState({ startDate: "", endDate: "" });

  const updateDayIndexArrayForActiveTrip = (start, end, newDayIndexArray) => {
    setDayIndexArray((prevDayIndexArray = {}) => {
      const datesArray = eachDayOfInterval({ start, end }).map((date) => ({
        fullDate: format(date, "EEEE, MMMM do"),
      }));
      const dayIndexArray = newDayIndexArray || datesArray.map((date) => date.fullDate);

      if (activeTrip) {
        return {
          ...prevDayIndexArray,
          [activeTrip]: dayIndexArray,
        };
      }

      return dayIndexArray;
    });
  };

  const updateShortDateRangeForActiveTrip = (start, end, newShortDateRange) => {
    setShortDateRange((prevShortDateRange = {}) => {
      const datesArray = eachDayOfInterval({ start, end }).map((date) => ({
        shortRange: format(date, "M/d"),
      }));
      const shortDateRange = newShortDateRange || datesArray.map((date) => date.shortRange);

      if (activeTrip) {
        return {
          ...prevShortDateRange,
          [activeTrip]: shortDateRange,
        };
      }

      return shortDateRange;
    });
  };

  const updateShortDateArrayForActiveTrip = (start, end, newShortDateArray) => {
    setShortDateArray((prevShortDateArray = {}) => {
      const datesArray = eachDayOfInterval({ start, end }).map((date) => ({
        shortDate: format(date, "M/d"),
      }));
      const shortDateArray = newShortDateArray || datesArray.map((date) => date.shortDate);

      if (activeTrip) {
        return {
          ...prevShortDateArray,
          [activeTrip]: shortDateArray,
        };
      }

      return shortDateArray;
    });
  };

  const handleDateChange = (start, end) => {
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);

      if (endDate <= startDate) {
        console.error("End date must be greater than start date");
        return;
      }

      updateDayIndexArrayForActiveTrip(startDate, endDate);
      updateShortDateArrayForActiveTrip(startDate, endDate);
      updateShortDateRangeForActiveTrip(startDate, endDate);
    }
  };

  React.useEffect(() => {
    handleDateChange(startDate, endDate);
  }, []);

  const getLabelForActiveTrip = () => {
    const dates = activeTrip ? shortDateRange[activeTrip] : shortDateRange;
    if (dates && dates.length > 0) {
      return `${dates[0]} to ${dates[dates.length - 1]}`;
    }
    return "";
  };

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
    const activeTripDayIndexArray = dayIndexArray[activeTrip] || [];
    return activeTripDayIndexArray.map((_, dayIndex) => {
      const startIndex =
        ((chunkIndex * activeTripDayIndexArray.length + dayIndex) * 3) % activeSuggestions.length;
      const endIndex = startIndex + 3;
      return activeSuggestions.slice(startIndex, endIndex);
    });
  };

  const [displaySuggestions, setDisplayedSuggestions] = useState(
    getSuggestionsForDays(currentChunkIndex)
  );

  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  React.useEffect(() => {
    if (showSuggestions) {
      setDisplayedSuggestions(getSuggestionsForDays(currentChunkIndex, activeChip));
    } else {
      setDisplayedSuggestions(!showSuggestions);
    }
  }, [showSuggestions, currentChunkIndex, activeChip]);

  const refreshSuggestions = () => {
    const activeSuggestions = ActiveSuggestions(activeChip);
    const activeTripDayIndexArray = dayIndexArray[activeTrip] || [];
    const nextChunkIndex =
      (currentChunkIndex + 1) %
      Math.ceil(activeSuggestions.length / (activeTripDayIndexArray.length * 5));
    setCurrentChunkIndex(nextChunkIndex);
    setDisplayedSuggestions(getSuggestionsForDays(nextChunkIndex, activeChip));
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
      const cityTasks = prevTasks[activeTrip] || {};
      const chipTasks = cityTasks[activeChip] || {};
      const dayTasks = chipTasks[dayIndex] || [];
      return {
        ...prevTasks,
        [activeTrip]: {
          ...prevTasks[activeTrip],
          [activeChip]: {
            ...prevTasks[activeTrip]?.[activeChip],
            [dayIndex]: [...dayTasks, { title: newTask, completed: false }],
          },
        },
      };
    });
  };

  const handleToggle = (value, newTask, dayIndex) => {
    setCheckedState((prevState) => {
      const currentChecked = prevState[activeChip] || [];
      const currentIndex = currentChecked.indexOf(value);
      const newChecked = [...currentChecked];
      if (currentIndex === -1) {
        newChecked.push(value);
        setTasks((prevTasks) => {
          const cityTasks = prevTasks[activeTrip] || {};
          const chipTasks = cityTasks[activeChip] || {};
          const dayTasks = chipTasks[dayIndex] || [];
          return {
            ...prevTasks,
            [activeTrip]: {
              ...prevTasks[activeTrip],
              [activeChip]: {
                ...prevTasks[activeTrip]?.[activeChip],
                [dayIndex]: [...dayTasks, { title: newTask, completed: false }],
              },
            },
          };
        });
      } else {
        newChecked.splice(currentIndex, 1);
        setTasks((prevTasks) => {
          const cityTasks = prevTasks[activeTrip] || {};
          const chipTasks = cityTasks[activeChip] || {};
          const dayTasks = chipTasks[dayIndex] || [];
          const updatedDayTasks = dayTasks.filter((task) => task.title !== newTask);
          return {
            ...prevTasks,
            [activeTrip]: {
              ...prevTasks[activeTrip],
              [activeChip]: {
                ...prevTasks[activeTrip]?.[activeChip],
                [dayIndex]: updatedDayTasks,
              },
            },
          };
        });
      }
      return { ...prevState, [activeChip]: newChecked };
    });
  };

  const removeTask = (dayIndex, taskIndex) => {
    setTasks((prevTasks) => {
      const cityTasks = prevTasks[activeTrip] || {};
      const chipTasks = cityTasks[activeChip] || {};
      const dayTasks = chipTasks[dayIndex] || [];
      dayTasks.splice(taskIndex, 1);
      return {
        ...prevTasks,
        [activeTrip]: {
          ...prevTasks[activeTrip],
          [activeChip]: {
            ...prevTasks[activeTrip]?.[activeChip],
            [dayIndex]: dayTasks,
          },
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

  const cityBgColors = {
    Madrid: "rgba(255, 215, 0, 0.8)", // Bold gold
    Vienna: "rgba(34, 139, 34, 0.8)", // Bold forest green
    London: "rgba(123, 104, 238, 0.8)", // Bold medium slate blue
    Paris: "rgba(220, 20, 60, 0.8)", // Bold crimson
    Munich: "rgba(30, 144, 255, 0.8)", // Bold dodger blue
  };

  const defaultBgColor = "rgba(169, 169, 169, 0.8)";

  const getHeaderBackgroundColor = (activeTrip) => {
    return cityBgColors[activeTrip] || defaultBgColor;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

      const sourceDayIndex = result.source.droppableId;
      const destinationDayIndex = result.destination.droppableId;

      if (sourceDayIndex === destinationDayIndex) {
        const reorderedTasks = reorder(
          tasks[activeTrip][activeChip][sourceDayIndex],
          result.source.index,
          result.destination.index
        );

        setTasks((prevTasks) => ({
          ...prevTasks,
          [activeTrip]: {
            ...prevTasks[activeTrip],
            [activeChip]: {
              ...prevTasks[activeTrip][activeChip],
              [sourceDayIndex]: reorderedTasks,
            },
          },
        }));
      } else {
        const sourceTasks = tasks[activeTrip][activeChip][sourceDayIndex] || [];
        const destinationTasks = tasks[activeTrip][activeChip][destinationDayIndex] || [];

        const [removedTask] = sourceTasks.splice(result.source.index, 1);
        destinationTasks.splice(result.destination.index, 0, removedTask);

        setTasks((prevTasks) => ({
          ...prevTasks,
          [activeTrip]: {
            ...prevTasks[activeTrip],
            [activeChip]: {
              ...prevTasks[activeTrip][activeChip],
              [sourceDayIndex]: sourceTasks,
              [destinationDayIndex]: destinationTasks,
            },
          },
        }));
      }
    },
    [tasks, activeTrip, activeChip]
  );

  React.useEffect(() => {
    validateForm();
  }, [selectedTrip]);

  const validateForm = () => {
    setIsFormValid(true);
  };

  const handleDateEnter = (startDate, endDate) => {
    setSelectedTrip((prev) => ({ ...prev, dateRange: { startDate, endDate } }));
    console.log(startDate, endDate);
    handleDateChange(startDate, endDate);
  };

  const handleEnterCity = (city) => {
    setTextValue(city);
    setActiveTrip(city);
  };

  const handleEnter = () => {
    const updatedCityArray = [...cityArray, textValue];
    const { startDate, endDate } = tempDateRange;

    setCityArray(updatedCityArray);
    setActiveTrip(textValue);

    setSelectedTrip((prev) => ({
      ...prev,
      tempDateRange: { startDate, endDate },
    }));

    handleDateChange(startDate, endDate);

    setTextValue("");
    setTempDateRange({ startDate: "", endDate: "" });
  };

  const handleDateEnterForm = (startDate, endDate) => {
    setTempDateRange({ startDate, endDate });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openCard = Boolean(anchorEl);
  const handleClickCard = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCard = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setTextValue(activeTrip);
  }, [activeTrip]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleCityChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleTripChange = (city) => {
    setActiveTrip(city);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ display: "flex", marginLeft: -6.6 }}>
        <FancyPag
          dayIndexArray={dayIndexArray[activeTrip] || []}
          shortDateArray={shortDateArray[activeTrip] || []}
          bgColor={getHeaderBackgroundColor(activeTrip)}
        />
      </Box>
      <div className="card-container">
        <Card
          sx={{
            backgroundColor: getHeaderBackgroundColor(activeTrip),
            borderRadius: "8px 8px 0px 0px",
            boxShadow: "none",
            padding: "0.5rem",
            paddingBottom: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <div>
            <Chip
              id="day-chip"
              aria-controls={open ? "chip-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickCard}
              color="primary"
              label={getLabelForActiveTrip()}
              sx={{ fontSize: "1rem" }}
            />
            <Menu
              id="chip-menu"
              anchorEl={anchorEl}
              open={openCard}
              onClose={handleCloseCard}
              MenuListProps={{
                "aria-labelledby": "day-chip",
              }}
              PaperProps={{
                style: {
                  width: "350px",
                  height: "450px",
                },
              }}
            >
              <EditCard onFullDateEnter={handleDateEnter} />
            </Menu>
          </div>
          <FormControl
            focused
            noValidate
            autoComplete="off"
            variant="standard"
            style={{ minWidth: 150, textAlign: "center", marginLeft: "7em" }}
            onDoubleClick={handleDoubleClick}
          >
            <Select value={activeTrip} displayEmpty>
              {cityArray.map((city) => (
                <MenuItem key={city} value={city} onClick={() => handleTripChange(city)}>
                  <Typography>{city}</Typography>
                </MenuItem>
              ))}
              <MenuItem value={"Add new"} onClick={handleClickOpen}>
                <Typography>Add new</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <IconButton style={{ marginLeft: "auto" }} onClick={handleClickOpen}>
            <EditIcon />
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
                        <LocationCityIcon sx={{ fontSize: "15px" }} />
                      ) : chip === "Food" ? (
                        <LunchDiningIcon sx={{ fontSize: "15px" }} />
                      ) : (
                        <LocalBarIcon sx={{ fontSize: "15px" }} />
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
                icon={<RefreshIcon fontSize="small" />}
                style={{
                  width: "13em",
                  backgroundColor: "lightgreen",
                }}
                onClick={refreshSuggestions}
              />
              <Tooltip title="Toggle Suggestions">
                <Switch defaultChecked={false} onChange={toggleSuggestions} />
              </Tooltip>
            </Stack>
          </Card>
        </nav>
        <Card
          className="pa3 card"
          style={{
            maxHeight: "68.2vh",
            overflowY: "auto",
            width: "31em",
            height: "68.2vh",
            borderRadius: "0px 0px 8px 8px",
            backgroundColor: getCardBackgroundColor(activeChip),
          }}
        >
          <List sx={{ width: "100%", fontSize: "5px" }}>
            {dayIndexArray[activeTrip]?.map((dayIndex, dayIndexNumber) => (
              <React.Fragment key={dayIndex}>
                <Typography variant="h6" id={dayIndex} style={{ marginTop: "1px" }}>
                  {dayIndex}
                </Typography>
                <Droppable droppableId={dayIndex} key={dayIndex}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      <CreateTask addTask={handleAddTask} dayIndex={dayIndex} />
                      <Options
                        suggestions={displaySuggestions[dayIndexNumber] || []}
                        dayIndex={dayIndexNumber}
                        checked={checkedState[activeChip] || []}
                        handleToggle={(value) => handleToggle(value, value, dayIndex)}
                        removeOption={(suggestionIndex) =>
                          removeOption(dayIndexNumber, suggestionIndex)
                        }
                      />
                      <TransitionGroup>
                        {(tasks[activeTrip]?.[activeChip]?.[dayIndex] || []).map(
                          (task, taskIndex) => (
                            <Grow key={taskIndex}>
                              <ListItem key={taskIndex} disablePadding>
                                <Draggable
                                  key={`${dayIndex}-${taskIndex}`}
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
                                            tasks={
                                              tasks[activeTrip]?.[activeChip]?.[dayIndex] || []
                                            }
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
                          )
                        )}
                      </TransitionGroup>
                      {provided.placeholder}
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
          inputValue={activeTrip}
          onInput={handleEnterCity}
          handleClose={handleClose}
          isFormValid={isFormValid}
          onEnter={handleEnter}
          component={<EditCard onFullDateEnter={handleDateEnterForm} />}
          showTextField={true}
        />
      </div>
    </DragDropContext>
  );
}
