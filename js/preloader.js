$(function () {
  $("body").addClass("no-scroll");

  window.onload = function () {
    const visited = window.sessionStorage.getItem("visited");
    // const visited=''
    if (!visited) {
      $("header").addClass("hide");
      window.sessionStorage.setItem("visited", "true");
      setTimeout(() => {
        $("#preloader").addClass("t1");
      }, 1000);

      setTimeout(() => {
        $("#preloader").fadeOut();
      }, 2500);
      setTimeout(() => {
        $("#hero .wow").addClass("animated");
      }, 3000);

      setTimeout(() => {
        $("header").removeClass("hide");
        $("body").removeClass("no-scroll");
      }, 3500);
    } else {
      $("body").addClass("no-scroll");
      $("body").removeClass("no-scroll");
      $("#preloader").fadeOut();
      $("#hero .wow").addClass("animated");
    }
  };
});
