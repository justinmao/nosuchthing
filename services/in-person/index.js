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
  // Fade in animations
  window.sr = ScrollReveal();
  var revealTags = [
    {
      class: '.lr li:nth-child(odd) .lr-circle',
      options: {
        origin: 'right'
      }
    },
    {
      class: '.lr li:nth-child(odd) .text',
      options: {
        origin: 'left'
      }
    },
    {
      class: '.lr li:nth-child(even) .lr-circle',
      options: {
        origin: 'left'
      }
    },
    {
      class: '.lr li:nth-child(even) .text',
      options: {
        origin: 'right'
      }
    },
    {
      class: '.card:nth-child(1)',
      options: {}
    },
    {
      class: '.card:nth-child(2)',
      options: {
        easing: 'ease',
        delay: 300,
      }
    }
  ];
  var normalOptions = {
    origin: 'bottom',
    scale: 1,
    easing: 'ease',
    viewFactor: 0.6,
    duration: 1000
  }
  for (tag of revealTags) {
    sr.reveal(tag.class, Object.assign(Object.assign({}, normalOptions), tag.options));
  }
  // Smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]');
})();
