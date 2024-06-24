/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import naturepfp from "assets/images/naturepfp.jpg";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import SuperSettings from "layouts/profile/components/SuperSettings";
import TripList from "./components/TripList";
import Settings from "./components/ColorSettings";
import FormSettings from "./components/FormSettings";

function ProfileTabContent() {
  return (
    <div>
      <MDBox mt={5} mb={3}>
        <Grid container spacing={3} alignItems="center" mt={-10}>
          <Grid item>
            <MDAvatar src={naturepfp} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                John Doe
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
            <ProfileInfoCard
              title="profile information"
              info={{
                username: "John Doe",
                phone: "(1) 888 800 8889",
                email: "johndoe@mail.com",
                university: "University of San Diego",
                hostcity: "Madrid",
                Plan: "Super Scholar",
              }}
              action={{ tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <SuperSettings />
          </Grid>
        </Grid>
      </MDBox>
      <TripList />
    </div>
  );
}

function FormTabContent() {
  return <FormSettings />;
}

function SettingsTabContent() {
  return <Settings />;
}

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header
        ProfileComponent={ProfileTabContent}
        FormComponent={FormTabContent}
        SettingsComponent={SettingsTabContent}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
