$(function() {
  console.log("ready!");
  $('#addButton').on('click', function() {
    for (var i = 0; i <= 11; i++) {
      $("<p id='nuw'>Text ANd Stuff</p>").appendTo('#containingDiv');
    };

    $('#removeButton').on('click', function() {
      if ($('#removeInput').val() === 'delete') {
        $('#nuw').remove();
      }
    });
  });
})