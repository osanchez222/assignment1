var app = angular.module('app', []);

app.controller('dataController', function($scope, $http) {
  $http.get("https://assignment-1-osanchez222.c9users.io/costs").then(function(response) {
    
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
      });
  });
});

function formatDataTable(chartdata) {
  var data = [];
  var header = ['State', 'Cost'];
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i].STATE);
    temp.push(chartdata[i].AVERAGE_COST);
    data.push(temp);
  }
  

  var g_data = google.visualization.arrayToDataTable(data);
  var geochart = new google.visualization.GeoChart(document.getElementById('chart_div'));
  geochart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
      width: 800,
      height: 600, 
      region: "US", 
      resolution: "provinces",
      colorAxis: {colors: ['#6BE262', 'red']},
      backgroundColor: '#81d4fa',
      datalessRegionColor: '#f8bbd0',
      defaultColor: '#f5f5f5'
     };
      

    return options;
}    