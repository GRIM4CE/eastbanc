'use strict';

class Modal {
  constructor() {
    this.body = document.querySelector('body');
    this.modalOpenButton = document.querySelectorAll('.modal-open-button');
    this.modalCloseButton = document.querySelectorAll('.modal-close-button');
    this.modal = document.querySelectorAll('.modal-container');
    this.bindButtons();
  }

  activateModal(regButton) {
    let modalId = regButton.getAttribute('data-modal');
    this.body.setAttribute('data-state', 'inactive');
    for(let i = 0; i < this.modal.length; i++) {
      if (this.modal[i].getAttribute('data-modal') === modalId) {
        this.modal[i].setAttribute('data-state', 'active');
      }
    }
  }

  deactivateModal() {
    this.body.setAttribute('data-state', 'active');
    for(let i = 0; i < this.modal.length; i++) {
      this.modal[i].setAttribute('data-state', 'inactive');
    }
  }

  bindButtons() {
    for(let i = 0; i < this.modalOpenButton.length; i++) {
      this.modalOpenButton[i].addEventListener('click', this.activateModal.bind(this,
      this.modalOpenButton[i]));
    }
    for(let i = 0; i < this.modalCloseButton.length; i++) {
      this.modalCloseButton[i].addEventListener('click', this.deactivateModal.bind(this));
    }
  }
}

export default Modal;
