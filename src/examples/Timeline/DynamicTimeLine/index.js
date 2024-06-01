import React from "react";
import { Chrono } from "react-chrono";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const DynamicTimeLine = () => {
  const items = [
    {
      date: "3-24-2024",
      cardTitle: "Day 1",
      items: [
        {
          cardTitle: "Visit Segovia",
          media: {
            name: "segovia city",
            source: {
              url: "https://thetourguy.com/wp-content/uploads/2022/06/top-things-to-see-in-Segovia-Spain-Feature-crop-900x420.jpg",
            },
            type: "IMAGE",
          },
        },
        {
          cardTitle: "Visit Segovia Castle",
          media: {
            name: "segovia castle",
            source: {
              url: "https://www.spain.info/.content/images/cabeceras-grandes/castilla-leon/alcazar-segovia-s126594419.jpg",
            },
            type: "IMAGE",
          },
        },
        {
          cardTitle: "Segovia Cathedral",
          media: {
            name: "segovia cathedral",
            source: {
              url: "https://www.spain.info/.content/images/cabeceras-grandes/castilla-leon/catedral-segovia-s318847865.jpg",
            },
            type: "IMAGE",
          },
        },
      ],
    },
    {
      date: "3-25-2024",
      cardTitle: "Day 2",
      items: [
        {
          cardTitle: "Visit Prado Museum",
          media: {
            name: "prado museum",
            source: {
              url: "https://media.cntraveler.com/photos/580775c2fefb7fe774d64246/16:9/w_2560,c_limit/GettyImages-104515838.jpg",
            },
            type: "IMAGE",
          },
        },
        {
          date: "3-24-2024",
          cardTitle: "Shop in Gran Via",
          media: {
            name: "gran via",
            source: {
              url: "https://a.cdn-hotels.com/gdcs/production97/d1300/469ac758-c854-4387-a4aa-ca9a7da6a294.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            },
            type: "IMAGE",
          },
        },
        {
          date: "3-24-2024",
          cardTitle: "Go out in Puerta del Sol",
          media: {
            name: "sol",
            source: {
              url: "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/puerta-del-sol-pano-s1276320760-c-ed-valery-bareta.jpg",
            },
            type: "IMAGE",
          },
        },
      ],
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        disableToolbar={true}
        disableClickOnCircle={true}
        titleDateFormat="ddd, MMMM DD"
      />
    </div>
  );
};

export default DynamicTimeLine;
