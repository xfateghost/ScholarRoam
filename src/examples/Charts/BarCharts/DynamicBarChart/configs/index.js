import typography from "assets/theme/base/typography";

function configs(labels, datasets, onChartChange) {
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
          dragDate: true,
          onDragStart: function (e) {
            console.log(e);
          },
          onDrag: function (e, datasetIndex, index, value) {
            console.log(e, datasetIndex, index, value);
            const chart = value.chart;
            if (chart && chart.scales && chart.scales.y) {
              const yAxis = chart.scales.y;
              const currentMax = yAxis.max;
              const margin = 50;

              if (value >= currentMax - margin) {
                const newMax = Math.ceil(value / 100) * 100;
                yAxis.options.max = newMax;
                chart.update();
              }
            }
          },
          onDragEnd: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "default";
            if (onChartChange) {
              onChartChange(value);
            }
            console.log("value:", value);
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
