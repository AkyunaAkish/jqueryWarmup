$(function() {
  $('#addButton').on('click', function() {
    for (var i = 0; i < 11; i++) {
      $('<p>Here is some text<p>').appendTo('#containingDiv');
    }
  })
  $('#removeButton').on('click', function() {
      if ($('#removeInput').val() === 'delete') {
          $('#containingDiv').empty();
        }
      })
  });










// $(function(){
// $('#addButton').on('click', function(){
//   for (var i = 0;i <= 11;i++) {
//   $('<p>Test</p>').appendTo('#containingDiv');
// }
// });
// $('#removeButton').on('click', function(){
//   if($('#removeInput').val() === 'delete') {
//     for (var i = 0; i < 11; i++) {
//       $('#containingDiv').children('p').each(function() {
//         $('p').hide();
//       });
//   }
// }
// });
// });
