$('#addButton').on('click', function(){

  for(var i = 0;i <= 11;i++){
    $('#containingDiv').append('<p>what what what</p>');

  }

});

$('#removeButton').on('click', function(){

  if($('#removeInput').val() === 'delete'){

    for(var i = 0;i <= 11;i++){

      $('#containingDiv').children('p').each(function() {
          $('p').remove();
      });

    }

  }

});
