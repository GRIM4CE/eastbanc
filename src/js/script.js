'use strict';
import Modal from './components/modal';

function appInit() {
  // Create Modal
  if (document.querySelector(".modal-container")) {
    const modal = new Modal();
  }
}

appInit();
