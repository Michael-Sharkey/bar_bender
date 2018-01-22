$(document).ready(function(){

    var ctx = document.getElementById("dailyMaxesTour");

    var bubble = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [
        {
          label: 'Bench Press',
          borderColor: 'rgba(180, 30, 6, 1)',
          backgroundColor: 'rgba(180, 30, 6, 0.4)',
          hoverRadius: 2,
          data: [
            {x: "01-15-18", y: 135, r: 5},
            {x: "02-15-18", y: 155, r: 5},
            {x: "03-15-18", y: 185, r: 5},
            {x: "04-15-18", y: 205, r: 4},
            {x: "05-15-18", y: 225, r: 5},
            {x: "06-15-18", y: 245, r: 3},
            {x: "07-15-18", y: 275, r: 5},
            {x: "08-15-18", y: 275, r: 7},
            {x: "09-15-18", y: 280, r: 2},
            {x: "10-15-18", y: 285, r: 3},
            {x: "11-15-18", y: 295, r: 5},
            {x: "12-15-18", y: 300, r: 1}
          ]
        },
        {
          label: 'Overhead Press',
          borderColor: 'rgba(15, 71, 199, 1)',
          backgroundColor: 'rgba(15, 71, 199, 0.4)',
          hoverRadius: 2,
          data: [
            {x: "01-25-18", y: 95, r: 5},
            {x: "02-25-18", y: 105, r: 5},
            {x: "03-25-18", y: 115, r: 5},
            {x: "04-25-18", y: 120, r: 4},
            {x: "05-25-18", y: 125, r: 5},
            {x: "06-25-18", y: 130, r: 3},
            {x: "07-25-18", y: 135, r: 5},
            {x: "08-25-18", y: 140, r: 7},
            {x: "09-25-18", y: 145, r: 2},
            {x: "10-25-18", y: 150, r: 3},
            {x: "11-25-18", y: 155, r: 5},
            {x: "12-25-18", y: 165, r: 1}
          ]
        },
        {
          label: 'Squat',
          borderColor: 'rgba(238, 205, 23, 1)',
          backgroundColor: 'rgba(238, 205, 23, 0.4)',
          hoverRadius: 2,
          data: [
            {x: "01-20-18", y: 135, r: 5},
            {x: "02-20-18", y: 185, r: 5},
            {x: "03-20-18", y: 205, r: 5},
            {x: "04-20-18", y: 225, r: 4},
            {x: "05-20-18", y: 245, r: 5},
            {x: "06-20-18", y: 275, r: 3},
            {x: "07-20-18", y: 295, r: 5},
            {x: "08-20-18", y: 300, r: 7},
            {x: "09-20-18", y: 315, r: 2},
            {x: "10-20-18", y: 335, r: 3},
            {x: "11-20-18", y: 345, r: 5},
            {x: "12-20-18", y: 365, r: 1}
          ]
        },
        {
          label: 'Deadlift',
          borderColor: 'rgba(27, 103, 7, 1)',
          backgroundColor: 'rgba(27, 103, 7, 0.4)',
          hoverRadius: 2,
          data: [
            {x: "01-10-18", y: 135, r: 5},
            {x: "02-10-18", y: 185, r: 5},
            {x: "03-10-18", y: 225, r: 5},
            {x: "04-10-18", y: 275, r: 4},
            {x: "05-10-18", y: 295, r: 5},
            {x: "06-10-18", y: 315, r: 3},
            {x: "07-10-18", y: 325, r: 5},
            {x: "08-10-18", y: 335, r: 7},
            {x: "09-10-18", y: 345, r: 2},
            {x: "10-10-18", y: 355, r: 3},
            {x: "11-10-18", y: 365, r: 5},
            {x: "12-10-18", y: 405, r: 1}
          ]
        }
      ],
      },
      options: {
        title: {
          display: true,
          text: 'Daily Training Maxes',
          fontSize: "16"
        },
        legend: {
          display: true,
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                day: 'MM-DD-YY'
              }
            }
          }]
        }
      }
    });

})
