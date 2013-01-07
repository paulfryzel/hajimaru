# 始まる hajimaru(1)

A project generator for nodejs [![Build Status](https://secure.travis-ci.org/paulfryzel/hajimaru.png?branch=master)](http://travis-ci.org/paulfryzel/hajimaru)

npm: [https://npmjs.org/package/hajimaru](https://npmjs.org/package/hajimaru)

## Requirements

[nodejs](http://nodejs.org/) &gt;=0.6

## Install

    npm install -g hajimaru

## Usage

    Usage: hajimaru <project>

    Options:

      -h, --help          output usage information
      -V, --version       output the version number
      -c, --coffeescript  enable coffeescript support

## Examples

### Hello hajimaru!

    $ hajimaru hello-hajimaru && cd hello-hajimaru
    $ echo "console.log('Hello hajimaru\!');" >> lib/hello_hajimaru.js
    $ npm start

#### Project structure

    $ tree -a hello-hajimaru/
    hello-hajimaru/
    ├── .gitignore
    ├── .npmignore
    ├── README.md
    ├── index.js
    ├── lib
    │   └── hello_hajimaru.js
    ├── package.json
    └── test
        └── hello_hajimaru_test.js

    2 directories, 7 files

### Hello hajimaru! w/ CoffeeScript

    $ hajimaru -c hello-hajimaru && cd hello-hajimaru && npm install
    $ echo "console.log 'Hello hajimaru\!'" >> lib/hello_hajimaru.coffee
    $ npm start

#### Project structure

    $ tree -a hello-hajimaru/
    hello-hajimaru/
    ├── .gitignore
    ├── .npmignore
    ├── README.md
    ├── index.js
    ├── lib
    │   └── hello_hajimaru.coffee
    ├── package.json
    └── test
        └── hello_hajimaru_test.coffee

    2 directories, 7 files

## Notes

You are probably better off using [gruntjs](http://gruntjs.com/) or [npm init(1)](https://npmjs.org/doc/init.html) for project generation/management. Nonetheless, the hajimaru application fit a specific use-case for me and served as a brief foray into the land of nodejs.

## License

(The MIT License)

Copyright (c) 2012 Paul Fryzel &lt;paul.fryzel@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
