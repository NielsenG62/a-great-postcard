$(document).ready(function () {
  $("#form1").submit(function (event) {
    const name = $("#name").val();
    $("#output-name").text(name);
    $("#display").removeClass("display");
    event.preventDefault();

    let sound = new Audio("audio/thomas.mp3");
    sound.play();
    sound.volume = 0.01;
  });
});
