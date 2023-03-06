// index.js

const fs = require("fs");
const promptUser = require("./lib/prompt");
const generateLogo = require("./lib/generateLogo");

const fileName = "logo.svg";

promptUser().then((userInput) => {
  const logoSVG = generateLogo(userInput);
  fs.writeFile(fileName, logoSVG, (err) => {
    if (err) throw err;
    console.log(`Generated ${fileName}`);
  });
});
