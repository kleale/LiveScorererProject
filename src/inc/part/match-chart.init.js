/*
* Chart start
*/
/* 
Chart.js 
https://code.highcharts.com/highcharts.js
*/
/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
/*
Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=Roboto',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
*/

// LIGHT
Highcharts.themeLight = {
   colors: ["#47c54a", "#df4b4f", "#16b4d1", "#2c708e", "#d300aa", "#c19400", "#a2110c", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#f5f5f5'],
            [1, '#fff']
         ]
      },
      style: {
        fontFamily: "'Roboto', sans-serif"
      },
      plotBorderColor: '#EEE'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#555',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#eee',
      labels: {
        style: {
          color: '#aaa'
        }
      },
      lineColor: '#ddd',
      minorGridLineColor: '#ddd',
      tickColor: '#ddd',
      title: {
         style: {
            color: '#ccc'
         }
      }
   },
   yAxis: {
      gridLineColor: '#ddd',
      labels: {
         style: {
            color: '#aaa'
         }
      },
      lineColor: '#eee',
      minorGridLineColor: '#eee',
      tickColor: '#eee',
      tickWidth: 1,
      title: {
         style: {
            color: '#aaa'
         }
      }
   },
   exporting: { enabled: false },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#aaa'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#aaa',
            textTransform: 'uppercase',
            textOutline: "0px 0px contrast"
         },
         marker: {
            lineColor: '#eee'
         }
      },
      boxplot: {
        fillColor: '#aaa'
      },
      candlestick: {
        lineColor: '#aaa'
      },
      errorbar: {
        color: '#aaa'
      },
      bar:{
        borderWidth: '0'
      }
   },
   legend: {
      itemStyle: {
        color: '#aaa'
      },
      itemHoverStyle: {
        color: '#aaa'
      },
      itemHiddenStyle: {
        color: '#aaa'
      }
   },
   credits: {
      style: {
         color: '#aaa'
      }
   },
   labels: {
      style: {
        color: '#aaa'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
        color: '#aaa'
      },
      activeDataLabelStyle: {
        color: '#aaa'
      }
   },
   navigation: {
      buttonOptions: {
         symbolStroke: '#aaa',
         theme: {
            fill: '#aaa'
         }
      }
   },
   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#aaa',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },
   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   }
};

// Apply the theme
//Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions(Highcharts.themeLight);

//#networth-chart
$(function () {
  $('#networth-chart').highcharts({
    chart: {
      type: 'area',
      spacingBottom: 15,
      spacingTop: 15,
      spacingRight: 15
    },
    title: {
      text: ''
    },
    xAxis: {
      labels: {
        enabled: false
      },
    },
    yAxis: {
      title: {
        text: 'Networth'
      },
      tickInterval: 1
    },
    plotOptions: {
      area: {
        pointStart: 10,
        negativeColor: 'red',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false/*,
      layout: 'horizontal',
      verticalAlign: "top",
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
      shadow: false*/
    },
    series: [{
      name: 'Networth',
      data: [0,1,2,3,5,4,3,-5,-4,1,5,7,18,15,14,14,13,15]
    }]
  });
});

  
