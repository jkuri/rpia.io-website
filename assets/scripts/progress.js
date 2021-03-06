(() => {
  'use strict';

  let value = 0;
  let interval;
  let progress = document.querySelectorAll('.progress');
  const startProgressButton = document.querySelector('.start-progress');
  const stopProgressButton = document.querySelector('.stop-progress');
  const stripedProgressButton = document.querySelector('.striped-progress');
  const activeProgressButton = document.querySelector('.active-progress');
  const colors = document.querySelectorAll('.color');
  let progressContainer = document.querySelector('.progress-container');
  let code = document.querySelector('code');

  startProgressButton.addEventListener('click', e => {
    startProgressButton.classList.toggle('is-hidden');
    stopProgressButton.classList.toggle('is-hidden');

    interval = setInterval(() => {
      [].forEach.call(progress, p => {
        p.value = p.value === 100 ? 0 : p.value + 1;
      });
      initMarkup();
    }, 200);
  }, false);

  stopProgressButton.addEventListener('click', e => {
    stopProgressButton.classList.toggle('is-hidden');
    startProgressButton.classList.toggle('is-hidden');
    
    clearInterval(interval);
  }, false);

  stripedProgressButton.addEventListener('click', e => {
    [].forEach.call(progress, p => {
      p.classList.toggle('is-striped');
    });
    stripedProgressButton.classList.toggle('is-active');
    initMarkup();
  }, false);

  activeProgressButton.addEventListener('click', e => {
    [].forEach.call(progress, p => {
      p.classList.toggle('is-active');
    });
    activeProgressButton.classList.toggle('is-active');
    initMarkup();
  }, false);

  [].forEach.call(colors, color => {
    color.addEventListener('click', e => {
      let c;
      
      [].forEach.call(progress, p => {
        p.classList.remove('is-red', 'is-pink', 'is-purple', 'is-deep-purple', 'is-indigo', 'is-blue', 'is-light-blue', 'is-cyan', 'is-teal', 'is-green', 'is-light-green', 'is-lime', 'is-yellow', 'is-amber', 'is-orange', 'is-deep-orange', 'is-brown', 'is-green', 'is-blue-grey', 'is-grey');
      });
      
      c = e.target.classList.item(1);
      if (c) {
        [].forEach.call(progress, p => {
          p.classList.add(c);
        });
      }

      initMarkup();
    }, false);
  });

  function initMarkup() {
    code.innerHTML = progressContainer.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;').replace(/  /g, '');
    hljs.highlightBlock(code);
  }

  initMarkup();

})();