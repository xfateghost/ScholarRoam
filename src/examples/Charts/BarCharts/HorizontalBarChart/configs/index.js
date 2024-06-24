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

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        fill: true,
        maxBarThickness: 60,
      })),
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
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
          display: function (context) {
            return context.active || context.dataset.data[context.dataIndex] != null;
          },
          anchor: "center",
          align: "center",
          font: {
            size: "12.5",
            family: typography.fontFamily,
            style: "normal",
            weight: "bold",
          },
          borderWidth: 1,
          borderRadius: 5,
          padding: 1.5,
          borderColor: function (context) {
            return context.hovered ? "black" : "white";
          },
          backgroundColor: "white",
          labels: {
            title: "",
            value: {
              color: "black",
            },
          },
        },
      },
      scales: {
        y: {
          stacked: true,
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            color: "black",
            padding: 10,
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          stacked: true,
          grid: {
            stacked: true,
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            color: "black",
            padding: 20,
            font: {
              size: 11,
              family: typography.fontFamily,
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
