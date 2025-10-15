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
  const text_green_500     =   '#22c55e';
  const text_yellow_500    =   '#eab308';
  const text_pink_500      =   '#ec4899';
  const text_blue_500      =   '#7dd3fc';
  
  // Demo Charts JS
  const myCharts = function () {
    Chart.defaults.color  =   text_gray_500;

    // CHART CONSUMTION
    const chart_consumtion = document.getElementById("ConsumtionChart");
    const ctd = chart_consumtion.getContext('2d');
    // sample data power consumtion daily
    const data_consumtionday = {
      labels: ['Living Room','Kitchen','Dining Room','Bathroom','Bedroom 1','Bedroom 2'],
      datasets: [{
        label: 'Power Consumtion',
        data: [925, 630, 252, 112, 435, 335,],
        backgroundColor: [
          text_yellow_500,
          text_pink_500,
          text_blue_500,
          text_green_500,
          text_gray_500,
          text_primary_500,
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // sample data power consumtion monthly
    const data_consumtionmonth = {
      labels: ['Living Room','Kitchen','Dining Room','Bathroom','Bedroom 1','Bedroom 2'],
      datasets: [{
        label: 'Power Consumtion',
        data: [27925, 18630, 6252, 2112, 12435,9335,],
        backgroundColor: [
          text_yellow_500,
          text_pink_500,
          text_blue_500,
          text_green_500,
          text_gray_500,
          text_primary_500,
        ],
        borderColor: border_color,
        borderWidth: 1,
        hoverOffset: 4
      }]
    }
    // default config power consumtion chart
    const data_consumtion = new Chart(ctd, {
      type: 'doughnut',
      data: data_consumtionday,
      options: {
        animation: {
          delay: 1000
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    })

    // CHART POWER
    const chart_data = document.getElementById("PowerChart");
    const ctlb = chart_data.getContext('2d');
    // sample data power daily
    const data_powerday = {
      labels: ['Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
      datasets: [{
        fill: {
          target: 'origin'
        },
        borderColor: text_primary_500,
        borderRadius: 2,
        backgroundColor: text_primary_500,
        label: 'Power',
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
        tooltip: {
          callbacks: {
            label: (Item) => (Item.formattedValue) + 'Kwh'
          }
        },
        data: [11220, 14022, 20323, 15462, 15524, 23059, 11489 ],
      }],
    }
    // sample data power monthly
    const data_powermonth = {
      labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        fill: {
          target: 'origin'
        },
        borderColor: text_primary_500,
        borderRadius: 2,
        backgroundColor: text_primary_500,
        label: 'Power',
        tension: 0.3,
        pointBackgroundColor: text_primary_500,
        pointBorderWidth: 0,
        pointHitRadius: 30,
        pointHoverBackgroundColor: text_primary_500,
        pointHoverRadius: 5,
        pointRadius: 0,
        tooltip: {
          callbacks: {
            label: (Item) => (Item.formattedValue) + 'Kwh'
          }
        },
        data: [111220, 141022, 201323, 151462, 151524, 231059, 111489, 121220, 141022, 210323, 151462, 115524],
      }],
    }
    // default config powers chart
    const data_power = new Chart(ctlb, {
      type: 'bar',
      data: data_powerday,
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
      data_power.config.data = data_powerday;
      data_power.update();
    }
    function TriggercClicks(TriggercClicksEvent) {
      data_consumtion.config.data = data_consumtionday;
      data_consumtion.update();
    }
    // trigger data monthly
    function TriggerbClicks(TriggerbClicksEvent) {
      data_power.config.data = data_powermonth;
      data_power.update();
    }
    function TriggerdClicks(TriggerdClicksEvent) {
      data_consumtion.config.data = data_consumtionmonth;
      data_consumtion.update();
    }
    
    // trigger id (power consumed)
    const trigger_data1 = document.getElementById("check1");
    const trigger_data2 = document.getElementById("check2");
    if ( trigger_data1 != null) {
      trigger_data1.addEventListener("click", TriggeraClicks);
    }
    if ( trigger_data2 != null) {
      trigger_data2.addEventListener("click", TriggerbClicks);
    }
    // trigger id (Consumtion by room)
    const trigger_data3 = document.getElementById("check3");
    const trigger_data4 = document.getElementById("check4");
    if ( trigger_data3 != null) {
      trigger_data3.addEventListener("click", TriggercClicks);
    }
    if ( trigger_data4 != null) {
      trigger_data4.addEventListener("click", TriggerdClicks);
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myCharts();

})();