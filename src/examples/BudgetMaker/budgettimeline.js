import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const BudgetTimeline = ({ budget, index }) => {
  const { icon, title, amount } = budget;
  return (
    <Card style={{ maxHeight: "400px", width: "100%", overflowY: "auto" }}>
      <Grid>
        <Timeline position="left">
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
              ${amount}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">{icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "18px", px: 2 }}>
              <Typography variant="h6" component="div">
                {title}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Card>
  );
};

BudgetTimeline.propTypes = {
  budget: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    amount: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default BudgetTimeline;
