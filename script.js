var dateInputEl = $('#datepicker');


var printSkills = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
  };


printSkills(dateInput);
dateInputEl.val('');


$( function() {
    $( "#datepicker" ).datepicker();
  } );
  dateInputEl.datepicker();

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));