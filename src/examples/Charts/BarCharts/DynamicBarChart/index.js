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

import { useState, useMemo, useEffect } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Tooltip as IconTooltip } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// VerticalBarChart configurations
import configs from "examples/Charts/BarCharts/DynamicBarChart/configs";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import { IconButton } from "@mui/material";

import { setUpdateChartData } from "context";
import { useMaterialUIController } from "context";

import chartjsPluginDragdata from "chartjs-plugin-dragdata";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ChartDataLabels);
ChartJS.register(chartjsPluginDragdata);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DynamicBarChart({ icon, title, description, height, chart }) {
  const [chartData, setChartData] = useState({
    labels: chart.labels || [],
    datasets: chart.datasets
      ? chart.datasets.map((dataset) => ({
          ...dataset,
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          fill: true,
          maxBarThickness: 35,
        }))
      : [],
  });

  const [controller, dispatch] = useMaterialUIController();

  const { updateChart } = controller;

  const AddClick = () => {
    console.log("EditClick Called!");
    setChartData((prevChartData) => {
      const newData = prevChartData.datasets[0].data.concat(500);
      const newLabels = prevChartData.labels.concat("Label");
      const updatedDataset = {
        ...prevChartData.datasets[0],
        data: newData,
      };
      const updatedData = {
        ...prevChartData,
        labels: newLabels,
        datasets: [updatedDataset],
      };
      dispatch({ type: "UPDATE_CHART_DATA", value: updatedData });
      return updatedData;
    });
  };

  const DeleteClick = () => {
    console.log("DeleteClick Called!");
    setChartData((prevChartData) => {
      const newData = prevChartData.datasets[0].data.slice(0, -1);
      const newLabels = prevChartData.labels.slice(0, -1);
      const updatedDataset = {
        ...prevChartData.datasets[0],
        data: newData,
      };
      const updatedData = {
        ...prevChartData,
        labels: newLabels,
        datasets: [updatedDataset],
      };
      dispatch({ type: "UPDATE_CHART_DATA", value: updatedData });
      return updatedData;
    });
  };

  const EditClick = () => {
    console.log("Click!");
  };

  const { data, options } = configs(chartData.labels, chartData.datasets);

  const renderChart = (
    <MDBox py={2} pr={2} pl={icon.component ? 1 : 2}>
      {title || description ? (
        <MDBox display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon.component && (
            <MDBox
              width="4rem"
              height="4rem"
              bgColor={icon.color || "dark"}
              variant="gradient"
              coloredShadow={icon.color || "dark"}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </MDBox>
          )}
          <MDBox mt={icon.component ? -2 : 0}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox mb={2}>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>
            </MDBox>
          </MDBox>
          <IconTooltip title="Edit Bar">
            <IconButton style={{ position: "absolute", top: 10, right: 110 }} onClick={EditClick}>
              <EditIcon fontSize="large" />
            </IconButton>
          </IconTooltip>
          <IconTooltip title="Remove Bar">
            <IconButton style={{ position: "absolute", top: 10, right: 60 }} onClick={DeleteClick}>
              <HighlightOffIcon fontSize="large" />
            </IconButton>
          </IconTooltip>
          <IconTooltip title="Add Bar">
            <IconButton style={{ position: "absolute", top: 10, right: 10 }} onClick={AddClick}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </IconTooltip>
        </MDBox>
      ) : null}
      <MDBox height={height}>
        <Bar data={data} options={options} />
      </MDBox>
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of VerticalBarChart
DynamicBarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the SliderBarChart
DynamicBarChart.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    component: PropTypes.node,
  }),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DynamicBarChart;
