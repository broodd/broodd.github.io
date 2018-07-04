$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Больше") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("меньше");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Больше");
      $("#text").slideUp();
    }
  });
});