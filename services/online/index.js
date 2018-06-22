(function () {
  // Dropdown listener for details section
  let detailsArrow = document.getElementById('details-arrow');
  detailsArrow.addEventListener('click', () => {
    detailsArrow.previousSibling.previousSibling.classList.toggle('hidden');
    detailsArrow.classList.toggle('flipped');
  });
  // Dropdown listeners for FAQ sections
  for (question of document.getElementsByClassName('question')) {
    let arrow = question.lastChild.previousSibling;
    let answer = question.parentElement.lastChild.previousSibling;
    (function () {
      question.addEventListener('click', () => {
        arrow.classList.toggle('flipped');
        answer.classList.toggle('hidden');
      });
    }());
  }
  // Scrolling progress bar
  function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
  }
  let barHeight = document.getElementById('background-bar').clientHeight;
  let progressBar = document.getElementById('progress-bar');
  let topDistance = getPosition(progressBar).y;
  document.addEventListener('scroll', () => {
    p = progressBar.getBoundingClientRect().y;
    x = -(p - window.innerHeight*.5);
    h = x > 0 ? Math.min(x, barHeight) : 0;
    progressBar.style.height = h + "px";
  });
})();
