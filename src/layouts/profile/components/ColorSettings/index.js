import React, { useState } from "react";
import PropTypes from "prop-types";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Box, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";

function ThemeOption({ title, colors, onSelect }) {
  const handleClick = () => {
    onSelect(colors);
  };

  return (
    <Card sx={{ width: "17vw", marginBottom: 3 }}>
      <CardActionArea sx={{ padding: 2 }} onClick={handleClick}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
          ))}
        </Box>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

ThemeOption.propTypes = {
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default function Settings() {
  const defaultTheme = {
    colors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  };

  const modernPink = {
    colors: ["#764248", "#dda3b2", "#ffadc6", "#e3c5bb", "#dfe2cf"],
  };

  const forestGreen = {
    colors: ["#3e5641", "#a24936", "#d36135", "#282b28", "#83bca9"],
  };

  const dashoRed = {
    colors: ["#c0bcb5", "#4a6c6f", "#846075", "#af5d63", "#ed474a"],
  };

  const purple = {
    colors: ["#b3c2f2", "#735cdd", "#9000b3", "#7e007b", "#37000a"],
  };

  const mintGreen = {
    colors: ["#6b6054", "#929487", "#a1b0ab", "#c3dac3", "#d5ecd4"],
  };

  const hotPink = {
    colors: ["#190b28", "#685762", "#9b9987", "#efa9ae", "#e55381"],
  };

  const futuristic = {
    colors: ["#61e294", "#7bcdba", "#9799ca", "#bd93d8", "#b47aea"],
  };

  const gold = {
    colors: ["#dad2d8", "#143642", "#0f8b8d", "#ec9a29", "#a8201a"],
  };

  const darkSide = {
    colors: ["#e71d36", "#af4319", "#772014", "#3f220f", "#19180a"],
  };

  const lightTheme = {
    colors: ["#ffffff", "#f0f0f0", "#e0e0e0", "#cccccc", "#b3b3b3"],
  };

  const darkTheme = {
    colors: ["#333333", "#464646", "#555555", "#666666", "#777777"],
  };

  const [selectedColors, setSelectedColors] = useState(defaultTheme.colors);

  const handleThemeSelect = (colors) => {
    setSelectedColors(colors);
  };

  return (
    <div>
      <Typography variant="h2">Color Pallete Settings</Typography>
      <Box mt={3} p={2} sx={{ backgroundColor: selectedColors[0], color: selectedColors[4] }}>
        <Typography variant="h6" sx={{ color: selectedColors[1] }}>
          Heading
        </Typography>
        <Typography variant="body1" sx={{ color: selectedColors[2] }}>
          Body text
        </Typography>
        <Button
          sx={{
            backgroundColor: selectedColors[3],
            color: selectedColors[0],
            height: 50,
            width: 100,
          }}
        >
          Button
        </Button>
      </Box>
      <Box mt={5} mb={3} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Default Theme"
              colors={defaultTheme.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Modern Pink"
              colors={modernPink.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Forest Green"
              colors={forestGreen.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Dash o' Red"
              colors={dashoRed.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption title="Royal Purple" colors={purple.colors} onSelect={handleThemeSelect} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Mint Green"
              colors={mintGreen.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption title="Hot Pink" colors={hotPink.colors} onSelect={handleThemeSelect} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Alternative"
              colors={futuristic.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption title="Red and Gold" colors={gold.colors} onSelect={handleThemeSelect} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption title="Dark Side" colors={darkSide.colors} onSelect={handleThemeSelect} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Light Theme"
              colors={lightTheme.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ThemeOption
              title="Dark Theme"
              colors={darkTheme.colors}
              onSelect={handleThemeSelect}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
