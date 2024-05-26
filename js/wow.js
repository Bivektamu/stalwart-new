$(function () {
  let boxes = [];
  if (boxes.length < 1 && document.getElementsByClassName("wow").length > 0) {
    let boxesArray = [];
    for (var i = 0; i < document.getElementsByClassName("wow").length; i++) {
      var ele = document.getElementsByClassName("wow")[i];
      let offSet = 0.8;
      if (ele.getAttribute("data-offset"))
        offSet = parseFloat(ele.getAttribute("data-offset")).toFixed(2);

      boxesArray.push({
        ele: ele,
        animated: false,
        offSet: offSet,
      });
    }

    boxes = [...boxesArray];
  }

  function onScroll() {
    if (boxes.length > 0) checkBoxes();
  }

  function checkBoxes() {
    for (let k = 0; k < boxes.length; k++) {
      var b = boxes[k];
      var ele = b.ele;

      if (totalInViewport(ele, b.offSet) && !b.animated) {
        boxes[k].animated = true;
        ele.classList.add("animated");
        const filtered_box = boxes.filter((ele) => ele !== boxes[k]);
        setB(filtered_box);
      }
    }
  }

  function totalInViewport(el, s) {
    var rect = el.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top < windowHeight * s;
  }

  window.addEventListener("scroll", onScroll);
});
