// this is an alias to $(document).ready(function() {
$(function() {
  //keypress wouldn't include delete key, keyup does. We also query the div id app and find the other elements so that we can reduce lookups
  $('#app').keyup(function(e) {
    var formname = $(this).find('.formname');
    //store in a variable to reduce repetition
    var n_input = $(this).find('#thing').val();
    formname.empty();
    formname.append(n_input);
  });
});