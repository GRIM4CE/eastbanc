'use strict';
import Modal from './components/modal';
import Personnel from './components/personnel';

function appInit() {
  // Create Modal
  if (document.querySelector(".modal-container")) {
    const modal = new Modal();
  }

  // Create Personnel
  if (document.querySelectorAll('.speaker-container')) {
    const personnelContainers = document.querySelectorAll('.speaker-container');
    for (let i = 0; i < personnelContainers.length; i++) {
      if (personnelContainers[i].querySelector('.speaker-description') !== null) {
        new Personnel(personnelContainers[i]);
      }
    }
  }
}

appInit();
