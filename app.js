$(function(){
  $("#addButton").on("click", function(){


    for (var i=0; i <= 11; i++){
      $("#containingDiv").append("<p>Cats Cats Cats</p>");


    }
  });

  $("#removeButton").on("click", function(){

    if($("#removeInput").val()=="delete"){
      for (var j=0; j <= 11; j++){
      }
        $("p").remove();

    }
  });


});
