import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, Grid, Typography, Stack, CardActionArea } from "@mui/material";
import { Card } from "@mui/material";

function QABlock({ question, answer }) {
  return (
    <div>
      <Stack spacing={1}>
        <Typography variant="h5">{question}</Typography>
        <Card sx={{ marginBottom: 3, width: "100%" }}>
          <CardActionArea sx={{ padding: 2 }}>
            <Typography variant="h6" color="primary.main">
              {answer}
            </Typography>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
}

QABlock.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default function FormSettings() {
  return (
    <div>
      <Typography variant="h3">Form Questions</Typography>
      <Box mt={5} mb={3} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <Stack spacing={5}>
          <QABlock question="What city are you studying abroad in?" answer="Madrid" />
          <QABlock question="How many trips are you planning on going on?" answer="Nine" />
          <QABlock question="Which season are you studying abroad?" answer="Spring" />
          <QABlock question="Where will you be living?" answer="Homestay" />
          <QABlock
            question="What gets you excited when visiting a new place?"
            answer="Food, Adventure, Culture"
          />
          <QABlock
            question="What kind of destinations interest you most?"
            answer="City, Beach, Historical Sites"
          />
          <QABlock
            question="Would you rather visit popular spots or locations off the beaten path?"
            answer="Mix of both"
          />
          <QABlock question="What is your preferred travel pace?" answer="Balanced" />
          <QABlock question="What type of accomodations you prefer?" answer="Airbnb" />
          <QABlock
            question="What are your preferences of travel?"
            answer="Mostly outside country but a few in host country"
          />
          <QABlock
            question="What type of food would you like as you travel?"
            answer="As long as it's delicous"
          />
          <QABlock question="How many museums would you like to visit?" answer="Some" />
          <QABlock question="How many bars would you like to visit?" answer="Some" />
          <QABlock question="Will you go to any sporting event?" answer="Some" />
          <QABlock
            question="Are you interested in going to a festival while travelling?"
            answer="Some"
          />
        </Stack>
      </Box>
    </div>
  );
}
