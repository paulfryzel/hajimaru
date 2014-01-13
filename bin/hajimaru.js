#!/usr/bin/env node

/*jslint node: true */
'use strict';

var hajimaru = require(__dirname + '/../lib/hajimaru'),
    os = require('os'),
    pkg = require(__dirname + '/../package.json'),
    program = require('commander'),
    version = pkg.version;

program
  .version(version)
  .usage('<project>')
  .option('-c, --coffeescript', 'enable coffeescript support')
  .parse(process.argv);

if (program.args.length !== 1) {
  console.log(program.help());
  return;
}

var project = {};
var directories = ['lib', 'test'];
var files = {};
var dependencies = {};
var eol = 'win32' === os.platform() ? '\r\n' : '\n';

project.root = program.args[0];
project.unroot = project.root.replace(/-/g, '_');
project.ext = program.coffeescript ? '.coffee' : '.js';
project.directories = directories;
project.files = files;

if (program.coffeescript) {
  dependencies['coffee-script'] = '*';
}

files['.gitignore'] = [
  '.DS_store',
  'lib-cov',
  '*.seed',
  '*.log',
  '*.csv',
  '*.dat',
  '*.out',
  '*.pid',
  '*.swp',
  '*.swo',
  '*.gz',
  '',
  'pids',
  'logs',
  'results',
  '',
  'npm-debug.log',
  'node_modules/'
].join(eol);

files['.npmignore'] = [
  '.DS_Store',
  'lib-cov',
  'coverage.html',
  '.git*',
  'docs/',
  'examples/',
  'support/',
  'test/',
  'testing.js'
].join(eol);

files['index.js'] = [
  '\'use strict\';',
  '',
  'module.exports = require(\'./lib/index\');'
].join(eol);

if (program.coffeescript) {
  var temp = files['index.js'];
  files['index.js'] = [
    'require("coffee-script");',
    temp
  ].join(eol);
}

files['package.json'] = JSON.stringify({
  name: project.root,
  version: '0.0.1',
  description: '',
  main: 'index.js',
  scripts: {
    'start': 'node index',
    'test': 'node test/index'
  },
  repository: '',
  author: '',
  license: '',
  dependencies: dependencies
}, null, 4);

files['README.md'] = [
  '# ' + project.root
].join(eol);

files['lib/index' + project.ext] = [
  '\'use strict\';'
].join(eol);

files['test/index' + project.ext] = [
  '\'use strict\';',
  '',
  'var assert = require(\'assert\');',
  '',
  'module.exports = function() { assert(1 > 0); };'
].join(eol);

hajimaru.generate(project);
