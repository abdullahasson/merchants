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
    
    // CHART PAGEVIEWS
    const chart_pageviews = document.getElementById("Pageviews");
    const ctlax = chart_pageviews.getContext('2d');
    // sample data pageviews 7 days
    const data_pageviews7 = {
      labels: ['11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
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
        data: [11220, 14022, 20323, 15462, 15524, 23059, 11489 ],
      }]
    }
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

    // CHART AVG SESSION
    const chart_avgsession = document.getElementById("AvgSessions");
    const ctlaz = chart_avgsession.getContext('2d');
    // sample data avgsession 7 days
    const data_avgsession7 = {
      labels: ['11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Minutes',
        data: [220, 362, 223, 284, 287, 162, 324],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderColor: text_green_500,
        borderWidth: 1,
        tension: 0.3,
        pointBackgroundColor: text_green_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_green_500,
        pointHoverRadius: 5,
        pointRadius: 0,
      }]
    }
    // sample data avgsession 14 days
    const data_avgsession14 = {
      labels: ['4 Aug','5 Aug','6 Aug','7 Aug','8 Aug','9 Aug','10 Aug','11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Minutes',
        data: [223, 284, 287, 162, 324, 325, 220, 362, 223, 284, 287, 162, 324, 325],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderColor: text_green_500,
        borderWidth: 1,
        tension: 0.3,
        pointBackgroundColor: text_green_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_green_500,
        pointHoverRadius: 5,
        pointRadius: 0,
      }]
    }
    // default config avgsession chart
    const data_avgsession = new Chart(ctlaz, {
      type: 'line',
      data: data_avgsession14,
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

    // CHART VISITORS
    const chart_visitors = document.getElementById("Visitors");
    const ctlam = chart_visitors.getContext('2d');
    // sample data visitors 7 days
    const data_visitors7 = {
      labels: ['11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Visitors',
        data: [1170, 1612, 1513, 1384, 1273, 1822, 1424],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderWidth: 1,
        borderColor: text_primary_500,
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
      }]
    }
    // sample data visitors 14 days
    const data_visitors14 = {
      labels: ['4 Aug','5 Aug','6 Aug','7 Aug','8 Aug','9 Aug','10 Aug','11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Visitors',
        data: [1170, 1312, 1513, 1784, 1973, 1462, 1414, 1170, 1612, 1513, 1384, 1273, 1822, 1424],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderWidth: 1,
        borderColor: text_primary_500,
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
      }]
    }
    // default config visitors chart
    const data_visitors = new Chart(ctlam, {
      type: 'line',
      data: data_visitors14,
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

    // CHART BOUNCE
    const chart_bounce = document.getElementById("Bounce");
    const ctla = chart_bounce.getContext('2d');
    // sample data bounce 7 days
    const data_bounce7 = {
      labels: ['11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Bounce',
        data: [30, 62, 65, 45, 46, 72, 64],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderWidth: 1,
        borderColor: text_secondary_500,
        tension: 0.3,
        pointBackgroundColor: text_secondary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_secondary_500,
        pointHoverRadius: 5,
        pointRadius: 0
      }]
    }
    // sample data bounce 14 days
    const data_bounce14 = {
      labels: ['4 Aug','5 Aug','6 Aug','7 Aug','8 Aug','9 Aug','10 Aug','11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug', '16 Aug', '17 Aug'],
      datasets: [{
        label: 'Bounce',
        data: [30, 62, 65, 45, 46, 72, 64, 67, 71, 65, 64, 63, 54, 68],
        fill: {
          target: 'origin'
        },
        backgroundColor: gradientPrimary,
        borderWidth: 1,
        borderColor: text_secondary_500,
        tension: 0.3,
        pointBackgroundColor: text_secondary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_secondary_500,
        pointHoverRadius: 5,
        pointRadius: 0
      }]
    }
    // default config bounce chart
    const data_bounce = new Chart(ctla, {
      type: 'line',
      data: data_bounce14,
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

    // CHART DEVICE
    const chart_device = document.getElementById("DeviceChart");
    const cts = chart_device.getContext('2d');
    // sample data device 7 days
    const data_device7 = {
      labels: ['Desktop','Tabs','Mobile'],
      datasets: [{
        label: 'Device',
        data: [925, 30, 252],
        backgroundColor: [
          text_primary_500,
          text_yellow_500,
          text_green_500
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // sample data device 14 days
    const data_device14 = {
      labels: ['Desktop','Tabs','Mobile'],
      datasets: [{
        label: 'Device',
        data: [2925, 130, 452],
        backgroundColor: [
          text_primary_500,
          text_yellow_500,
          text_green_500
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // default config device chart
    const data_device = new Chart(cts, {
      type: 'doughnut',
      data: data_device14,
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

    // CHART BROWSER
    const chart_browser = document.getElementById("BrowserChart");
    const ctd = chart_browser.getContext('2d');
    // sample data browser 7 days
    const data_browser7 = {
      labels: ['Chrome','Mozilla','Safari','Others'],
      datasets: [{
        label: 'Browser',
        data: [925, 630, 252, 135],
        backgroundColor: [
          text_yellow_500,
          text_pink_500,
          text_blue_500,
          text_green_500
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // sample data browser 14 days
    const data_browser14 = {
      labels: ['Chrome','Mozilla','Safari','Others'],
      datasets: [{
        label: 'Browser',
        data: [1925, 1630, 1452, 1135],
        backgroundColor: [
          text_yellow_500,
          text_pink_500,
          text_blue_500,
          text_green_500
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // default config browser chart
    const data_browser = new Chart(ctd, {
      type: 'doughnut',
      data: data_browser14,
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

    // CHART REFERRAL
    const chart_referral = document.getElementById("ChartReferral");
    const ctb = chart_referral.getContext('2d');
    // sample data referral 7 days
    const data_referral7 = {
      labels: [
        'Google.com', 'Facebook.com', 'Instagram.com', 'Twitter.com', 'Pinterest.com', 'Tiktok.com', 'Others',
      ],
      datasets: [{
        label: 'Visitor',
        data: [1270, 1020, 955, 922, 798, 722, 698],
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

    // CHART SESSIONS
    const chart_sessions = document.getElementById("DailySessions");
    const gradientBg = hexToRGBA( text_primary_500, 0.01);
    const ctlas = chart_sessions.getContext('2d');
    // sample data session 7 days
    const data_session7 = {
      labels: ['Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
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
        data: [2720, 3622, 3223, 4262, 3324, 3859, 4789],
      }],
    }
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

    // CHART PAGEVIEWS
    const chart_data = document.getElementById("DailyPageviews");
    const ctlb = chart_data.getContext('2d');
    // sample data pageview 7 days
    const data_pageview7 = {
      labels: ['Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
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
        data: [11220, 14022, 20323, 15462, 15524, 23059, 11489 ],
      }],
    }
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

    // trigger data 7 days
    function TriggeraClicks(TriggeraClicksEvent) {
      data_pageviews1.config.data = data_pageviews7;
      data_pageviews1.update();
      data_avgsession.config.data = data_avgsession7;
      data_avgsession.update();
      data_visitors.config.data = data_visitors7;
      data_visitors.update();
      data_bounce.config.data = data_bounce7;
      data_bounce.update();

      data_referral.config.data = data_referral7;
      data_referral.update();

      data_pageviews.config.data = data_pageview7;
      data_pageviews.update();
      data_sessions.config.data = data_session7;
      data_sessions.update();
      data_browser.config.data = data_browser7;
      data_browser.update();
      data_device.config.data = data_device7;
      data_device.update();
    }
    // trigger data 14 days
    function TriggerbClicks(TriggerbClicksEvent) {
      data_pageviews1.config.data = data_pageviews14;
      data_pageviews1.update();
      data_avgsession.config.data = data_avgsession14;
      data_avgsession.update();
      data_visitors.config.data = data_visitors14;
      data_visitors.update();
      data_bounce.config.data = data_bounce14;
      data_bounce.update();

      data_referral.config.data = data_referral14;
      data_referral.update();

      data_pageviews.config.data = data_pageview14;
      data_pageviews.update();
      data_sessions.config.data = data_session14;
      data_sessions.update();
      data_browser.config.data = data_browser14;
      data_browser.update();
      data_device.config.data = data_device14;
      data_device.update();
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
