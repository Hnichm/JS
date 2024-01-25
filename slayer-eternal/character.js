export class Character {
  constructor(imageSelector) {
    this.imageElement = document.querySelector(imageSelector);
  }

  displayImage(imagePath, width, height) {
    this.imageElement.src = imagePath;
    this.imageElement.width = width;
    this.imageElement.height = height;
  }
}
