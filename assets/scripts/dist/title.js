(() => {
  'use strict';

  const tidyOpts = {
    'indent': true,
    'indent-spaces': 2,
    'output-xml': false,
    'show-body-only': true,
    'tidy-mark': false,
    'show-info': false,
    'show-warnings': false,
    'quiet': true,
    'drop-empty-elements': false,
    'markup': true
  };

  let demo = document.querySelector('.demo');
  let demoCode = document.querySelector('.demo-code');

  initMarkup(demo, demoCode);

  function initMarkup(code, markup) {
    code.innerHTML = tidy_html5(code.innerHTML, tidyOpts);
    markup.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    hljs.highlightBlock(markup);
  }

})();