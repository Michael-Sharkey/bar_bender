$(document).ready(function(){

  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: '../graphs/volume',
    dataType: 'json',
    success: function(data){
      drawPolar(data);
      },
    failure: function(result){
      error();
      }
  });

function error() {
    console.log("Something went wrong!");
}

function drawPolar(data) {
  console.log(data);
  var pushVol = data.filter(y => y.movement_id === 1).map(x => x.weight * x.reps).reduce( (a, b) => a + b);
  var pullVol = data.filter(y => y.movement_id === 2).map(x => x.weight * x.reps).reduce( (a, b) => a + b);
  var squatVol = data.filter(y => y.movement_id === 3).map(x => x.weight * x.reps).reduce( (a, b) => a + b);
  var hingeVol = data.filter(y => y.movement_id === 4).map(x => x.weight * x.reps).reduce( (a, b) => a + b);
  var coreVol = data.filter(y => y.movement_id === 5).map(x => x.weight * x.reps).reduce( (a, b) => a + b);
  var allVolume = [pushVol, pullVol, squatVol, hingeVol, coreVol];
  console.log(allVolume);

  var ctx = document.getElementById("accumVolume");

  var radar = new Chart(ctx, {
      type: 'polarArea',
      data: {
        datasets: [
        {
          data:   allVolume,
          backgroundColor: [
                            'rgba(180, 30, 6, 0.4)',
                            'rgba(15, 71, 199, 0.4)',
                            'rgba(238, 205, 23, 0.4)',
                            'rgba(27, 103, 7, 0.4)',
                            'rgba(88, 16, 137, 0.4)'
          ],
          borderColor:     [
                            'rgba(180, 30, 6, 1)',
                            'rgba(15, 71, 199, 1)',
                            'rgba(238, 205, 23, 1)',
                            'rgba(27, 103, 7, 1)',
                            'rgba(88, 16, 137, 1)'
          ],
          borderWidth: 2 
        }
      ],
      labels: [ "Push", "Pull", "Squat", "Hinge", "Core" ]
      },
      options: {
        title: {
          display: true,
          text: 'Cumulative Volume By Movement Pattern',
          fontSize: "16"
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      },
  });
};

})
