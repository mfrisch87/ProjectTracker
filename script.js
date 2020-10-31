var dateInputEl = $('#datepicker');


var printSkills = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
  };



$( function() {
    $( "#datepicker" ).datepicker();
  } );
  dateInputEl.datepicker();