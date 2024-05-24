// $(function () {
//     var videoBtn = $('.video-btn');

//     videoBtn.hover(function () {
//         var videoContainer = $(this).closest('.video-container');
//         var src = videoContainer.data('url');
//         var title = videoContainer.data('title');
//         var videoFrame = $('<iframe>', {
//             src: src,
//             frameborder: 0,
//             title: title,
//             allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ,
//             class: 'video-iframe'
//         });

//         videoContainer.append(videoFrame);
//     });
// });

$(function () {
  var videoContainer = $(".video-container");

  videoContainer.hover(function () {
    console.log($(this).children("iframe").length);

    if ($(this).children("iframe").length === 0) {
      var src = $(this).data("url");
      var title = $(this).data("title");
      var videoFrame = $("<iframe>", {
        src: src,
        frameborder: 0,
        title: title,
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        class: "video-iframe",
      });

      setTimeout(() => {
        videoFrame.addClass('show')
      }, 400);

      $(this).append(videoFrame);
    } else {
        if ($(this).children("iframe").length > 0)
          $(this).children("iframe").remove();
    }
  });

//   videoContainer.mouseout(function () {
//     setTimeout(() => {
//       if ($(this).children("iframe").length > 0)
//         $(this).children("iframe").remove();
//     }, 0);
//   });
});
