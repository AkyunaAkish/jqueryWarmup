$(document).ready(function() {

  $('#addButton').on('click', function(){
    for (var i = 0;i <= 11;i++){
      $('#containingDiv').append('<p>This is an iteration!</p>');
    };
  })

  $('#removeButton').on('click', function(){
    var val = $('#removeInput').val();
    if (val === "delete") {
      $('#containingDiv').children('p').remove();
    };
  });
});
