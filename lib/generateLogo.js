// generateLogo.js
// Import the Shape, Triangle, Circle, and Square classes from the shapes module
const { Shape, Triangle, Circle, Square } = require("./shapes");

// Define a function to generate an SVG logo string based on user input
function generateLogo(userInput) {
    // Destructure the userInput object to get the text, text color, shape, and shape color
    const { text, textColor, shape, shapeColor } = userInput;
  
    // Define an object that maps shape names to their corresponding classes
    const shapeObj = {
      Triangle: Triangle,
      Circle: Circle,
      Square: Square,
    };
    
  // Get the Shape class corresponding to the user's chosen shape
  const ShapeClass = shapeObj[shape];

  // Create an instance of the Shape class and set its color to the user's chosen shape color
  const shapeInstance = new ShapeClass();
  shapeInstance.setColor(shapeColor);

  // Generate the SVG strings for the text and shape using the user's chosen colors
  const textSVG = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
  const shapeSVG = shapeInstance.render();

  // Combine the text and shape SVG strings into a single SVG string with a viewBox of 0 0 300 200
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      ${shapeSVG}
      ${textSVG}
    </svg>
  `;
}

// Export the generateLogo function
module.exports = generateLogo;