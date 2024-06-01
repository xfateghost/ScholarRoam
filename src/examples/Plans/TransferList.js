import * as React from "react";
import { Card, Divider, Chip, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton, Box, List, ListItemButton, ListItemIcon } from "@mui/material";
import { Checkbox, ListItemText, Grow } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";

const suggestions = [
  "Go to the Prado Museum",
  "Check out Sol",
  "Check out Castle Sol",
  "Eat at Tacos Al Pastor",
  "Day trip to Segovia",
  "Visit the Royal Palace of Madrid",
  "Stroll through Retiro Park",
  "Explore the Reina Sofía Museum",
  "See the Thyssen-Bornemisza Museum",
  "Visit the Temple of Debod",
  "Check out Gran Via",
  "Shop at El Rastro Market",
  "Eat churros at San Ginés",
  "Experience Flamenco at Corral de la Morería",
  "Visit the Santiago Bernabéu Stadium",
  "Explore Malasaña neighborhood",
  "Eat tapas in La Latina",
  "Visit the Sorolla Museum",
  "See the Almudena Cathedral",
  "Walk around Plaza Mayor",
  "Check out Mercado de San Miguel",
  "Visit the Naval Museum",
  "Explore the National Archaeological Museum",
  "Enjoy the view from Círculo de Bellas Artes",
  "Have a picnic at Casa de Campo",
  "Discover the Cuatro Torres Business Area",
  "Take a tour of the Las Ventas Bullring",
  "Visit the Madrid Río Park",
  "See the Teatro Real (Royal Theatre)",
  "Relax at Hammam Al Ándalus",
  "Dine at Sobrino de Botín (world's oldest restaurant)",
  "Drink at rooftop bars like Círculo de Bellas Artes",
  "Visit the CaixaForum Madrid",
  "Explore the Lavapiés neighborhood",
  "Have a drink at Sala Equis",
  "Check out the Matadero Madrid cultural center",
  "Eat at Mercado de San Antón",
  "Visit the El Retiro Crystal Palace",
  "See the Puerta de Alcalá",
  "Explore the Museo del Romanticismo",
  "Visit the Real Jardín Botánico",
  "Take a photo at Kilometre Zero (Puerta del Sol)",
  "Have a night out at Joy Eslava nightclub",
  "Visit the Estación de Atocha (Atocha Train Station)",
  "Explore the Plaza de España",
  "Visit the Museo de Historia de Madrid",
  "Watch a show at Teatro Español",
  "Dine at DiverXO (three Michelin stars)",
  "Visit the Madrid Wax Museum",
  "Take a walk along the Manzanares River",
];

const CustomList = ({ items, checked, handleToggle }) => (
  <List dense component="div" role="list">
    <TransitionGroup>
      {items.map((value, index) => {
        const labelId = `transfer-list-item-${value}-label`;
        const delay = index * 20;

        return (
          <Grow in key={value} timeout={500} style={{ transitionDelay: `${delay}ms` }}>
            <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </Grow>
        );
      })}
    </TransitionGroup>
  </List>
);

CustomList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default function TransferList({ onAddTasks, onRemoveTasks }) {
  const [checked, setChecked] = React.useState([]);
  const [displayedSuggestions, setDisplayedSuggestions] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      onAddTasks([value]);
    } else {
      newChecked.splice(currentIndex, 1);
      onRemoveTasks([value]);
    }
    setChecked(newChecked);
  };

  const getNextSuggestions = () => {
    const nextIndex = index + 10;
    const nextSuggestions = suggestions.slice(index, nextIndex);
    setIndex(nextIndex >= suggestions.length ? 0 : nextIndex);
    return nextSuggestions;
  };

  const refreshSuggestions = () => {
    setChecked([]);
    setDisplayedSuggestions(getNextSuggestions());
  };

  React.useEffect(() => {
    refreshSuggestions();
  }, []);

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "lightblue",
          borderRadius: "8px 8px 0px 0px",
          boxShadow: "none",
          padding: "0.8rem",
          paddingBottom: "0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Trip Suggestions</Typography>
      </Card>
      <Card
        style={{
          maxHeight: "30em",
          overflowY: "auto",
          width: "30em",
          height: "30em",
          backgroundColor: "lightyellow",
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        <Chip
          label="Refresh Suggestions"
          clickable
          variant="outlined"
          icon={<RefreshIcon />}
          style={{
            width: "15em",
            backgroundColor: "lightgreen",
            margin: "1em",
          }}
          onClick={refreshSuggestions}
        />
        <Divider
          flexItem={true}
          variant="fullWidth"
          style={{
            backgroundColor: "black",
            height: "0.2px",
            border: "none",
            marginLeft: "1em",
            marginRight: "1em",
            marginBottom: "1em",
          }}
        />
        <CustomList items={displayedSuggestions} checked={checked} handleToggle={handleToggle} />
      </Card>
    </div>
  );
}

TransferList.propTypes = {
  onAddTasks: PropTypes.func.isRequired,
  onRemoveTasks: PropTypes.func.isRequired,
};
