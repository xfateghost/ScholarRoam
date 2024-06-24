import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Tooltip as IconTooltip, IconButton } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import configs from "examples/Charts/BarCharts/DynamicBarChart/configs";
import colors from "assets/theme/base/colors";
import { setUpdateChartData } from "context";
import { useMaterialUIController } from "context";
import chartjsPluginDragdata from "chartjs-plugin-dragdata";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ChartDataLabels);
ChartJS.register(chartjsPluginDragdata);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DynamicBarChart({ icon, title, description, height, chart, onChartChange }) {
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

  const { data, options } = configs(chartData.labels, chartData.datasets, onChartChange);

  useEffect(() => {
    setChartData({
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
  }, [chart]);

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
        </MDBox>
      ) : null}
      <MDBox height={height}>
        <Bar data={data} options={options} />
      </MDBox>
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

DynamicBarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

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
  onChartChange: PropTypes.func,
};

export default DynamicBarChart;
