export function MyChart() {
  const ctx = document.querySelector("#myChart").getContext("2d");
  const ctxBar = document.querySelector("#myChartBar").getContext("2d");

  const lables = ["2012", "2013", "2014", "2015"];
  const lablesBar = ["Red", "Yellow", "Blue", "Green"];
  const data = {
    lables,
    datasets: [
      {
        data: [211, 326, 500, 122],
        label: "Minecraft Sales",
      },
    ],
  };

  const dataBar = {
    lablesBar,
    datasets: [
      {
        data: ["Red", "Yellow", "Blue", "Green"],
        label: "Minecraft Sales",
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
    },
  };

  const configBar = {
    type: "line",
    data: dataBar,
    options: {
      responsive: true,
    },
  };

  const myChart = new Chart(ctx, config);
  const myChartBar = new Chart(ctxBar, configBar);
}
