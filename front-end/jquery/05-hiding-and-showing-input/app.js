$(function() {
  var button = $('.button');
  var textarea = $('#textarea');
  
  button.hide();
  textarea.keyup(function() {
    if (textarea.val().length > 0) {
      button.show();
    } else {
      button.hide();
    } 
  })
});
