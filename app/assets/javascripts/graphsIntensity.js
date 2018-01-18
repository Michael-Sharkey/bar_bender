$(document).ready(function(){

  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: '../graphs/intensity',
    dataType: 'json',
    success: function(data) {
      drawBubble(data);
    },
    failure: function(result) {
      error();
    }
  });

  function error() {
    console.log("Something went wrong!");
  }

  function drawBubble(data) {
    console.log(data);
    function DataPoint(x, y, r){
      this.x = moment(x, "YYY-MM-DD hh:mm:ss").format("MM-DD-YY");
      this.y = y;
      this.r = r;
    };

    function getMaxes(array){
      var dMaxes = [[],[],[],[]];
      for (let i = 0; i < array.length; i++){
        let obj = new DataPoint(array[i].date, array[i].weight, array[i].reps);
        if (array[i].name === 'Bench Press'){
          dMaxes[0].push(obj);
        } else if (array[i].name === 'Overhead Press'){
          dMaxes[1].push(obj);
        } else if (array[i].name === 'Back Squat'){
          dMaxes[2].push(obj);
        } else if (array[i].name === 'Deadlift'){
          dMaxes[3].push(obj);
        };
      } return dMaxes;
    };

    var dailyMaxes = getMaxes(data);

    var ctx = document.getElementById("dailyMaxes");

    var bubble = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [
        {
          label: 'Bench Press',
          borderColor: 'rgba(180, 30, 6, 1)',
          backgroundColor: 'rgba(180, 30, 6, 0.4)',
          hoverRadius: 6,
          data: dailyMaxes[0]
        },
        {
          label: 'Overhead Press',
          borderColor: 'rgba(15, 71, 199, 1)',
          backgroundColor: 'rgba(15, 71, 199, 0.4)',
          hoverRadius: 6,
          data: dailyMaxes[1]
        },
        {
          label: 'Squat',
          borderColor: 'rgba(238, 205, 23, 1)',
          backgroundColor: 'rgba(238, 205, 23, 0.4)',
          hoverRadius: 6,
          data: dailyMaxes[2]
        },
        {
          label: 'Deadlift',
          borderColor: 'rgba(27, 103, 7, 1)',
          backgroundColor: 'rgba(27, 103, 7, 0.4)',
          hoverRadius: 6,
          data: dailyMaxes[3]
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

  };
})
