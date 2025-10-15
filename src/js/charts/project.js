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
  } else if (themes === "green-theme") {
    var text_primary_500   =   '#5a822d';
  } else if (themes === "purple-theme") {
    var text_primary_500   =   '#8069bf';
  } else if (themes === "yellow-theme") {
    var text_primary_500   =   '#7e7a00';
  } else {
    var text_primary_500   =   '#4178c1';
  }
  for( let i = 0; i < ele.length; i++) {
    ele[i].addEventListener('change', function() {
      document.location.reload()
    })
  }
  // Convert HEX TO RGBA
  function hexToRGBA(hex, opacity) {
    if (hex != null) {
      return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    }
  }
  // Demo Charts JS
  const myCharts = function () {
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
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myCharts();

})();
