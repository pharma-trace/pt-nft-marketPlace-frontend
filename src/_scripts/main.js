// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import './tailwind.config';

import ActiveMenuLink from 'active-menu-link';

(function() {
  console.log('Ready');
  //document.querySelector('input[name = "category"]:checked').value;

  // ActiveMenuLink
  if ((location.pathname == '/pages/privacy-policy/index.html') ||
      (location.pathname == '/pages/cookie-policy/index.html') ||
      (location.pathname == '/pages/terms-of-service/index.html') ||
      (location.pathname == '/pages/faq/index.html')) {
    let options = {
      //default: 'paragraph-1',
      showHash: false
    };

    new ActiveMenuLink('.nft__active-menu-link', options);
  }

  // Flatpickr
  if (location.pathname.indexOf('/account/create/' > -1)) {
    let options = {
      enableTime: true,
      mode: 'range',
      position: 'auto center',
      dateFormat: 'Y-m-d H:i'
    }

    flatpickr('.datetime-picker', options);
  }
})();
