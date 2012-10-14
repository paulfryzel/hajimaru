var fs = require('fs');
var os = require('os');

var dir = process.argv.slice(2).join('').trim();
var undir = dir.replace('-', '_');
var eol = 'win32' == os.platform() ? '\r\n' : '\n'

function usage() {
  console.log('Usage: genode <project>');
};

if (!dir.length) {
  usage();
  return;
}

fs.mkdir(dir, function(err) {
  if (err) throw err;
});

['lib'].forEach(function(subdir) {
  fs.mkdir(dir + '/' + subdir, function(err) {
    if (err) throw err;
  });
});

files = {
  '.gitignore': [
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
  ].join(eol),
  'index.js': 'module.exports = require(\'./lib/' + undir + '\');',
  'package.json': [
    '{',
    '    \"name\": \"' + dir + '\",',
    '    \"version\": \"0.0.1\"',
    '}'
  ].join(eol),
  'README.md': '# ' + dir,
};
files['lib/' + undir + '.js'] = '';

Object.keys(files).forEach(function(file) {
  fs.writeFile(dir + '/' + file, files[file], function(err) {
    if (err) throw err;
  });
});
