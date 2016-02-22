$(document).ready(function () {

  $('#addButton').on('click', function () {
    var input = $('input').val();
    console.log(input);
    for(var i = 0;i <= 11;i++){
      $('#containingDiv').append('<p>' + input + '</p>');
    }
  })

  $('#removeButton').on('click', function () {
    var input = $('input').val();
    if (input === 'delete'){
      $('#containingDiv').empty();
    }
  })
})
