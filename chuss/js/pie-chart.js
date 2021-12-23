anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "1st Month", value: 223553265},
      {x: "2nd Month", value: 38929319},
      {x: "3rd Month", value: 2932248},
      {x: "4th Month", value: 14674252},
      {x: "5th Month", value: 540013},
      {x: "6th Month", value: 19107368},
      {x: "7th Month", value: 9009073}
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Work Progress");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();

});