$('#addButton').on('click', function (){
  for(var i = 0;i <= 11;i++){
    $('#containingDiv').append('<p>This is the song that never ends It just goes on and on my friend some people started singing it not knowing what it was and they will continue singing it forever just because</p>')
  }
})
$('#removeButton').on('click', function(){
  if ($('#removeInput').val() === 'delete'){
    $('#containingDiv').children('p').each(function(index) {
      (this).remove();
    });
  }

})
