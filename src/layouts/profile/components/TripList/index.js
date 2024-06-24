import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import MadridStreet from "assets/images/MadridStreet.jpg";
import ViennaStreet from "assets/images/ViennaStreet.jpg";
import StockholmStreet from "assets/images/StockholmStreet.jpg";
import LondonStreet from "assets/images/LondonStreet.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function TripList() {
  return (
    <div>
      <MDBox pt={2} px={2} lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium">
          Trips
        </MDTypography>
        <MDBox mb={1}>
          <MDTypography variant="button" color="text">
            Share your trips with friends!
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={MadridStreet}
              label="1/10 - 1/13"
              title="Madrid"
              action={{
                type: "internal",
                route: "/travel",
                color: "info",
                label: "view trip",
              }}
              authors={[
                { image: team1, name: "Elena Morison" },
                { image: team2, name: "Ryan Milly" },
                { image: team3, name: "Nick Daniel" },
                { image: team4, name: "Peterson" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={ViennaStreet}
              label="1/20 - 1/25"
              title="Vienna"
              action={{
                type: "internal",
                route: "/travel",
                color: "info",
                label: "view trip",
              }}
              authors={[{ image: team2, name: "Ryan Milly" }]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={StockholmStreet}
              label="2/5 - 2/7"
              title="Stockholm"
              action={{
                type: "internal",
                route: "/travel",
                color: "info",
                label: "view trip",
              }}
              authors={[
                { image: team4, name: "Peterson" },
                { image: team3, name: "Nick Daniel" },
                { image: team2, name: "Ryan Milly" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={LondonStreet}
              label="2/15 - 2/20"
              title="London"
              action={{
                type: "internal",
                route: "/travel",
                color: "info",
                label: "view trip",
              }}
              authors={[
                { image: team4, name: "Peterson" },
                { image: team3, name: "Nick Daniel" },
              ]}
            />
          </Grid>
        </Grid>
      </MDBox>
    </div>
  );
}
