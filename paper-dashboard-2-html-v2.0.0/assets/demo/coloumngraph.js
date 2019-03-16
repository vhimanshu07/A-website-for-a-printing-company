 window.onload = function () {
    
    function addDataPoints() {
  var chart = new CanvasJS.Chart("chartHours", {
    theme: "theme1",//theme1
    title:{
      text: "Column Chart"              
    },
    animationEnabled: true,   
    data: [              
    {
      // Change type to "bar", "area", "spline", "pie",etc.
      type: "column",
      dataPoints: [
        { label: "Jan",  y:Number(document.getElementById('fielda').value)},
        { label: "Feb", y:Number(document.getElementById("fieldb").value)},
        { label: "Mar", y:Number(document.getElementById("fieldc").value)},
        { label: "Apr",  y:Number(document.getElementById("fieldd").value)},
        { label: "May",  y:Number(document.getElementById("fielde").value)},
        {label: "June", y:Number(document.getElementById("fieldf").value)}
      ]
    }
    ]
  });
  chart.render();
}

var renderButton = document.getElementById("renderButton");
  renderButton.addEventListener("click",addDataPoints);
}