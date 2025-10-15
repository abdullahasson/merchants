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
  const skin = localStorage.getItem('theme');

  if (skin === "dark") {
    var border_color   =   '#1d1a22';
  } else {
    var border_color   =   '#ffffff';
  }

  // dynamic chart colors
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
  // Relaod psge after change color
  for( let i = 0; i < ele.length; i++) {
    ele[i].addEventListener('change', function() {
      document.location.reload()
    })
  }
  // addtional colors
  const text_secondary_500 =   '#ef4444';
  const text_green_500     =   '#22c55e';
  const text_yellow_500    =   '#eab308';
  const text_pink_500      =   '#ec4899';
  const text_blue_500      =   '#7dd3fc';
  
  // Convert HEX TO RGBA
  function hexToRGBA(hex, opacity) {
    if (hex != null) {
      return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    }
  }
  // Demo Charts JS
  const myCharts = function () {
    Chart.defaults.color  =   text_gray_500;
    const gradientPrimary = hexToRGBA( text_primary_500, 0.05);

    // CHART LINE
    const chart_sessions = document.getElementById("DailySessions");
    if ( chart_sessions != null) {
      const gradientBg = hexToRGBA( text_primary_500, 0.01);
      const ctlas = chart_sessions.getContext('2d');
      // sample data session 14 days
      const data_session14 = {
        labels: ['Aug 4', 'Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10','Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
        datasets: [{
          fill: {
            target: 'origin'
          },
          borderColor: text_primary_500,
          borderWidth: 2,
          backgroundColor: gradientBg,
          label: 'Sessions',
          tension: 0.3,
          pointBackgroundColor: text_primary_500,
          pointBorderWidth: 0,
          pointHitRadius: 30,
          pointHoverBackgroundColor: text_primary_500,
          pointHoverRadius: 5,
          pointRadius: 4,
          data: [2720, 3622, 3223, 3462, 2524, 3359, 4789, 2720, 3622, 3223, 3462, 2724, 3359, 4789],
        }],
      }
      // default config session chart
      const data_sessions = new Chart(ctlas, {
        type: 'line',
        data: data_session14,
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
          animation: {
            y: {
              duration: 4000,
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

    // CHART BAR
    const chart_data = document.getElementById("DailyPageviews");
    if ( chart_data != null) {
      const ctlb = chart_data.getContext('2d');
      // sample data pageview 14 days
      const data_pageview14 = {
        labels: ['Aug 4', 'Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10','Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
        datasets: [{
          fill: {
            target: 'origin'
          },
          borderColor: text_primary_500,
          borderRadius: 2,
          backgroundColor: text_primary_500,
          label: 'Pageviews',
          tension: 0.3,
          pointBackgroundColor: text_primary_500,
          pointBorderWidth: 0,
          pointHitRadius: 30,
          pointHoverBackgroundColor: text_primary_500,
          pointHoverRadius: 5,
          pointRadius: 0,
          data: [11220, 14022, 20323, 15462, 15524, 23059, 11489, 11220, 14022, 20323, 15462, 15524, 23059, 11489],
        }],
      }
      // default config pageviews chart
      const data_pageviews = new Chart(ctlb, {
        type: 'bar',
        data: data_pageview14,
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
          animation: {
            y: {
              duration: 4000,
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

    // LINE CHART THIN
    const chart_pageviews = document.getElementById("Pageviews");
    if ( chart_pageviews != null) {
      const ctlax = chart_pageviews.getContext('2d');
      // sample data pageviews 14 days
      const data_pageviews14 = {
        labels: ['4 Aug','5 Aug','6 Aug','7 Aug','8 Aug','9 Aug','10 Aug','11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
        datasets: [{
          fill: {
            target: 'origin'
          },
          backgroundColor: gradientPrimary,
          borderColor: text_yellow_500,
          borderWidth: 1,
          label: 'Pageviews',
          tension: 0.3,
          pointBackgroundColor: text_yellow_500,
          pointBorderWidth: 0,
          pointHitRadius: 30,
          pointHoverBackgroundColor: text_yellow_500,
          pointHoverRadius: 5,
          pointRadius: 0,
          data: [11220, 14022, 20323, 15462, 15524, 23059, 11489, 11220, 14022, 20323, 15462, 15524, 23059, 11489],
        }]
      }
      // default config pageviews chart
      const data_pageviews1 = new Chart(ctlax, {
        type: 'line',
        data: data_pageviews14,
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

    // CHART BAR HORIZONTAL
    const chart_referral = document.getElementById("ChartReferral");
    if ( chart_referral != null) {
      const ctb = chart_referral.getContext('2d');
      // sample data referral 14 days
      const data_referral14 = {
        labels: [
          'Google.com', 'Facebook.com', 'Instagram.com', 'Twitter.com', 'Pinterest.com', 'Tiktok.com', 'Others',
        ],
        datasets: [{
          label: 'Visitor',
          data: [2470, 1920, 1855, 1622, 1598, 1222, 1198],
          borderRadius: 2,
          backgroundColor: [
            text_primary_500,
            hexToRGBA( text_primary_500, 0.8),
            hexToRGBA( text_primary_500, 0.7),
            hexToRGBA( text_primary_500, 0.6),
            hexToRGBA( text_primary_500, 0.5),
            hexToRGBA( text_primary_500, 0.4),
            hexToRGBA( text_primary_500, 0.2)
          ],
          borderColor: [
            text_primary_500,
            hexToRGBA( text_primary_500, 0.8),
            hexToRGBA( text_primary_500, 0.7),
            hexToRGBA( text_primary_500, 0.6),
            hexToRGBA( text_primary_500, 0.5),
            hexToRGBA( text_primary_500, 0.4),
            hexToRGBA( text_primary_500, 0.2)
          ],
          borderWidth: 1
        }]
      }
      // default config referral chart
      const data_referral = new Chart(ctb, {
        type: 'bar',
        data: data_referral14,
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

    // CHART PIE
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
    
    // CHART DOUGHNUT
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

    // BAR CHART 2
    const chart_profit = document.getElementById("BarChart");
    if ( chart_profit != null) {
      const ctsx = chart_profit.getContext('2d');
      // sample data profit daily
      const data_profitday = {
        labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
        datasets: [{
          label: 'Sales',
          data: [1170, 1321, 1835, 1834, 2183, 1504, 2175],
          tooltip: {
            callbacks: {
              label: (Item) => (Item.formattedValue) + '$ Sales'
            }
          },
          backgroundColor: [
            hexToRGBA( text_primary_500, 0.6)
          ],
          borderColor: [
            hexToRGBA( text_primary_500, 0.6)
          ],
          borderWidth: 1
        },
        {
          label: 'Profit',
          data: [670, 721, 835, 734, 683, 724, 875],
          tooltip: {
            callbacks: {
              label: (Item) => (Item.formattedValue) + '$ Profit'
            }
          },
          backgroundColor: [
            text_primary_500,
          ],
          borderColor: [
            text_primary_500,
          ],
          borderWidth: 1
        }]
      }
      // default config profit chart
      const data_profit = new Chart(ctsx, {
        type: 'bar',
        data: data_profitday,
        options: {
          animation: {
            y: {
              duration: 4000,
              from: 500
            }
          },
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
              display: true,
              position: "bottom",
            }
          }
        }
      })
    }

    // LINE AREA
    const chart_linearea = document.getElementById("LineArea");
    if ( chart_linearea != null) {
      const ctla = chart_linearea.getContext('2d');
      
      const gradientIndigo = ctla.createLinearGradient(0, 230, 0, 50);
      gradientIndigo.addColorStop(1, hexToRGBA( text_primary_500, 0.3));
      gradientIndigo.addColorStop(0.2, hexToRGBA( text_primary_500, 0.02));
      gradientIndigo.addColorStop(0, hexToRGBA( text_primary_500, 0.01));

      const LineArea = new Chart(ctla, {
        type: 'line',
        data: {
          labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10', 'Aug 11', 'Aug 12'],
          datasets: [{
            fill: {
              target: 'origin'
            },
            borderColor: text_primary_500,
            backgroundColor: gradientIndigo,
            label: 'Task Complete',
            tension: 0.3,
            pointBackgroundColor: text_primary_500,
            pointBorderWidth: 0,
            pointHitRadius: 30,
            pointHoverBackgroundColor: text_primary_500,
            pointHoverRadius: 5,
            pointRadius: 0,
            data: [120, 462, 323, 184, 187, 362, 324, 429, 289, 559, 461, 394, 541],
          }]
        },
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
          animation: {
            y: {
              duration: 4000,
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

    // LINE CHART INTERPOLATION
    const chart_salestargets = document.getElementById("SalesTargetLine");
    if ( chart_salestargets != null) {
      const ctb = chart_salestargets.getContext('2d');
      const FinChart = new Chart(ctb, {
        type: 'line',
        data: {
          labels: [
            'Nov','Dec','Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
          ],
          datasets: [{
            label: 'Target Sales',
            data: [64080,63080,72080,87080,85080,85080,83080,81080,85080,85080,85080,88080],
            backgroundColor: [
              hexToRGBA( text_pink_500, 0.8),
            ],
            fill: false,
            borderColor: text_pink_500,
            borderDash: [3, 3],
            tension: 0.1,
            cubicInterpolationMode: 'monotone',
            pointBackgroundColor: text_pink_500,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '$ Target'
              }
            }
          }, 
          {
            label: 'Sales',
            data: [61080, 61100, 72055, 84380, 83598, 87680, 77798, 70680, 85798, 92680, 95798, 98000],
            fill: {
              target: 'origin'
            },
            borderColor: text_primary_500,
            backgroundColor: hexToRGBA( text_primary_500, 0.1),
            tension: 0.3,
            pointBackgroundColor: text_primary_500,
            pointBorderWidth: 0,
            pointHitRadius: 30,
            pointHoverBackgroundColor: text_primary_500,
            pointHoverRadius: 5,
            pointRadius: 0,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '$ Sales'
              }
            }
          }]
        },
        options: {
          interaction: {
            mode: 'index',
            intersect: false,
          },
          animation: {
            delay: 2000
          },
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 120000,
              grid: {
                borderDash: [4, 4]
              },
              ticks: {
                // Include % in the ticks
                callback: function(value, index, ticks) {
                    return value + '$';
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }

    // HORIZONTAL CHART BAR 2
    const chart_Growth = document.getElementById("Growth");
    if ( chart_Growth != null) {
      const ctb = chart_Growth.getContext('2d');
      const growChart = new Chart(ctb, {
        type: 'bar',
        data: {
          labels: [
            'Nov','Dec','Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
          ],
          datasets: [{
            type: 'bar',
            label: 'Growth',
            data: [4, -12, 9, 2, -4, -7, -9, -11, 12, 8, 6, 4],
            fill: false,
            backgroundColor: [
              text_primary_500,
              text_pink_500,
              text_primary_500,
              text_primary_500,
              text_pink_500,
              text_pink_500,
              text_pink_500,
              text_pink_500,
              text_primary_500,
              text_primary_500,
              text_primary_500,
              text_primary_500
            ],
            borderColor: [
              text_primary_500,
              text_pink_500,
              text_primary_500,
              text_primary_500,
              text_pink_500,
              text_pink_500,
              text_pink_500,
              text_pink_500,
              text_primary_500,
              text_primary_500,
              text_primary_500,
              text_primary_500
            ],
            barPercentage: 0.4,
            borderWidth: 0,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '%'
              }
            }
          }]
        },
        options: {
          indexAxis: 'y',
          animation: {
            delay: 2000
          },
          scales: {
            y: {
              grid: {
                display: false
              }
            },
            x: {
              beginAtZero: true,
              min: -15,
              max: 15,
              grid: {
                borderDash: [4, 4]
              },
              ticks: {
                // Include % in the ticks
                callback: function(value, index, ticks) {
                    return value + '%';
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }

    // REALTIME CHART BAR
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

    // REALTIME CHART LINE
    const chart_realtimebar = document.getElementById("RealPageviews");
    if ( chart_realtimebar != null) {
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
      let myChart = new Chart(chart_realtimebar, chartConfig);
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
