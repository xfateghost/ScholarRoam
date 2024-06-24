import React, { useState } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Typography, Card, Box, Chip, Button, Grid, Icon, TextField } from "@mui/material";
import ResponsiveAppBar from "./appbar";
import Stack from "@mui/material/Stack";
import ComponetsIMG from "assets/images/ComponentsIMG.jpg";
import "./home.css";
import PropTypes from "prop-types";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function Offering({ icon, title, description }) {
  return (
    <Stack direction="row" spacing={2}>
      <Card
        sx={{
          width: "4rem",
          height: "4rem",
          background: "linear-gradient(to bottom right, #a8edea, #fed6e3)",
          boxShadow: "0 4px 8px rgba(0, 255, 0, 0.5)",
          borderRadius: "xl",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Icon fontSize="large">{icon}</Icon>
      </Card>
      <Box>
        <Box sx={{ padding: "1em", marginTop: -1 }}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Typography sx={{ marginLeft: "1em" }} variant="subtitle1">
          {description}
        </Typography>
      </Box>
    </Stack>
  );
}

Offering.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function AccordionItem({ panel, title, description, expanded, handleChange }) {
  return (
    <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

AccordionItem.propTypes = {
  panel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expanded: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function Home() {
  const [expanded, setExpanded] = useState(false);
  const outerTheme = useTheme();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <PageLayout>
      <Box className="parallax">
        <Box className="appbar-card">
          <Card>
            <ResponsiveAppBar />
          </Card>
        </Box>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
              }}
            >
              <Card
                sx={{
                  padding: "3rem",
                  background: "linear-gradient(to bottom right, #a8edea, #fed6e3)",
                  boxShadow: "0 4px 8px rgba(0, 255, 0, 0.5)",
                  borderRadius: "xl",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "50%",
                  }}
                >
                  <Chip
                    label={<Typography variant="button">OUR GOAL IS SIMPLE</Typography>}
                    sx={{
                      marginBottom: "1rem",
                      background: "linear-gradient(90deg, lightblue, lightgreen)",
                      color: "purple",
                    }}
                  />
                </Box>
                <Typography variant="h1" style={{ textAlign: "center" }}>
                  Upgrade your study abroad experience
                </Typography>
                <Typography variant="h5" style={{ textAlign: "center", marginTop: "1rem" }}>
                  Generates a curated plan which includes budget and trips suggestions
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2em",
                  }}
                >
                  <Button
                    disableRipple
                    href="./sign-up/form"
                    size="large"
                    sx={{
                      backgroundColor: "lightblue",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "lightgreen",
                        color: "green",
                      },
                    }}
                  >
                    Generate Plan
                  </Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Box className="content">
          <Card sx={{ height: "90vh", background: "linear-gradient(90deg, #FDDDE6, #FBC2EB)" }}>
            <Typography variant="h1" sx={{ textAlign: "center", padding: "2rem" }}>
              What we offer
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ width: "50%", padding: "2em" }}>
                <Stack spacing={6} sx={{ marginLeft: "7em" }}>
                  <Offering
                    icon="account_balance_icon"
                    title="Budget/Trip Ratio"
                    description="See how many average # of trips for your budget"
                  />
                  <Offering
                    icon="book"
                    title="Trip Log"
                    description="Track all of your trips all in one place"
                  />
                  <Offering
                    icon="smart_toy"
                    title="Study Abroad Advisor Bot"
                    description="Live chat with advisor bot for any questions 24/7"
                  />
                  <Offering
                    icon="savings"
                    title="Trip Savings"
                    description="Visualize savings per trip if you book in advance"
                  />
                  <Offering
                    icon="attach_money"
                    title="Track Expenses"
                    description="Track all of your expenses in one place"
                  />
                </Stack>
              </Box>
              <Box sx={{ width: "50%", padding: "2em" }}>
                <Stack spacing={6} sx={{ marginLeft: "4em" }}>
                  <Offering
                    icon="airplane_ticket"
                    title="Travel Planner"
                    description="Track all of your travel plans by day and by trip"
                  />
                  <Offering
                    icon="travel_explore"
                    title="A.I Trip Suggestions"
                    description="Get AI trip suggestions for activities for every trip"
                  />
                  <Offering
                    icon="loyalty"
                    title="Cheapest trip notifications"
                    description="Track the current cheapest flights for all of your trips"
                  />
                  <Offering
                    icon="explore"
                    title="Things To Do Suggestions"
                    description="Get texts of things to do in your host city"
                  />
                  <Offering
                    icon="tips_and_updates"
                    title="Study Abroad Insights"
                    description="Get insights on study abroad"
                  />
                </Stack>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              height: "80vh",
              marginTop: "2rem",
              background: "linear-gradient(90deg, #a8edea, #fed6e3)",
            }}
          >
            <Typography variant="h1" sx={{ textAlign: "center", padding: "2rem" }}>
              How it works
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "2rem" }}>
              <Card
                sx={{
                  height: "50vh",
                  marginTop: "2rem",
                  width: "28vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h3" sx={{ textAlign: "center", marginTop: "2rem" }}>
                  Fill out form
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="https://img.freepik.com/free-vector/illustration-paper_53876-5846.jpg"
                    alt="form"
                    style={{ width: "40%", height: "auto" }}
                  />
                </Box>
                <Box style={{ padding: "1em" }}>
                  <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "2em" }}>
                    Curate your study abroad experience by fine tuning your travel preferences and
                    budgeting needs
                  </Typography>
                </Box>
              </Card>
              <Card
                sx={{
                  height: "50vh",
                  marginTop: "2rem",
                  width: "28vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h3" sx={{ textAlign: "center", marginTop: "2rem" }}>
                  Study Abroad AI
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/010/518/719/non_2x/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"
                    alt="form"
                    style={{ width: "40%", height: "auto" }}
                  />
                </Box>
                <Box style={{ padding: "1em" }}>
                  <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "2em" }}>
                    AI trained specifically on study abroad travel will process the data to give you
                    your curated plan
                  </Typography>
                </Box>
              </Card>
              <Card
                sx={{
                  height: "50vh",
                  marginTop: "2rem",
                  width: "28vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h3" sx={{ textAlign: "center", marginTop: "2rem" }}>
                  Enjoy!
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="https://img.freepik.com/premium-vector/world-vacation-icon-cartoon-vector-globe-travel-map-earth_98402-84466.jpg"
                    alt="form"
                    style={{ width: "40%", height: "auto" }}
                  />
                </Box>
                <Box style={{ padding: "1em" }}>
                  <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "3em" }}>
                    Upgrade your study abroad experience with our built in budget and travel planner
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Card>
          <Card
            sx={{
              height: "80vh",
              marginTop: "2rem",
              background: "linear-gradient(90deg, #fbc2eb, #a6c1ee)",
              display: "flex",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" sx={{ textAlign: "center", marginTop: "2rem" }}>
              Frequently Asked Questions
            </Typography>
            <Box
              sx={{
                width: "50vw",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <AccordionItem
                panel="panel1"
                title="What are some ways to save money while studying abroad?"
                description="Save money by opting for affordable accomodations, cooking meals at home, applying for scholarships, and budgeting using our planner tools."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel2"
                title="Do you provide tips for finding affordable accommodations abroad?"
                description="Yes, we offer tips and resources to find budget friendly accomodations and find the cheapest flights."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel3"
                title="How can I finance my study abroad experience?"
                description="Financing options include scholarships, grants, student loans, part-time jobs, and financial aid. We provide resources and guidance on securing funding and managing finances effectively during your time abroad."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel4"
                title="How do I stay safe while studying abroad?"
                description="It's essential to research safety guidelines and cultural norms of your destination, stay informed about local laws and customs, keep your belongings secure, avoid risky areas, and register with your country's embassy or consulate. Our platform also provides safety tips and emergency contacts for various countries."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel5"
                title="Can I use your platform to plan weekend trips during my study abroad program?"
                description="Yes, our platform allows you to plan and organize weekend trips, excursions, and activities within your budget and timeframe. You can explore nearby attractions, book transportation and accommodations, and discover unique experiences to make the most of your time abroad."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel6"
                title="How can I stay connected with friends and family back home?"
                description="You can stay connected through various means such as social media, messaging apps, video calls, and international calling cards. We also provide tips for managing time zone differences and staying in touch effectively while studying abroad."
                expanded={expanded}
                handleChange={handleChange}
              />
              <AccordionItem
                panel="panel7"
                title="What support services do you offer for students studying abroad?"
                description="We offer personalized support services, including 24/7 assistance, pre-departure orientations, on-site support, emergency assistance, and access to a network of trusted partners and resources to ensure a smooth and enriching study abroad experience."
                expanded={expanded}
                handleChange={handleChange}
              />
            </Box>
          </Card>
          <Card
            sx={{
              height: "40vh",
              marginTop: "2rem",
              background: "linear-gradient(90deg, #ffadad, #ffd6a5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1" sx={{ textAlign: "center" }}>
              Contact Us
            </Typography>
            <Box sx={{ marginTop: "2em" }}>
              <Grid
                component="form"
                noValidate
                autoComplete="off"
                container
                direction="row"
                spacing={2}
                sx={{ width: "50vw" }}
              >
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <Grid item xs={6} md={6} lg={6}>
                    <TextField
                      label="University"
                      variant="outlined"
                      InputProps={{
                        style: {
                          padding: "10px",
                          marginBottom: "15px",
                          width: "300px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      InputProps={{
                        style: {
                          padding: "10px",
                          marginBottom: "15px",
                          width: "300px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField multiline rows={4} label="Message" fullWidth variant="outlined" />
                    <Button variant="contained" sx={{ padding: "0.5em", marginTop: "1em" }}>
                      Send
                    </Button>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Home;
