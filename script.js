var dateInputEl = $('#datepicker');


var printDate = function (date) {

}

printDate(dateInput);
dateInputEl.val('');

$( function() {
    $( "#datepicker" ).datepicker();
  } );
  dateInputEl.datepicker();

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));