class Personnel {
  constructor(speakerContainer) {
    this.personnelContainer = speakerContainer;
    this.personnelBio = this.personnelContainer.querySelector('.speaker-description');
    this.personnelImage = this.personnelContainer.querySelector('.speaker-image');
    this.personnelBio = this.personnelContainer.querySelector('.speaker-description');
    this.personnelHoverBind = this.togglePersonnelBio.bind(this);
    this.bindPersonnelImages();
  }

  togglePersonnelBio() {
    this.toggleState(this.personnelBio, 'hidden', 'visible');
  }

  bindPersonnelImages() {
    this.personnelImage.addEventListener('mouseenter', this.personnelHoverBind);
    this.personnelBio.addEventListener('mouseenter', this.personnelHoverBind);
    this.personnelImage.addEventListener('mouseleave', this.personnelHoverBind);
    this.personnelBio.addEventListener('mouseleave', this.personnelHoverBind);
  }


  toggleState(elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  }
}

export default Personnel;
