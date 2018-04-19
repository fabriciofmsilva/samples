// this is an alias to $(document).ready(function() {
$(function() {
  //We query the div id app and find the other elements so that we can reduce lookups
  $('#app').change(function(e) {
    var n_input = $(this).find('#thing').val();
    $(this).find('.formname').append(n_input);
  });
});
