$(document).ready(function() {
  // console.log('ready');
  $('#addButton').on('click', function() {
    for (var i = 0; i <= 11; i++) {
      $('#containingDiv').append("<p>some random text</p>")
    };
    $("#removeButton").on("click", function() {
      if ($("#removeInput").val() == "delete") {
        for (var j = 0; j <= 11; j++) {
          $("p").remove();
        }
      }
    });
  });
});
