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
  // reload after changes color
  for( let i = 0; i < ele.length; i++) {
    ele[i].addEventListener('change', function() {
      document.location.reload()
    })
  }
  // addtional colors 
  const text_green_500     =   '#22c55e';
  const text_yellow_500    =   '#eab308';
  const text_pink_500      =   '#ec4899';

  // Convert HEX TO RGBA
  function hexToRGBA(hex, opacity) {
    if (hex != null) {
      return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    }
  }

  // Demo Charts JS
  const myCharts = function () {
    Chart.defaults.color  =   text_gray_500;

    // CHART CHANNEL
    const chart_channel = document.getElementById("CrmChannel");
    const cts = chart_channel.getContext('2d');
    // sample data channel daily
    const data_channelday = {
      labels: ['Whatsapp','Email','Call', 'Store'],
      datasets: [{
        label: 'Sales Actifity',
        data: [925, 30, 57, 252],
        backgroundColor: [
          text_primary_500,
          text_pink_500,
          text_green_500,
          text_yellow_500
        ],
        hoverOffset: 4,
        borderColor: border_color,
        borderWidth: 1,
      }]
    }
    // sample data channel monthly
    const data_channelmonth = {
      labels: ['Whatsapp','Email','Call', 'Store'],
      datasets: [{
        label: 'Sales Actifity',
        data: [9925, 330, 457, 1252],
        backgroundColor: [
          text_primary_500,
          text_pink_500,
          text_green_500,
          text_yellow_500
        ],
        hoverOffset: 4,
        borderColor: border_color,
        borderWidth: 1,
      }]
    }
    // default config channel chart
    const data_channel = new Chart(cts, {
      type: 'doughnut',
      data: data_channelday,
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

    // CRM CHART LINE AREA
    const chart_revenue = document.getElementById("RevenueChart");
    const ctla = chart_revenue.getContext('2d');
    const gradientIndigo = ctla.createLinearGradient(0, 230, 0, 50);
    gradientIndigo.addColorStop(1, hexToRGBA( text_primary_500, 0.3));
    gradientIndigo.addColorStop(0.2, hexToRGBA( text_primary_500, 0.02));
    gradientIndigo.addColorStop(0, hexToRGBA( text_primary_500, 0.01));

    // sample data revenue daily
    const data_revenueday = {
      labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10', 'Aug 11', 'Aug 12'],
      datasets: [{
        fill: {
          target: 'origin'
        },
        borderColor: text_primary_500,
        backgroundColor: gradientIndigo,
        label: 'Sales',
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
        tooltip: {
          callbacks: {
            label: (Item) => 'Sales ' + '$' + (Item.formattedValue)
          }
        },
        data: [1200, 4620, 3230, 1840, 1870, 3620, 3240, 4290, 2890, 5590, 4610, 3940, 5410],
      }]
    }
    // sample data revenue mothly
    const data_revenuemonth = {
      labels: ['Sep', 'Nov', 'Dec', 'Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        fill: {
          target: 'origin'
        },
        borderColor: text_primary_500,
        backgroundColor: gradientIndigo,
        label: 'Sales',
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
        tooltip: {
          callbacks: {
            label: (Item) => 'Sales ' + '$' + (Item.formattedValue)
          }
        },
        data: [11200, 41620, 31230, 11840, 11870, 31620, 31240, 41290, 21890, 51590, 54610, 53940],
      }]
    }
    // default config revenue chart
    const data_revenue = new Chart(ctla, {
      type: 'line',
      data: data_revenueday,
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
    
    // trigger data daily
    function TriggeraClicks(TriggeraClicksEvent) {
      data_channel.config.data = data_channelday;
      data_channel.update();

      data_revenue.config.data = data_revenueday;
      data_revenue.update();
    }
    // trigger data mothly
    function TriggerbClicks(TriggerbClicksEvent) {
      data_channel.config.data = data_channelmonth;
      data_channel.update();

      data_revenue.config.data = data_revenuemonth;
      data_revenue.update();
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
