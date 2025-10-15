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

  // Chart Color
  const text_pink_500      =   '#ec4899';
  const text_yellow_500    =   '#eab308';
  const text_green_500     =   '#22c55e';
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

    // Sales vs Traget CHART
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

    // Product CHART
    const chart_product = document.getElementById("ProductChartTwo");
    if ( chart_product != null) {
      const ctb = chart_product.getContext('2d');
      const ProlineChart = new Chart(ctb, {
        type: 'bar',
        data: {
          labels: [
            'Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5',
          ],
          datasets: [{
            label: 'Sales',
            data: [12270, 9220, 7155, 6122, 3098],
            backgroundColor: [
              text_blue_500,
              text_blue_500,
              text_pink_500,
              text_pink_500,
              text_pink_500
            ],
            borderColor: [
              text_blue_500,
              text_blue_500,
              text_pink_500,
              text_pink_500,
              text_pink_500
            ],
            borderWidth: 1,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '$ Sales'
              }
            }
          },
          {
            label: 'Target',
            data: [11070, 8220, 8155, 7122, 5098],
            backgroundColor: [
              text_gray_500
            ],
            borderWidth: 1,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '$ Target'
              }
            }
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
              },
              ticks: {
                // Include % in the ticks
                callback: function(value, index, ticks) {
                    return value + '$';
                }
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

    // Chart by region
    const chart_cost = document.getElementById("ChartRegion");
    if ( chart_cost != null) {
      const ctp = chart_cost.getContext('2d');
      const ChartreRegion = new Chart(ctp, {
        type: 'pie',
        data: {
          labels: ['West Region', 'South Region', 'East Region', 'Noth Region'],
          datasets: [{
            label: 'Costs',
            data: [12000, 1950, 12500, 14600],
            backgroundColor: [
              hexToRGBA( text_primary_500, 0.8),
              hexToRGBA( text_pink_500, 0.8),
              hexToRGBA( text_green_500, 0.8),
              hexToRGBA( text_yellow_500, 0.8)
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
              display: true,
              position: "bottom",
            }
          }
        }
      })
    }

    // Growth CHART
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

    // Sales channel
    const chart_channel = document.getElementById("ChannelChart");
    if ( chart_channel != null) {
      const ctd = chart_channel.getContext('2d');
      const EmailChart = new Chart(ctd, {
        type: 'doughnut',
        data: {
          labels: ['Whatsapp','Email','Call', 'Messenger'],
          datasets: [{
            label: 'Sales Actifity',
            data: [925, 30, 57, 252],
            backgroundColor: [
              text_primary_500,
              text_pink_500,
              text_gray_500,
              text_yellow_500
            ],
            hoverOffset: 4
          }]
        },
        options: {
          animation: {
            delay: 2000
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }

    // CMS SMALL CHART BAR
    const chart_barsm = document.getElementById("Profit");
    if ( chart_barsm != null) {
      const ctb = chart_barsm.getContext('2d');
      const gradientIndigo = ctb.createLinearGradient(0, 200, 0, 20);

      gradientIndigo.addColorStop(1, hexToRGBA( text_primary_500 ));
      gradientIndigo.addColorStop(0.2, hexToRGBA( text_pink_500 ));

      const BarChartSm = new Chart(ctb, {
        type: 'bar',
        data: {
          labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10', 'Aug 11'],
          datasets: [{
            label: 'Profit',
            data: [1210, 1462, 1323, 1814, 1187, 1362, 1324, 1429, 2289, 2559, 2461, 3394, 3541],
            backgroundColor: [
              gradientIndigo
            ],
            borderColor: [
              gradientIndigo
            ],
            borderWidth: 1,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '$'
              }
            }
          }]
        },
        options: {
          animation: {
            y: {
              duration: 2000,
              from: 500
            }
          },
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
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
    
    // CMS COMMENTS CHART
    const chart_churn = document.getElementById("churn");
    if ( chart_churn != null) {
      const ctb = chart_churn.getContext('2d');
      const gradientIndigo = ctb.createLinearGradient(0, 200, 0, 20);

      gradientIndigo.addColorStop(1, hexToRGBA( text_pink_500 ));
      gradientIndigo.addColorStop(0.8, hexToRGBA( text_pink_500 ));

      const BarChartSm = new Chart(ctb, {
        type: 'line',
        data: {
          labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
          datasets: [{
            label: 'Margin',
            data: [38, 32, 27, 16, 26, 28, 23],
            backgroundColor: [
              gradientIndigo
            ],
            borderColor: [
              gradientIndigo
            ],
            borderWidth: 1,
            tooltip: {
              callbacks: {
                label: (Item) => (Item.formattedValue) + '%'
              }
            }
          }]
        },
        options: {
          animation: {
            y: {
              duration: 2000,
              from: 500
            }
          },
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
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
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myCharts();

})();