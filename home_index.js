var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: { // Adiciona a configuração do tooltip
        trigger: 'axis', // Trigger para mostrar o tooltip ao passar sobre o eixo
        axisPointer: {
            type: 'line' // Tipo de pointer ao passar o mouse
        }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
        color: '#FFFF',
        fontSize: 12
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        color: '#FFFF',
        fontSize: 12
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 1100, 950, 1200],
      type: 'line',
      smooth: true
    }
  ],
  dataZoom: [ // Adiciona a configuração do dataZoom
    {
        type: 'slider', // Tipo de zoom (slider)
        start: 0, // Porcentagem inicial do zoom
        end: 100 // Porcentagem final do zoom
    },
    {
        type: 'inside', // Tipo de zoom interno
        start: 0,
        end: 100
    }
    ]
};

option && myChart.setOption(option);
