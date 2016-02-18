$(function() {
  $('#addButton').on('click', function(){
    for ( var i = 0; i <= 11; i ++ ){
      $('#containingDiv').append('<p>AWESOME</p>');
    }
  })
  $('#removeButton').on('click', function(){
    var inputValue = $('input').val()
    if ( inputValue == 'delete' ){
      for ( var i = 0; i <=11; i++ ){
        $('#containingDiv').children('p').each(function(){
          $(this).remove()
        })
      }
    }
  })
})
