$('#addButton').on('click', function(){
  for(var i = 0;i <= 11;i++) {
    var newp = document.createElement('p');
    $('#containingDiv').append(newp);
    $(newp).html('text');
  }
})


$('#removeButton').on('click', function(){
  var infield = $('#removeInput').val();
  if(infield = "remove"){
    for(var i = 0;i <= 11;i++) {
      $('p').remove();
    }
  }
})
