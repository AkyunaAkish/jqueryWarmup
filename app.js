$(document).ready(function(){
  $('#toggleImage').on('click', function(){
    $('#imageToToggle').toggle();
  });
  $(document).on('keyup', function(){
    $('#previewParagraph').text($('#mainInput').val());
  })
});
