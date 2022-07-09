class Grafico {
  dibujar (heroe) {
    console.log('No implementada');
  }
}

export function llenarGraficoPie (heroe) {
  // 1. Armamos los dataPoints
  const dataPoints = []
  for (let llave in heroe.powerstats) {
    dataPoints.push({
      name: llave,
      y: heroe.powerstats[llave]
    })
  }
  // 2. Dibujamos el gráfico
  const chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title:{
      text: "State Operating Funds"
    },
    legend:{
      cursor: "pointer",
      itemclick: explodePie
    },
    data: [{
      type: "pie",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: dataPoints
    }]
  });
  chart.render();
}

export function llenarGraficoBarra (heroe) {
  // 1. Armamos los dataPoints
  const dataPoints = []
  for (let llave in heroe.powerstats) {
    dataPoints.push({
      label: llave,
      y: parseInt(heroe.powerstats[llave])
    })
  }
  // 2. Dibujamos el gráfico
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Top Oil Reserves"
    },
    axisY: {
      title: "Reserves(MMbbl)"
    },
    data: [{        
      type: "column",  
      showInLegend: true,
      /*
      dataPoints: [      
        { y: 20, label: "Venezuela" },
        { y: 40,  label: "Saudi" },
        { y: 22,  label: "Canada" },
        { y: 23,  label: "Iran" },
        { y: 65,  label: "Iraq" },
        { y: 54, label: "Kuwait" },
        { y: 23,  label: "UAE" },
        { y: 12,  label: "Russia" }
      ]
      */
      dataPoints: dataPoints
    }]
  });
  chart.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}