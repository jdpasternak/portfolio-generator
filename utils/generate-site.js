const fs = require("fs");
const { isBuffer } = require("util");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's .catch() method
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = {
  writeFile,
  copyFile,
};
