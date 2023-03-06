// lib/prompt.js

const inquirer = require("inquirer");

// Define a function to prompt the user for input
function promptUser() {
  // Define an array of questions to ask the user
  const questions = [
    // First question: prompt for the logo text
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: function (value) {
        // Validate that the text entered is three characters or fewer
        const isValid = value.length <= 3;
        return isValid ? true : "Please enter up to three characters.";
      },
          // Second question: prompt for the text color
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color (name or hexadecimal):",
      },
          // Third question: prompt the user to choose a shape
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for the logo:",
        choices: ["Triangle", "Circle", "Square"],
      },
  ];

  // Use Inquirer to prompt the user with the questions and return the answers
  return inquirer.prompt(questions);
}

module.exports = promptUser;

