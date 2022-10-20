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

  // Dark mode switcher
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', () => {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  });

  // Modal advance-search
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
  const modalAdvanceSearch = document.querySelector('[data-modal-toggle="modal-advance-search"]');
  const advanceSearchValue = document.getElementById('advance-search-value');
  modalAdvanceSearch.addEventListener('click', () => {
    setTimeout(() => {
      advanceSearchValue.focus();
    }, 100)
  });
  // Open modal advance-search with keydown event
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey) || (e.metaKey)) {
      if (e.code === 'KeyK') {
        modalAdvanceSearch.click();
        advanceSearchValue.focus();
      }
    }
  }, false);

  const taglist = document.querySelectorAll('.nft_taglist .tag');
  taglist.forEach(tag => {
    tag.addEventListener('click', (e) => {
      advanceSearchValue.value = e.currentTarget.innerText;
      document.querySelector('.nft__taglist-results').classList.remove('hidden');
    });
  });

  advanceSearchValue.addEventListener('keyup', (e) => {
    document.querySelector('.nft__taglist-results').classList.remove('hidden');
    if (advanceSearchValue.value == '') {
      document.querySelector('.nft__taglist-results').classList.add('hidden');
    }
  });

  // ActiveMenuLink
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
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

  // Overlay Scrollbars
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
  OverlayScrollbars(document.querySelectorAll('.mini-scrollbar'), {});

  // Flatpickr
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
  if (location.pathname.indexOf('/account/create/' > -1)) {
    let options = {
      enableTime: true,
      mode: 'range',
      position: 'auto center',
      dateFormat: 'Y-m-d H:i'
    }

    flatpickr('.datetime-picker', options);
  }

  // Logic multiple modal (buy/bid) flow
  // --------------------------------------------------------------------------------------------------------------------------------------------- //
  const elPopupModalRecaptcha = document.getElementById('popup-modal-recaptcha');
  const elPopupModalReviewInfoBuyBid = document.getElementById('popup-modal-review-info-buy-bid');
  const elPopupModalPlaceBid = document.getElementById('popup-modal-place-bid');

  const stepOne = {
    onHide: () => {
      const modalBackdrop = document.querySelectorAll('[modal-backdrop]');
      modalBackdrop.forEach(backdrop => {
        backdrop.classList.add('hidden');
      });
    },
  };

  const stepTwo = {
    onHide: () => {
      const modalBackdrop = document.querySelectorAll('[modal-backdrop]');
      modalBackdrop.forEach(backdrop => {
        backdrop.classList.add('hidden');
      });
    },
    onShow: () => {
      const buttonClosePopupReviewInfoBuyBid = document.querySelector('[data-button-close="popup-modal-review-info-buy-bid"]');
      buttonClosePopupReviewInfoBuyBid.addEventListener('click', () => {
        popupModalReviewInfoBuyBid.hide();
      });

      const checkboxUnderstand = document.querySelector('[data-checkbox-understand="popup-modal-review-info-buy-bid"]');
      checkboxUnderstand.addEventListener('click', (e) => {
        if (e.currentTarget.checked) {
          popupModalReviewInfoBuyBid.hide();
          popupModalPlaceBid.show();
        }
      });
    },
  };

  const stepThree = {
    onHide: () => {
      const modalBackdrop = document.querySelectorAll('[modal-backdrop]');
      modalBackdrop.forEach(backdrop => {
        backdrop.classList.add('hidden');
      });
    },
    onShow: () => {
      const buttonClosePopupPlaceBid = document.querySelector('[data-button-close="popup-modal-place-bid"]');
      buttonClosePopupPlaceBid.addEventListener('click', () => {
        popupModalPlaceBid.hide();
      });
    },
  };

  const popupModalRecaptcha = new Modal(elPopupModalRecaptcha, stepOne);
  const popupModalReviewInfoBuyBid = new Modal(elPopupModalReviewInfoBuyBid, stepTwo);
  const popupModalPlaceBid = new Modal(elPopupModalPlaceBid, stepThree);

  const buttonCheckPopupModalRecaptcha = document.querySelector('[data-button-check="popup-modal-recaptcha"]');
  buttonCheckPopupModalRecaptcha.addEventListener('click', () => {
    popupModalRecaptcha.hide();
    popupModalReviewInfoBuyBid.show();
  });
})();
