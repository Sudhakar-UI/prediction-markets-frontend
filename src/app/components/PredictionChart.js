"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PredictionChart = () => {
  const options = {
    chart: {
      type: "spline",
      backgroundColor: "transparent",
      height: 320,
      spacing: [0, 0, 0, 0],
    },

    title: { text: "" },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
      max: 100,
    },

    legend: { enabled: false },

    tooltip: { enabled: false },

    plotOptions: {
      spline: {
        lineWidth: 2,
        marker: {
          enabled: false,
        },
        linecap: "round",
      },
      series: {
        animation: {
          duration: 1000,
        },
      },
    },

    series: [
      {
        name: "Kevin Warsh",
        data: [35, 40, 55, 60, 45, 50, 48, 52, 75, 95],
        color: "#0051C1",
        shadow: {
          color: "#0051C1",
          width: 8,
        },
        marker: {
          enabled: true,
          radius: 4,
          fillColor: "#0051C1",
          lineWidth: 0,
        },
      },
      {
        name: "Judy Shelton",
        data: [20, 18, 15, 12, 10, 8, 7, 6, 5, 4],
        color: "#238758",
        shadow: {
          color: "#1bc98e",
          width: 8,
        },
      },
      {
        name: "Arthur Laffer",
        data: [5, 6, 7, 8, 6, 5, 4, 3, 2, 1],
        color: "#5032A0",
        shadow: {
          color: "#5032A0",
          width: 8,
        },
      },
    ],

    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PredictionChart;