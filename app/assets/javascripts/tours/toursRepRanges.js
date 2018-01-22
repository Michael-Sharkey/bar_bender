$(document).ready(function(){

    var ctx = document.getElementById("repRangesTour");
    var radar = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ["Test (1)", "Strength (2-3)", "Hybrid (4-7)", "Hypertrophy (8-14)", "Endurance (15+)"],
        datasets: [
          {
            label: 'Push',
            data: [30,100,30,30,80],
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
            data: [0,0,90,250,60],
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
            data: [10,90,140,20,0],
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
            data: [50,100,30,0,0],
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
          data: [0,0,0,200,220],
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

});
