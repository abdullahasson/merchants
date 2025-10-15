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
  // addtional colors
  const text_green_500     =   '#22c55e';
  const text_yellow_500    =   '#eab308';
  // Convert HEX TO RGBA
  function hexToRGBA(hex, opacity) {
    if (hex != null) {
      return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    }
  }

  // Demo Charts JS
  const myCharts = function () {
    Chart.defaults.color  =   text_gray_500;

    // Sessions
    const chart_linesmb = document.getElementById("Sessions2");
    if ( chart_linesmb != null) {
       const ctla = chart_linesmb.getContext('2d');
       const gradientIndigo = hexToRGBA( text_primary_500, 0.05);
 
       const LineAreaSm = new Chart(ctla, {
         type: 'line',
         data: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
           datasets: [{
             label: 'Sessions',
             data: [91170, 93612, 96213, 94184, 95173, 98262, 95124, 98524],
             fill: {
                target: 'origin'
             },
             backgroundColor: gradientIndigo,
             borderWidth: 1,
             borderColor: text_primary_500,
             tension: 0.3,
             pointBackgroundColor: text_primary_500,
             pointBorderWidth: 0,
             pointHitRadius: 30,
             pointHoverBackgroundColor: text_primary_500,
             pointHoverRadius: 5,
             pointRadius: 0,
           }],
         },
         options: {
           scales: {
             x: {
               display: false
             },
             y: {
               display: false
             }
           },
           animation: {
             y: {
               duration: 2000,
               from: 500
             }
           },
           plugins: {
             legend: {
               display: false
             },
           },
         }
       })
    }

    // AvgSessions
    const chart_linesmc = document.getElementById("AvgSessions");
    if ( chart_linesmc != null) {
       const ctla = chart_linesmc.getContext('2d');
       const gradientIndigo = hexToRGBA( text_green_500, 0.05);
 
       const LineAreaSm = new Chart(ctla, {
         type: 'line',
         data: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
           datasets: [{
             label: 'Minutes',
             data: [220, 362, 223, 284, 287, 162, 324, 325],
             fill: {
                target: 'origin'
             },
             backgroundColor: gradientIndigo,
             borderColor: text_green_500,
             borderWidth: 1,
             tension: 0.3,
             pointBackgroundColor: text_green_500,
             pointBorderWidth: 0,
             pointHitRadius: 30,
             pointHoverBackgroundColor: text_green_500,
             pointHoverRadius: 5,
             pointRadius: 0,
           }],
         },
         options: {
           scales: {
             x: {
               display: false
             },
             y: {
               display: false
             }
           },
           animation: {
             y: {
               duration: 2000,
               from: 500
             }
           },
           plugins: {
             legend: {
               display: false
             },
           },
         }
       })
    }

    // User register
    const chart_linesm = document.getElementById("UserRegister");
    if ( chart_linesm != null) {
       const ctla = chart_linesm.getContext('2d');
       const gradientIndigo = hexToRGBA( text_yellow_500, 0.05);
 
       const LineAreaSm = new Chart(ctla, {
         type: 'line',
         data: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
           datasets: [{
             fill: {
                target: 'origin'
             },
             backgroundColor: gradientIndigo,
             borderColor: text_yellow_500,
             borderWidth: 1,
             label: 'User register',
             tension: 0.3,
             pointBackgroundColor: text_yellow_500,
             pointBorderWidth: 0,
             pointHitRadius: 30,
             pointHoverBackgroundColor: text_yellow_500,
             pointHoverRadius: 5,
             pointRadius: 0,
             data: [420, 471, 435, 454, 483, 504, 415, 461],
           }],
         },
         options: {
           scales: {
             x: {
               display: false
             },
             y: {
               display: false
             }
           },
           animation: {
             y: {
               duration: 2000,
               from: 500
             }
           },
           plugins: {
             legend: {
               display: false
             },
           },
         }
       })
    }
    
    // Visitor by age
    const chart_age = document.getElementById("ChartAge");
    if ( chart_age != null) {
      const ctb = chart_age.getContext('2d');
      const RefChart = new Chart(ctb, {
        type: 'bar',
        data: {
          labels: [
            '15-24', '25-34', '35-45', '45-55', '56+',
          ],
          datasets: [{
            label: 'Visitor',
            data: [770, 2020, 955, 422, 122],
            backgroundColor: text_primary_500,
            borderColor: text_primary_500,
            borderWidth: 1
          }]
        },
        options: {
          animation: {
            x: {
              duration: 4000,
              from: 0
            }
          },
          scales : {
            x: {
              display: true,
              grid: {
                borderDash: [4, 4]
              }
            },
            y: {
              display: true,
              grid: {
                display: false
              }
            }
          },
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      })
    }

    // User Online
    const user_online = document.getElementById("UserOnline");
    if ( user_online != null) {
      let maxDataPoints = 16; // Maximum number of data points to show
      let initialData = {
          labels: [],
          datasets: [{
              label: "User online",
              backgroundColor: hexToRGBA( text_primary_500, 0.2),
              borderColor: text_primary_500,
              borderWidth: 1,
              data: Array.from({ length: 16 }, () => getRandomNumber(10, 100)), // random default data
          }]
      };
      let chartConfig = {
          type: 'bar',
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
      let myChart = new Chart(user_online, chartConfig);
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
        let data = getRandomNumber(10, 100);
        addData(label, data);
      }
      // Add 16 default data points to the chart
      for (let i = 1; i <= 16; i++) {
        let now = new Date();
        let label = now.getHours() + ":" + now.getMinutes() + ":" + (now.getSeconds() + i);
        let data = getRandomNumber(10, 100);
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
