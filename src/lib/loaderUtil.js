'use strict';

const fs = require('fs');

/**
 * Determines if the file (or directory) located at the given filename is
 * a module that should be loaded
 * @param {string} file - The name of the file
 */
exports.isModule = (file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
};

/**
 * Collects all of the modules in a directory into a single object,
 * with keys equivalent to the name of each module
 * @param {string} dirName - The directory to load
 */
exports.loadModuleDirectory = (dirName) => {
  const modules = {};

  fs
    .readdirSync(dirName)
    .filter((file) => exports.isModule(file))
    .forEach((file) => {
      const moduleName = getModuleName(file);
      modules[moduleName] = require(`${dirName}/${file}`);
    });

  return modules;
};

/**
 * Gets the name of a module, whether it is a single file
 * or a directory with an index.js file inside
 * @param {string} file - THe name of the file 
 */
const getModuleName = (file) => {
  return file.match(/.js$/) ?
    file.slice(0, -3) :
    file;
};