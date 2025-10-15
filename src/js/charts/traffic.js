(function () {
  "use strict";

  /**
   * ------------------------------------------------------------------------
   *  Move the demo script to the footer before </body> 
   *  and edit the script for dynamic data needs.
   * ------------------------------------------------------------------------
   */

  // Theme Colors
  const themes = localStorage.getItem('themes');
  const ele = document.getElementsByName('themes');
  const lightdark = document.querySelectorAll('[data-type="theme"]');
  const skin = localStorage.getItem('theme');

  if (skin === "dark") {
    var border_color   =   '#1d1a22';
  } else {
    var border_color   =   '#ffffff';
  }

  if (themes === "red-theme") {
    var text_primary_500   =   '#c0573e';
    var text_gray_500      =   '#85736f';
  } else if (themes === "green-theme") {
    var text_primary_500   =   '#5a822d';
    var text_gray_500      =   '#75796c';
  } else if (themes === "purple-theme") {
    var text_primary_500   =   '#8069bf';
    var text_gray_500      =   '#7a757f';
  } else if (themes === "yellow-theme") {
    var text_primary_500   =   '#7e7a00';
    var text_gray_500      =   '#7a7769';
  } else {
    var text_primary_500   =   '#4178c1';
    var text_gray_500      =   '#74777f';
  }

  for( let i = 0; i < ele.length; i++) {
    ele[i].addEventListener('change', function() {
      document.location.reload()
    })
  }
  for( let i = 0; i < lightdark.length; i++) {
    lightdark[i].addEventListener('click', function() {
      document.location.reload()
    })
  }
  // addtional colors 
  const text_green_500     =   '#22c55e';
  const text_yellow_500    =   '#eab308';
  const text_pink_500      =   '#ec4899';
  const text_blue_500      =   '#7dd3fc';

  // Demo Charts JS
  const myCharts = function () {
    Chart.defaults.color  =   text_gray_500;
    // Type visitor
    const chart_visitor = document.getElementById("ChartVisitor");
    if ( chart_visitor != null) {
      const ctp = chart_visitor.getContext('2d');
      const VisChart = new Chart(ctp, {
        type: 'pie',
        data: {
          labels: ['New', 'Returning'],
          datasets: [{
            label: 'Visitor',
            data: [3100, 1350],
            borderColor: border_color,
            borderWidth: 1,
            backgroundColor: [
              text_green_500,
              text_primary_500
            ],
            hoverOffset: 4,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.label) +': ' + (Item.formattedValue)
              }
            }
          }]
        },
        options: {
          animation: {
            delay: 2000
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      })
    }
    
    // Channel 
    const chart_browser = document.getElementById("ChannelChart");
    if ( chart_browser != null) {
      const ctd = chart_browser.getContext('2d');
      const BroChart = new Chart(ctd, {
        type: 'doughnut',
        data: {
          labels: ['Direct','Organic Search','Refferal','Social'],
          datasets: [{
            label: 'Browser',
            data: [925, 630, 252, 135],
            backgroundColor: [
              text_yellow_500,
              text_pink_500,
              text_blue_500,
              text_green_500
            ],
            hoverOffset: 4,
            borderColor: border_color,
            borderWidth: 1,
          }]
        },
        options: {
          animation: {
            delay: 2000
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      })
    }

    // Pageviews
    const chart_pageviews = document.getElementById("RealPageviews");
    if ( chart_pageviews != null) {
      let maxDataPoints = 16; // Maximum number of data points to show
      let initialData = {
          labels: [],
          datasets: [{
              label: "Pageviews",
              backgroundColor: text_primary_500,
              borderColor: text_primary_500,
              borderWidth: 1,
              data: Array.from({ length: 16 }, () => getRandomNumber(100, 1000)), // random default data
          }]
      };
      let chartConfig = {
          type: 'line',
          data: initialData,
          options: {
            scales: {
              x: {
                display: true,
                grid: {
                  display: false
                }
              },
              y: {
                display: true,
                grid: {
                  borderDash: [4, 4]
                }
              }
            },
            plugins: {
              legend: {
                display: false
              },
            },
          }
      };
      let myChart = new Chart(chart_pageviews, chartConfig);
      function addData(label, data) {
        myChart.data.labels.push(label);
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        if (myChart.data.labels.length > maxDataPoints) {
          // Remove the oldest data point if the limit is exceeded
          myChart.data.labels.shift();
          myChart.data.datasets.forEach((dataset) => {
              dataset.data.shift();
          });
        }
        myChart.update();
      }
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function addRandomData() {
        let now = new Date();
        let label = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let data = getRandomNumber(100, 1000);
        addData(label, data);
      }
      // Add 16 default data points to the chart
      for (let i = 1; i <= 16; i++) {
        let now = new Date();
        let label = now.getHours() + ":" + now.getMinutes() + ":" + (now.getSeconds() + i);
        let data = getRandomNumber(100, 1000);
        addData(label, data);
      }
      setInterval(addRandomData, 2000); // Add new data every 2 seconds
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myCharts();

})();
