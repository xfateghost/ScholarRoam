import { useState } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Typography, Card, Box, Chip, Button, Grid } from "@mui/material";
import ResponsiveAppBar from "./appbar";
import ComponetsIMG from "assets/images/ComponentsIMG.jpg";

function Home() {
  return (
    <PageLayout>
      <Box style={{ padding: "2rem" }}>
        <ResponsiveAppBar />
      </Box>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "88vh",
              width: "40vw",
              marginLeft: "5rem",
            }}
          >
            <Chip
              label=<Typography variant="button">OUR GOAL IS SIMPLE</Typography>
              sx={{
                marginBottom: "1rem",
                background: "linear-gradient(90deg, lightblue, lightgreen)",
                color: "purple",
              }}
            />
            <Typography variant="h1" style={{ textAlign: "center" }}>
              Find out how much you need to budget for study abroad
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center", marginTop: "1rem" }}>
              ScholarRoam utilizes the latest generation of Chat-GPT to find out not only how much
              to budget but also trips, things to do, and restaurant and bar recommendations. It
              works by curating a plan for you by answering a few questions.
            </Typography>
            <Box style={{ alignSelf: "center", marginTop: "2rem" }}>
              <Button
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
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              height: "30em",
              width: "30em",
              marginLeft: "5rem",
              borderRadius: "50%",
              overflow: "hidden",
              marginTop: "8rem",
            }}
          >
            <img
              src={ComponetsIMG}
              alt="Components"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default Home;
