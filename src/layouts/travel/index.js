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

import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Icon from "@mui/material/Icon";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Tooltip as IconTooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SimpleBlogCard from "examples/Cards/SimpleBlogCard";
import ThingsToDo from "examples/Timeline/ThingsToDo";
import FormDialog from "examples/Feedback/Dialog";
import EditCard from "./EditCard";

function Travel() {
  const [cards, setCards] = useState([
    {
      image: "https://media.timeout.com/images/105809001/image.jpg",
      title: "Madrid",
      description: "3/24 to 3/30",
      action: {
        type: "internal",
        route: "/travel/itinerary",
        color: "info",
        label: "Plan trip details",
      },
    },
  ]);
  const [nextCardIndex, setNextCardIndex] = useState(0);
  const handleAddCard = () => {
    const newCard = [
      {
        image:
          "https://www.thesun.co.uk/wp-content/uploads/2023/01/houses-parliament-big-ben-double-780545902.jpg",
        title: "London",
        description: "4/10 to 4/15",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
      {
        image:
          "https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_2580,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg",
        title: "Dublin",
        description: "4/10 to 4/15",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
      {
        image:
          "https://t4.ftcdn.net/jpg/02/78/47/03/360_F_278470364_oLtBQcOFPtyy07N4qsdSnrL2C48Ze5iJ.jpg",
        title: "Vienna",
        description: "4/20 to 4/25",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
      {
        image:
          "https://media.istockphoto.com/id/1221460597/photo/yellow-vintage-tram-on-the-street-in-lisbon-portugal.jpg?s=612x612&w=0&k=20&c=E5LVWw2DH5fHsDadmyiH5KbEfWO_El1vfra1vxLZP74=",
        title: "Lisbon",
        description: "5/15 to 5/25",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
      {
        image:
          "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
        title: "Rome",
        description: "5/30 to 6/5",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
      {
        image:
          "https://media.istockphoto.com/id/637504750/photo/florence.jpg?s=612x612&w=0&k=20&c=iKf4qM3Y8U0QjwINpQGCn_-fAtHCvL-KOGzh_xpQQ7I=",
        title: "Florence",
        description: "6/10 to 6/15",
        action: {
          type: "internal",
          route: "/travel/itinerary",
          color: "info",
          label: "Plan trip details",
        },
      },
    ];
    if (nextCardIndex < newCard.length) {
      setCards((prevCards) => [...prevCards, newCard[nextCardIndex]]);
      setNextCardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDeleteCard = () => {
    if (nextCardIndex > 0) {
      const updatedCards = cards.slice(0, -1);
      setCards(updatedCards);
      setNextCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const [showEditCard, setShowEditCard] = useState(false);
  const handleEditCard = () => {
    setShowEditCard(!showEditCard);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={5}>
        <MDBox mb={0}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{ display: "flex", marginBottom: "20px", position: "relative" }}
              >
                <div style={{ flex: "2" }}>
                  <SimpleBlogCard {...card} />
                  <>
                    <IconTooltip title="Edit Trip">
                      <IconButton
                        style={{
                          position: "absolute",
                          bottom: 100,
                          right: 550,
                        }}
                        onClick={handleClickOpen}
                      >
                        <EditIcon fontSize="large" />
                      </IconButton>
                    </IconTooltip>
                    <IconTooltip title="Add Trip">
                      <IconButton
                        style={{
                          position: "absolute",
                          bottom: 100,
                          right: 450,
                        }}
                        onClick={() => handleAddCard(index)}
                      >
                        <AddCircleIcon fontSize="large" />
                      </IconButton>
                    </IconTooltip>
                    <IconTooltip title="Remove Trip">
                      <IconButton
                        style={{
                          position: "absolute",
                          bottom: 100,
                          right: 500,
                        }}
                        onClick={() => handleDeleteCard(index)}
                      >
                        <HighlightOffIcon fontSize="large" />
                      </IconButton>
                    </IconTooltip>
                  </>
                </div>
                <div style={{ flex: "1" }}>
                  <ThingsToDo />
                  <FormDialog
                    title="Edit Travel Info"
                    description="Here you can edit the name of your city as well as your travel dates."
                    textlabel="City"
                    open={open}
                    handleClose={handleClose}
                    component={<EditCard />}
                    showTextField={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Travel;
