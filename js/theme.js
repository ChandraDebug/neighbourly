'use strict';
Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
Highcharts.theme = {
    colors: ['#00a908','#00abe6' ,'#b81237','#dc5800','#002664','#4c4f55', '#4f4f4f',
        '#752f8a', '#69b32d', '#ff7f2f'],
        
    chart: {
        className: 'digitalnsw',
        style: {
            fontFamily: 'Montserrat, sans-serif'
        },
        plotShadow: false,
        plotBackgroundImage: '',
        plotBackgroundColor: {
            linearGradient: [250, 0, 250, 500],
            stops: [
                [0, 'rgba(255, 255, 255, 1)'],
                [1, 'rgba(255, 255, 255, 0)']
            ]
        },
        plotBorderWidth: 0,
    
       
    },
    
   
    title: {
        style: {
            color: '#000',
           
            fontWeight: '700'
        }
    },
    subtitle: {
        style: {
            color: '#4f4f4f',
            fontWeight: '500'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        lineColor: '#DEE3E5',
        tickColor: '#DEE3E5',
        labels: {
            style: {
                color: '#4f4f4f',
                fontWeight: '700'
            }
        },
        title: {
            style: {
                color: '#4f4f4f',
                fontWeight: '500',
                fontSize: ''
                
            }
        }
    },
    yAxis: {
        alternateGridColor: 'rgba(255, 255, 255, 0.5)',
        lineColor: '#DEE3E5',
        tickColor: '#DEE3E5',
        tickWidth: 1,
        labels: {
            style: {
                color: '#4f4f4f',
                fontWeight: '700'
            }
        },
        title: {
            style: {
                color: '#646974',
               
              
               fontWeight: '500'
            }
        }
    },
    legend: {
        itemStyle: {
            fontWeight: '500',
            fontSize: '9pt',
            color: '#646974',
        },
        itemHoverStyle: {
            color: '#000'
        },
        itemHiddenStyle: {
            color: 'silver'
        }
    },
    labels: {
        style: {
            color: '#646974'
        }
    },
     plotOptions: {
        series: {
             pointWidth: 25,
             lineWidth: 3,
             borderWidth:2,
             cursor: 'pointer',
             borderColor:'#000',
            dataLabels: {
                color: '#646974'
            },
            nullColor: '#4f4f4f'
        },
        line: {
            dataLabels: {
                color: '#CCC'
            },
            marker: {
                lineColor: '#646974'
            }
        },
        spline: {
            marker: {
                lineColor: '#646974'
            }
        },
        scatter: {
            marker: {
                lineColor: '#646974'
            }
        },
        candlestick: {
            lineColor: 'white'
        }
    },

    tooltip:
    {
        borderWidth: 2,
        backgroundColor: '#F4F7F9',
        borderRadius: 0,
        shape: 'callout',
        useHTML: true,
        borderColor:'#646974',
        headerFormat:'<span style="font-weight: 500">{point.key}</span><br/>'
     
       
 
    },
    
        credits: {
            enabled: false
        },
       
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);