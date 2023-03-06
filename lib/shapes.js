// Setting the Shape, and colors. 

class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  // The render method will be implemented in the child classes
}

module.exports = Shape;
