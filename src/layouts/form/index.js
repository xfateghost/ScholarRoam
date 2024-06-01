import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate } from "react-router-dom";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "./form.css";
import FormQuestions from "./form";
import InstantQuestions from "./instantform";
import Autocomplete from "@mui/material/Autocomplete";
import { CardContent, CardActionArea, CardMedia } from "@mui/material";
import PropTypes from "prop-types";

function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

function StartQuestion({ onStart, onInstant }) {
  return (
    <Grid container spacing={20}>
      <Grid item xs={6} md={6} lg={6}>
        <Card sx={{ width: "20em" }}>
          <CardActionArea onClick={onStart}>
            <CardMedia
              height="100%"
              image="https://img.freepik.com/premium-vector/vector-flying-blue-diamond-gemstone-illustration-icon_679085-676.jpg"
              alt="diamond"
              style={{ height: 0, paddingTop: "100%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                Custom Budget & Travel Plan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Find out how much to budget for study abroad! Returns a curated budget and travel
                plan after answering several questions. Form takes 5 minutes to complete.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Card sx={{ width: "20em" }}>
          <CardActionArea onClick={onInstant}>
            <CardMedia
              height="100%"
              image="https://img.freepik.com/free-vector/thunderbolt-icon-illustration_32991-970.jpg"
              alt="lightning"
              style={{ height: 0, paddingTop: "100%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                Instant Budget & Travel Plan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Returns a genaralized budget & travel plan depending on your overall budget for
                study abroad.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default function SignUpForm() {
  const [showQuestions, setShowQuestions] = React.useState(false);

  const handleStart = () => {
    setShowQuestions(true);
  };

  const [showInstant, setShowInstant] = React.useState(false);

  const handleInstant = () => {
    setShowInstant(true);
  };

  return (
    <PageLayout>
      <Box style={{ margin: "1rem" }}>
        <Box component={Link} to="/" py={1.5} lineHeight={1} pl={{ xs: 0, lg: 0 }}>
          <Typography variant="button" fontWeight="bold">
            ScholarRoam
          </Typography>
        </Box>
        <Stack>
          <Typography variant="overline">Section 1 of 5</Typography>
          <Typography variant="caption">Share info about your trip</Typography>
        </Stack>
      </Box>
      <LinearDeterminate />
      <Box>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={10} lg={10}>
            <Card
              style={{
                width: "100%",
                display: "flex",
                height: "75vh",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem",
              }}
            >
              <Box>
                {showQuestions ? (
                  <FormQuestions />
                ) : showInstant ? (
                  <InstantQuestions />
                ) : (
                  <StartQuestion onStart={handleStart} onInstant={handleInstant} />
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
}

StartQuestion.propTypes = {
  onStart: PropTypes.func.isRequired,
  onInstant: PropTypes.func.isRequired,
};
