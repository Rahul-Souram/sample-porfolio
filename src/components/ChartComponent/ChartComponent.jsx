import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
  const chartData = {
    series: [
      {
        name: "Skillset Percentages",
        data: [90, 75, 85, 90, 80, 75], // Replace with your skillset percentages
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["React", "Redux", "Gatsby", "Javascript", "Scss", "Other"],
      },
      yaxis: {
        title: {
          text: "Percentage",
        },
      },
      title: {
        text: "Skillset Percentages",
        align: "center",
        margin: 20,
        style: {
          fontSize: "20px",
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export { ChartComponent };
