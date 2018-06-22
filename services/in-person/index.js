(function () {
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
})();
