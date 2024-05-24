var options01 = {
  id: "948639766",
  vimeo_logo: false,
  controls: false,
  loop: true,
};

var video01Player = new Vimeo.Player("video_1", options01);

// video01Player.setVolume(0);

if (video01Player) {
  console.log(video01Player.element);
}

video01Player.element.addEventListener("mouseenter", function () {
  video01Player.play();
});

video01Player.element.addEventListener("mouseleave", function () {
  video01Player.pause();
  // video01Player.setCurrentTime(0)
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video01Player.requestFullscreen) {
      video01Player.requestFullscreen();
    } else if (video01Player.mozRequestFullScreen) {
      // Firefox
      video01Player.mozRequestFullScreen();
    } else if (video01Player.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      video01Player.webkitRequestFullscreen();
    } else if (video01Player.msRequestFullscreen) {
      // IE/Edge
      video01Player.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  }
}

jQuery(document).ready(function ($) {
  $('.fullscreen-icon').on("click", function (e) {
    e.preventDefault()
    console.log("asdf");
    toggleFullscreen();
  });
});
