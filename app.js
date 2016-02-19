$(document).ready(function (){

  $('#addButton').on('click', function (){
    for(var i = 0;i <= 11;i++){
      $('#containingDiv').append('<p>something will happen here</p>');
      }
  });

  $('#removeButton').on('click', function (){
    // var val = $('#removeInput').val();
    if ( $('#removeInput').val() == "delete") {
      $('#containingDiv').children('p').remove();
    }
  });
});
