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

function BudgetTimeline() {
  return (
    <Card style={{ maxHeight: "400px", height: "100%", overflowY: "auto" }}>
      <MDBox>
        <Grid>
          <Timeline position="left">
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $10
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Food
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $5
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Museum
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $300
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Flight
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="h6">
                $40
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "18px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Shopping
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BudgetTimeline;
