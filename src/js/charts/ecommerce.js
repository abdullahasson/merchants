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
    // SOURCE CHART
    const chart_source = document.getElementById("SourceChart");
    const cts = chart_source.getContext('2d');
    // sample data source daily
    const data_sourceday = {
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
    }
    // sample data source monthly
    const data_sourcemonth = {
      labels: ['Direct','Organic Search','Refferal','Social'],
      datasets: [{
        label: 'Browser',
        data: [9925, 7630, 3252, 2135],
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
    }
    // default config source chart
    const data_source = new Chart(cts, {
      type: 'doughnut',
      data: data_sourceday,
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

    // ECOMMERCE BAR CHART
    const chart_profit = document.getElementById("BarChart");
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
    // sample data profit monthly
    const data_profitmonth = {
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Sales',
        data: [33170, 43321, 48835, 45834, 47183, 55504, 56175],
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
        data: [16170, 17121, 18135, 17134, 16183, 17124, 18175],
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

    // trigger data daily
    function TriggeraClicks(TriggeraClicksEvent) {
      data_source.config.data = data_sourceday;
      data_source.update();

      data_profit.config.data = data_profitday;
      data_profit.update();
    }
    // trigger data mothly
    function TriggerbClicks(TriggerbClicksEvent) {
      data_source.config.data = data_sourcemonth;
      data_source.update();

      data_profit.config.data = data_profitmonth;
      data_profit.update();
    }

    // trigger id
    const trigger_data1 = document.getElementById("check7");
    const trigger_data2 = document.getElementById("check8");
    if ( trigger_data1 != null) {
      trigger_data1.addEventListener("click", TriggeraClicks);
    }
    if ( trigger_data2 != null) {
      trigger_data2.addEventListener("click", TriggerbClicks);
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myCharts();

})();
