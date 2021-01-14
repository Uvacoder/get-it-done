import { Bar } from "react-chartjs-2";

function chart({ goals }) {
  // const data = goals.map((goal) => {
  //   return { x: goal.name, y: goal.duration };
  // });

  const labels = goals.map((goal) => goal.name);
  const label = "Seconds";
  const data = {
    labels,
    datasets: [
      {
        label,
        backgroundColor: goals.map((goal) => "rgba(237, 132, 214, 0.5)"),
        data: goals.map((goal) =>
          goal.isActive
            ? goal.duration +
              (new Date().getTime() -
                new Date(goal.latestStartTimeStamp).getTime()) /
                1000
            : goal.duration
        ),
      },
    ],
  };
  const options = {
    legend: { display: false },
    title: { display: true, text: "Time spent per goal" },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // callback: function (value, index, values) {
            //   return abbreviateNumber(value);
            // },
            beginAtZero: true,
          },
        },
      ],
    },
  };

  console.log(data);

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default chart;
