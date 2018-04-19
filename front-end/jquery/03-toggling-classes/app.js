$(function() {
  $('button').click(function(e) {
    $('.toggle').toggleClass('red');
    $(this).attr('aria-pressed', ($(this).attr('aria-pressed') == "false" ? true : false));
  });
});
