$(function() {
  var button = $("button");
  var name = $("input[name=name]");

  name.keyup(function() {
    if (name.val().length > 0) {
      button.addClass('active');
    } else {
      button.removeClass('active');
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();

    //get the form data
    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      caps: $("input[name=caps]").val()
    };

    // process the form
    $.ajax({
      type: "POST",
      url: "//jsonplaceholder.typicode.com/posts",
      data: formData,
      dataType: "json",
      encode: true
    }).done(function(data) {
      $(".response")
        .empty()
        .append(JSON.stringify(data, null, 2));
    });
  });
});
