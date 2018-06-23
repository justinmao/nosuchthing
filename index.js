(function () {
  // Fade in animations
  window.sr = ScrollReveal();
  var revealTags = [
    {
      class: '.lr li:nth-child(odd) img',
      options: {
        origin: 'left'
      }
    },
    {
      class: '.lr li:nth-child(odd) .text',
      options: {
        origin: 'right'
      }
    },
    {
      class: '.lr li:nth-child(even) img',
      options: {
        origin: 'right'
      }
    },
    {
      class: '.lr li:nth-child(even) .text',
      options: {
        origin: 'left'
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
    },
    {
      class: '.card:nth-child(3)',
      options: {
        delay: 600,
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
})();
