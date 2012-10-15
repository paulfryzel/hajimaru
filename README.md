# genode

A project generator for node

## Usage

    Usage: genode <project>

    Options:

      -h, --help          output usage information
      -V, --version       output the version number
      -c, --coffeescript  enable coffeescript support

## Examples

### Hello genode!

    $ genode hello-genode && cd hello-genode
    $ echo "console.log('Hello genode\!');" >> lib/hello_genode.js
    $ node index

#### Project structure

    $ tree -a hello-genode/
    hello-genode/
    ├── .gitignore
    ├── .npmignore
    ├── README.md
    ├── index.js
    ├── lib
    │   └── hello_genode.js
    └── package.json

    1 directory, 6 files

### Hello genode! w/ CoffeeScript

    $ genode -c hello-genode && cd hello-genode && npm install
    $ echo "console.log 'Hello genode\!'" >> lib/hello_genode.coffee
    $ node index

#### Project structure

    $ tree -a hello-genode/
    hello-genode/
    ├── .gitignore
    ├── .npmignore
    ├── README.md
    ├── index.js
    ├── lib
    │   └── hello_genode.coffee
    └── package.json

    1 directory, 6 files

## License

(The MIT License)

Copyright (c) 2012 Paul Fryzel &lt;paul.fryzel@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
