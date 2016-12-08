google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Mackeeper', 'BonziBUDDY'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Software Sales',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
var imageArray = [
    "Bonzi_Buddy.png",
    "mackeeper.png",
    "mycleanpc.png"
];
var currentIndex = 0;

function renderImage(){
    $('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
    if (currentIndex==2){
        currentIndex=0
        renderImage();
    }
    else{
        currentIndex++;
        renderImage();
    }
    
}

function backImage(){
    if (currentIndex==0){
        currentIndex=2
        renderImage();
    }
    else{
        currentIndex--;
        renderImage();
    }
}

$('#forwardButton').on('click', forwardImage());
$('#backButton').on('click', backImage());
document.getElementById("#bonzi").innerHTML = "New text!";