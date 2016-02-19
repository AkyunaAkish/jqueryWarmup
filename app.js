$('#addButton').on('click', function() {
  for (var i = 0; i <= 11; i++) {
    $('#containingDiv').append('<p>I\'m a paragraph!</p>');
  };
});



$('#removeButton').on('click', function() {
  var grabText = $('#removeInput').val();
  if (grabText == 'delete') {
    $('#containingDiv').children('p').each(function() {
      $(this).remove('p');
    });
  }
});
