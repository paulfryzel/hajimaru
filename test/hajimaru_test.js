/*jslint node: true */
"use strict";

var assert = require('assert'),
    mocks = require('mocks'),
    sinon = require('sinon'),
    vows = require('vows');

vows.describe('Files').addBatch({
  'when created': {
    topic: function() {
      return mocks.loadFile(__dirname + '/../lib/hajimaru.js', {
        fs: mocks.fs.create({
          foo: {}
        })
      });
    },
    'are written without error': function(topic) {
      var callback = sinon.spy(topic.fs, 'writeFile');
      topic.createFiles('foo', {
        'foo.js': 'console.log(\'asdf\')',
        'README.md': '# foo',
        '.gitignore': ''
      });
      assert(callback.calledThrice);
      callback.exceptions.forEach(function(e) {
        assert.equal(e, undefined);
      });
    }
  }
}).exportTo(module);
