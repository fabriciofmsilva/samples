$(function() {
  $('#toggle').on('click', function() {
    $('.hello').toggle();
    $(this).attr('aria-expanded', ($(this).attr('aria-expanded') == "false" ? true : false));
  });
});
