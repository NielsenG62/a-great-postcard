$(document).ready(function () {
  $("#form1").submit(function (event) {
    const name = $("#name").val();
    $("#output-name").text(name);
    $("#display").removeClass("display");
    event.preventDefault();
  });
});
