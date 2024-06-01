/**
=========================================================
* Material Dashboard 2  React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: true,
        maxBarThickness: 55,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          formatter: function (value) {
            return value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });
          },
          display: "auto",
          anchor: "center",
          offset: 30,
          align: "right",
          font: {
            size: "12.5",
            family: typography.fontFamily,
            style: "normal",
            weight: "bold",
          },
          color: "black",
        },
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          stacked: true,
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
            font: {
              size: 12,
              family: typography.fontFamily, // Make sure typography is correctly imported
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          stacked: true,
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
            padding: 10,
            font: {
              size: 14,
              family: typography.fontFamily, // Make sure typography is correctly imported
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}

export default configs;
