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
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ProgressBar(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 45 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};

function StartQuestion({ onStart, onInstant }) {
  return (
    <Grid container spacing={20}>
      <Grid item xs={6} md={6} lg={6}>
        <Card sx={{ width: "20em", height: "70vh" }}>
          <CardActionArea onClick={onStart} sx={{ height: "100%" }}>
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
        <Card sx={{ width: "20em", height: "70vh" }}>
          <CardActionArea onClick={onInstant} sx={{ height: "100%" }}>
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
  const [init, setInit] = useState(false);
  const [showQuestions, setShowQuestions] = React.useState(false);
  const [totalClicks, setTotalClicks] = useState(0);

  const updateButtonCount = () => {
    setTotalClicks(totalClicks + 1);
  };

  const progressPercentage = (totalClicks / 14) * 100;

  const handleStart = () => {
    setShowQuestions(true);
  };

  const [showInstant, setShowInstant] = React.useState(false);

  const handleInstant = () => {
    setShowInstant(true);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0d47a1",
        },
        links: {
          color: "#0d47a1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <PageLayout>
      <div className="particles-container">
        {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      </div>
      <Card sx={{ textAlign: "center", borderRadius: "0", padding: "0.8rem" }}>
        <Box component={Link} to="/dashboard" lineHeight={3} ml={5}>
          <Typography variant="h3" fontWeight="bold">
            ScholarRoam
          </Typography>
        </Box>
        {showQuestions && (
          <Box sx={{ width: "100%" }}>
            <ProgressBar value={progressPercentage} />
          </Box>
        )}
      </Card>
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
                  <FormQuestions updateButtonCount={updateButtonCount} />
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
