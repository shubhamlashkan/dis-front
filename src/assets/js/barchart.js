var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = 'black';
 Chart.defaults.global.defaultFontSize = 16;

var data = {
      datasets: [
        {label: '% Present',
            fill: true,
            backgroundColor: [
                'blue',
                'grey'],
            data: [30, 70],
// Notice the borderColor 
            borderColor:['blue', 'grey'],
            borderWidth: [1,1]
        }
    ]
};

// Notice the rotation from the documentation.


var options = {
        title: {
                  display: true,
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
};


// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

// Fun Fact: I've lost exactly 3 of my favorite T-shirts and 2 hoodies this way :|
