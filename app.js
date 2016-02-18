$(function(){
  $("#addButton").on("click", function(){
    for(var i = 0;i <= 11;i++){
      $("#containingDiv").append("<p>HELOOOOOOO</p>");
    }
  })
  $("#removeButton").on("click", function(){
    if($("#removeInput").val() === "delete"){
      $('#containingDiv').children('p').each(function() {
          $("#containingDiv").children('p').remove()
        })
    }
  })
})
