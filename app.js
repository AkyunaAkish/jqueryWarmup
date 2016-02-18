$(function () {
  $('#addButton').on('click', function() {
    for (var i = 0; i <= 11; i++) {
      $('#containingDiv').append("<p>Text</p>")
        };
      });
  $('#removeButton').on('click', function() {
    if($('#removeInput').val() === 'delete') {
        $('#containingDiv').remove()
      };
    });
});
