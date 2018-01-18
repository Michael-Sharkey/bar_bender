$(document).ready(function(){

  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: '../graphs/rep_ranges',
    dataType: 'json',
    success: function(data) {
      drawRadar(data);
    },
    failure: function(result) {
      error();
    }
  });

  function error() {
    console.log("Something went wrong!");
  }

  function drawRadar(data) {

  var dataPoints = data.map(obj => [obj.reps, obj.movement_id]);

  var pushReps = dataPoints.filter(x => x[1] === 1);
  var pullReps = dataPoints.filter(x => x[1] === 2);
  var squatReps = dataPoints.filter(x => x[1] === 3);
  var hingeReps = dataPoints.filter(x => x[1] === 4);
  var coreReps = dataPoints.filter(x => x[1] === 5);

    function repRanges(arr) {
      let ranges = [0, 0, 0, 0, 0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 1) {
          ranges[0] += arr[i][1];
        } else if (arr[i][0] > 1 && arr[i][0] <= 3) {
          ranges[1] += arr[i][1];
        } else if (arr[i][0] >= 4 && arr[i][0] <= 7) {
          ranges[2] += arr[i][1];
        } else if (arr[i][0] >= 8 && arr[i][0] <= 14) {
          ranges[3] += arr[i][1];
        } else if (arr[i][0] >= 15) {
          ranges[4] += arr[i][1];
        };
      } return ranges;
    }

    var splitPush = repRanges(pushReps);
    var splitPull = repRanges(pullReps);
    var splitSquat = repRanges(squatReps);
    var splitHinge = repRanges(hingeReps);
    var splitCore = repRanges(coreReps);

    var ctx = document.getElementById("rep-ranges");
    var radar = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ["Test (1)", "Strength (2-3)", "Hybrid (4-7)", "Hypertrophy (8-14)", "Endurance (15+)"],
        datasets: [
          {
            label: 'Push',
            data: splitPush,
            backgroundColor: [
              'rgba(180, 30, 6, 0.2)'
            ],
            borderColor: [
              'rgba(180, 30, 6, 1)'
            ],
            borderWidth: 2
          },
          {
            label: 'Pull',
            data: splitPull,
            backgroundColor: [
              'rgba(15, 71, 199, 0.2)'
            ],
            borderColor: [
              'rgba(15, 71, 199, 1)'
            ],
            borderWidth: 2
          },
          {
            label: 'Squat',
            data: splitSquat,
            backgroundColor: [
              'rgba(238, 205, 23, 0.2)'
            ],
            borderColor: [
              'rgba(238, 205, 23, 1)'
            ],
            borderWidth: 2
          },
          {
            label: 'Hinge',
            data: splitHinge,
            backgroundColor: [
                'rgba(27, 103, 7, 0.2)'
            ],
            borderColor: [
                'rgba(27, 103, 7, 1)'
            ],
            borderWidth: 2
        },
        {
          label: 'Core',
          data: splitCore,
          backgroundColor: [
              'rgba(88, 16, 137, 0.2)'
          ],
          borderColor: [
              'rgba(88, 16, 137, 1)'
          ],
          borderWidth: 2
      },
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Rep Ranges',
          fontSize: "16"
        },
        legend: {
          position: 'bottom'
        }
      }
    });
  }

});
