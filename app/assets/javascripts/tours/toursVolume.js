$(document).ready(function(){

  var ctx = document.getElementById("accumVolumeTour");

  var radar = new Chart(ctx, {
      type: 'polarArea',
      data: {
        datasets: [
        {
          data:   [30000, 18000, 50000, 53000, 35000],
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
      }
  });

})
