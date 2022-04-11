import { Chart } from "chart.js";

let ctx = document.querySelector("#myChart").getContext("2d");
// let myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Group 1", "Group 2", "Group 3"],
//     datasets: [
//       {
//         label: "Groups",
//         data: [12, 19, 3],
//       },
//     ],
//   },
// });

const lables = ["2012", "2013", "2014", "2015"];
const data = {
  lables,
  dataSets: [
    {
      data: [211, 326, 543, 122],
      label: "Minecraft Sales",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};

const myChart = new Chart(ctx, config);
