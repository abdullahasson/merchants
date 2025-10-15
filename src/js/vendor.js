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

  const text_pink_500      =   '#ec4899';
  const text_green_500     =   '#22c55e';

  
  // Demo Vector Maps
  const myMaps = function () {
    // Maps
    const worldmap = document.getElementById('worldmap');
    if ( worldmap != null) {
      const map = new jsVectorMap({ 
        selector: "#worldmap",
        map: "world",
        visualizeData: {
          scale: [ text_primary_500, text_primary_500],
          values: {
            US: 259,
            ID: 220,
            IN: 175,
            CA: 160,
            BR: 175,
            AR: 155,
            ES: 235,
            UK: 227,
            RU: 176,
            // ...
          }
        },
        markers: [
          { name: 'Egypt', coords: [26.8206, 30.8025],style: { fill: 'orange' } },
          { name: 'United Kingdom', coords: [55.3781, 3.4360], style: { fill: 'green' } },
          { name: 'United States', coords: [37.0902, -95.7129], style: { fill: 'red' } }
        ]
      });
    }
  }
  
  // Demo text editor
  const myEditor = function () {
    const text_editor = document.querySelectorAll(".texteditor");
    if ( text_editor != null) {
      for( let i = 0; i < text_editor.length; i++)
      {
        const simplemde = new SimpleMDE({ 
          element: text_editor[i],
          toolbarTips: false,
          hideIcons: ["guide"],
          autoDownloadFontAwesome: true
        });
      }
    };
  }

  // Demo Calender schedule
  const myCalendar = function () {
    // Calendar Event
    const fullcalendars = document.getElementById('calendar');
    if ( fullcalendars != null) {
      document.addEventListener('DOMContentLoaded', function() {
        const calendarEl = document.getElementById('calendar');
        const date = new Date();
        const month = new Date();
        const dates = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);
        const yearmonth = month.getFullYear().toString() + '-' + (month.getMonth() + 1).toString().padStart(2, 0) + '-';
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          initialDate: dates,
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          events: [
            {
              title: 'All Day Event',
              start: yearmonth + '01',
              backgroundColor: text_pink_500,
              borderColor: text_pink_500
            },
            {
              title: 'Long Event',
              start: yearmonth + '03',
              end: yearmonth + '06'
            },
            {
              groupId: '999',
              title: 'Repeating Event',
              start: yearmonth + '09T16:00:00',
              backgroundColor: text_green_500,
              borderColor: text_green_500
            },
            {
              groupId: '999',
              title: 'Repeating Event',
              start: yearmonth + '16T16:00:00',
              backgroundColor: text_gray_500,
              borderColor: text_gray_500
            },
            {
              title: 'Conference',
              start: '11',
              end: yearmonth + '13'
            },
            {
              title: 'Meeting',
              start: yearmonth + '12T10:30:00',
              end: yearmonth + '12T12:30:00',
              backgroundColor: text_pink_500,
              borderColor: text_pink_500
            },
            {
              title: 'Lunch',
              start: yearmonth + '12T12:00:00'
            },
            {
              title: 'Meeting',
              start: yearmonth + '12T14:30:00',
              backgroundColor: text_pink_500,
              borderColor: text_pink_500
            },
            {
              title: 'Birthday Party',
              start: yearmonth + '20T07:00:00'
            },
            {
              title: 'Evant with link',
              url: 'http://google.com/',
              start: yearmonth + '28',
              backgroundColor: text_green_500,
              borderColor: text_green_500
            }
          ],
          eventColor: text_primary_500
        });
        calendar.render();

      });
    }
  }

  // Dropzone uploader
  const myUploader = function () {
    // dropzone
    const dropzone_class = document.querySelectorAll(".multiple-dropzone");

    if ( dropzone_class != null) {
      for( let i = 0; i < dropzone_class.length; i++){
        const myDropzone = new Dropzone( dropzone_class[i], {
          addRemoveLinks: true,
          uploadMultiple: true,
          parallelUploads: 100,
          maxFiles: 5,
          paramName: 'file',
          clickable: true,
          url: '#'
        });
        Dropzone.autoDiscover = false;
      }
    }

    const dropzone_single = document.querySelectorAll(".single-dropzone");

    if ( dropzone_single != null) {
      for( let i = 0; i < dropzone_single.length; i++){
        const myDropzone = new Dropzone( dropzone_single[i], {
          addRemoveLinks: true,
          uploadMultiple: false,
          maxFiles: 1,
          init: function() {
            this.on('addedfile', function(file) {
              if (this.files.length > 1) {
                this.removeFile(this.files[0]);
              }
            });
          },
          paramName: 'file',
          clickable: true,
          url: '#'
        });
        Dropzone.autoDiscover = false;
      }
    }
  }

  // Lightbox
  const myLightbox = function () {
    // GLightbox
    const lightbox_class = document.querySelector(".glightbox3");
    if ( lightbox_class != null) {
      const lightbox = GLightbox({
        selector: '.glightbox3',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }

  // Dragula
  const myDragula = function () {
    /* Dragula JS */
    const dragula_class = document.querySelector(".dragula");
    if ( dragula_class != null) {
      dragula([
        document.getElementById("to-do"),
        document.getElementById("doing"),
        document.getElementById("done"),
        document.getElementById("trash")
      ]);
    }
  }

  // Demo Datepicker
  const myDatepicker = function () {
    // Datepicker
    const date_datepick = document.querySelectorAll('.datepick');
    if ( date_datepick != null) {
      for( let i = 0; i < date_datepick.length; i++)
      {
        flatpickr( date_datepick[i], {
          enableTime: true,
          allowInput: true,
          dateFormat: "Y-m-d H:i"
        });
      }
    }
    // Range Datepicker
    const date_start = document.querySelectorAll('.startDate');
    if ( date_start != null) {
      const date_end = document.querySelectorAll('.endDate');
      for( let i = 0; i < date_start.length; i++) {
        for( let x = 0; x < date_end.length; x++) {
          flatpickr( date_start[i], {
            enableTime: true,
            allowInput: true,
            dateFormat: "m/d/Y h:iK",
            "plugins": [new rangePlugin({ input: date_end[x]})]
          });
        }
      }
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
  myMaps();
  myEditor();
  myCalendar();
  myUploader();
  myLightbox();
  myDragula();
  myDatepicker();

})();