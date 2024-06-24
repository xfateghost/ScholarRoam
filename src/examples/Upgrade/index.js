import { Typography, Box, Card, Grid, Divider } from "@mui/material";
import { Stack, Button } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import PropTypes from "prop-types";

function Upgrades({ ButtonText }) {
  return (
    <div>
      <Divider sx={{ marginTop: "-20px" }} />
      <Box sx={{ padding: "2em" }}>
        <Stack spacing={3}>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Get texts of things to do in host city</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Track cheapest flight options</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Travel recommendations</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Unlimited travel planning suggestions</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Study Abroad Insights</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Add unlimited trips</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DoneOutlineIcon />
            <Typography variant="h6">Share and edit trips with friends</Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
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
            {ButtonText}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

Upgrades.propTypes = {
  ButtonText: PropTypes.string.isRequired,
};

export default function Upgrade() {
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        <Box sx={{ textAlign: "center", padding: "1em" }}>
          <Typography variant="h1">Upgrade your study abroad experience</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4em",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={4} md={4} lg={4}>
              <Card style={{ height: "65vh", width: "100%" }}>
                <Box sx={{ padding: "2em", textAlign: "center" }}>
                  <Typography variant="h2">Watch Ad</Typography>
                  <Box>
                    <Typography variant="h6">one access token per ad</Typography>
                  </Box>
                </Box>
                <Upgrades ButtonText="Watch Ad" />
              </Card>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Card
                style={{
                  height: "65vh",
                  width: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 128, 255, 0.5)",
                }}
              >
                <Box sx={{ padding: "2em", textAlign: "center" }}>
                  <Typography variant="h2">$50</Typography>
                  <Box>
                    <Typography variant="h6">for semester</Typography>
                  </Box>
                </Box>
                <Upgrades ButtonText="Buy Now" />
              </Card>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Card style={{ height: "65vh", width: "100%" }}>
                <Box sx={{ padding: "2em", textAlign: "center" }}>
                  <Typography variant="h2">$10</Typography>
                  <Box>
                    <Typography variant="h6">per month</Typography>
                  </Box>
                </Box>
                <Upgrades ButtonText="Buy Now" />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </DashboardLayout>
    </div>
  );
}
