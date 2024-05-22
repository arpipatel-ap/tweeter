


$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let text = $(this).val();
    let charLimit = 140 - text.length;
    let counter = $(this).parents().find('.counter');
    counter.val(charLimit);
    if (charLimit < 0) {
      counter.css("color", "red");
    }
    else {
      counter.css("color", "#55514a");
    }
  });
});



