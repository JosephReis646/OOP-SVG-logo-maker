const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
    it("should generate the correct SVG string", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe("Circle", () => {
    it("should generate the correct SVG string", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });