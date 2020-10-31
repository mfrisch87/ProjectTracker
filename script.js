var dateInputEl = $('#datepicker');


var printSkills = function (date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
  };


printSkills(dateInput);
dateInputEl.val('');


var dueDate = dateInputEl.val().trim;
    dateInputEl.datepicker({minDate:1});

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));