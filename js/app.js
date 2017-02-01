(function(){
  var myModule = angular.module('webApp', []);


  myModule.controller('MainController',function($scope){
  $scope.name="Vinod Pingale";

  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['VP',1],
          ['AP',1],
          ['PK',1],
          ['RV', 1],
          ['SJ',1],
          ['PM',1],
          ['HA',1],
          ['AD',1],
          ['SD',1],
          ['PP',1],
          ['PJ',1],
          ['PT',1],
          ['SB',1],
          ['AN',1],
          ['NB',1],
          ['MN',1],
          ['JC',1],
          ['RR',1],
          ['AG',1],
          ['SM',1],
          ['YM',1],
          ['SS',1]

        ]);

        var options = {
          title: '',
           legend: 'none',
            pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


  })

})();
