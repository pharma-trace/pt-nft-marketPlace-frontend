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

  let options = {
    default: 'paragraph-1',
    showHash: false
  };

  new ActiveMenuLink('.nft__active-menu-link', options);
})();

