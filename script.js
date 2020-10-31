var dateInputEl = $('#datepicker');
var projectNameEl = $('#project-name');
var projectTypeEl = $('#project-type');
var projectHourlyEl = $('#hourly-rate');
var projectDueDateEl = $('#due-date');



var printSkills = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
  };



$( function() {
    $( "#datepicker" ).datepicker();
  } );
  dateInputEl.datepicker();

// set todays date
var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));