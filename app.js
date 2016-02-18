$(function(){

  var $container = $('#containingDiv');

  $('#addButton').on('mousedown', function(){

    for(var i=0; i <= 11; i++){
      $container.append("<p>Paragraph "+ i +"</p>")
    }
  });


  $('#removeButton').on('mousedown', function(){

    var $inputVal = $("#removeInput").val();

    if($inputVal == 'delete') {

      $container.children('p').each(function (x) {

        $container.empty()
      });
    }

  });

});