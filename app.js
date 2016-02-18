$(function () {

  $('#addButton').on('click', function () {

    for(var i = 0; i <= 11; i++){

      $('#containingDiv').append("<p>Lincoln is adequate!</p>");

    }

  });

  $('#removeButton').on('click', function () {

      if ($("input[type=text]").val() === 'delete')  $('#containingDiv').empty();

  })

})

// (document).ready(function(){
//     $("input[type=text]").val();
// });
