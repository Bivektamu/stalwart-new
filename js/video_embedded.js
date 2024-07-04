$(".video-container").each(function () {
  console.log("adsf");

  let options01 = {
    id: $(this).data("url"),
    vimeo_logo: false,
    controls: false,
    loop: true,
  };

  const thumb = $(this).find(".video-thumb");

  let videoPlayer = new Vimeo.Player($(this).attr("id"), options01);

  videoPlayer.setVolume(0);

  videoPlayer.element.addEventListener("mouseenter", function () {
    videoPlayer.setVolume(0);
    videoPlayer.play().then(() => {
      $(thumb).fadeOut();
    });
  });

  videoPlayer.element.addEventListener("mouseleave", function () {
    if (!document.fullscreenElement) {
      videoPlayer.pause().then(() => {
        $(thumb).fadeIn();
      });
    }

    videoPlayer.setCurrentTime(0);
  });

  function openFullscreen() {
    if (!document.fullscreenElement) {
      videoPlayer.setVolume(1);

      if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
      } else if (videoPlayer.mozRequestFullScreen) {
        // Firefox
        videoPlayer.mozRequestFullScreen();
      } else if (videoPlayer.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        videoPlayer.webkitRequestFullscreen();
      } else if (videoPlayer.msRequestFullscreen) {
        // IE/Edge
        videoPlayer.msRequestFullscreen();
      }
    }
  }

  document.addEventListener("fullscreenchange", () => {
    console.log("asdf");
    if (!document.fullscreenElement) {
      videoPlayer.pause().then(() => {
        $(thumb).fadeIn();
      });
    }
  });

  $($(this).find(".fullscreen-icon")).on("click", function (e) {
    e.preventDefault();
    openFullscreen();
  });

  /* 

*/
});
