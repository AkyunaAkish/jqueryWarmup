$('#addButton').on('click', function() {
  for (var i = 0; i <= 11; i++) {
    $('#containingDiv').append('<div>text</div>');
  }
})

$('#removeButton').on('click', function() {
  if ($('#removeInput').val() === 'delete') {
        $('#containingDiv').empty()
      }
})
