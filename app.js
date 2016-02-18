$('#addButton').on('click', function() {
  for (var i = 1; i <= 11; i++) {
    $('#containingDiv').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>');
  }
});

$('#removeButton').on('click', function() {
  var checker = $('#removeInput').val();
  if (checker == 'delete') {
    $('#containingDiv').children('p').each(function() {
      $(this).remove('p');
    });
  }
});
