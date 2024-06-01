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

const newLabelClickHandler = function () {
  console.log("Click!");
};

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
      responsive: true,
      onHover: function (e) {
        const point = e.chart.getElementsAtEventForMode(e, "nearest", { intersect: true }, false);
        if (point.length) e.native.target.style.cursor = "n-resize";
        else e.native.target.style.cursor = "default";
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        dragData: {
          round: 0,
          showTooltip: true,
          onDragStart: function (e) {
            console.log(e);
          },
          onDrag: function (e, datasetIndex, index, value) {
            console.log(e, datasetIndex, index, value);
          },
          onDragEnd: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "defaut";
            console.log(datasetIndex, index, value);
          },
        },
        layout: {
          autoPadding: true,
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
          borderWidth: 2,
          borderRadius: 6,
          padding: 4.5,
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
          listeners: {
            enter: function (context) {
              context.hovered = true;
              return true;
            },
            leave: function (context) {
              context.hovered = false;
              return true;
            },
            click: function (context) {
              const dataIndex = context.dataIndex;
              const datasetIndex = context.datasetIndex;
              const label = context.chart.data.labels[dataIndex];
              const position = context.chart
                .getDatasetMeta(0)
                .data[context.dataIndex].getCenterPoint();
              const input = document.createElement("input");
              input.type = "number";
              input.value = context.chart.data.datasets[datasetIndex].data[dataIndex];
              input.style.position = "absolute";
              input.style.top = position.y + "px";
              input.style.left = position.x + 200 + "px";
              input.style.zIndex = 100;
              document.body.appendChild(input);
              input.focus();
              input.addEventListener("blur", () => {
                setTimeout(() => {
                  if (input.parentNode) {
                    context.chart.data.datasets[datasetIndex].data[dataIndex] = parseFloat(
                      input.value
                    );
                    input.parentNode.removeChild(input);
                    context.chart.update();
                  }
                }, 0);
              });
              input.addEventListener("keydown", (event) => {
                setTimeout(() => {
                  if (event.key === "Enter") {
                    context.chart.data.datasets[datasetIndex].data[dataIndex] = parseFloat(
                      input.value
                    );
                    input.parentNode.removeChild(input);
                    context.chart.update();
                  }
                }, 0);
              });
            },
          },
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
          ticks: {
            display: true,
            padding: 10,
            color: "black",
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
            scaleLabel: {
              display: true,
              labelString: "Expenses",
            },
          },
          ticks: {
            display: true,
            color: "black",
            padding: 10,
            font: {
              size: 14,
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
