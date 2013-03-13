/*jslint node: true */
"use strict";

var fs = require('fs'),
    mkdirp = require('mkdirp');

var createDirectoriesSync = function (root, directories) {
  directories.forEach(function (subdir) {
    mkdirp.sync(root + '/' + subdir, '0755', function (err) {
      if (err) {
        throw err;
      }
    });
  });
};

var createFiles = function (root, files) {
  Object.keys(files).forEach(function (file) {
    fs.writeFile(root + '/' + file, files[file], function (err) {
      if (err) {
        throw err;
      }
    });
  });
};

module.exports.generate = function (project) {
  createDirectoriesSync(project.root, project.directories);
  createFiles(project.root, project.files);
};
