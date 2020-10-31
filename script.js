var dateInputEl = $('#datepicker');
var projectNameEl = $('#project-name');
var projectTypeEl = $('#project-type');
var projectHourlyEl = $('#hourly-rate');
var projectDueDateEl = $('#due-date');



var printSkills = function (date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
  };


printSkills(dateInput);
dateInputEl.val('');


var dueDate = dateInputEl.val().trim;
    dateInputEl.datepicker({minDate:1});

// set todays date
var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));