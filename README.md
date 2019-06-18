# bx.js
a tiny dom / util library written in es6.

# tutorial

```javascript

// import the module as a single object

import bx from '.path/to/bx.js';

// or only import the modules you need!

import { ready, selector } from './path/to/bx.js';

```

## checking if dom state is ready

```javascript
  ...
  
  const myfunc = () => { };
  
  bx.ready(document, myfunc);
```
## selecting an element

```javascript
...

// when no context element is passed

const mylist = bx.select("ul#mylist"); // uses document as context

// when a context element is passed

const mylistitem = bx.select("li#mylistitem", mylist); // mylist is the context element

// select all matching elements

const mylistitems = bx.select("li#mylistitem", mylist);
```
## create an html element

nothing special here, its just an wrapper arround document.createElement() function

```javascript
...

const div = bx.create("div");
```

## event handling

```javascript
...
const mybutton = bx.select(".mybutton");

const myfunc = () => console.log("clicked!");

// attach event listener

bx.on(mybutton, "click", myfunc);

// remove event listener

bx.off(mybutton, "click", myfunc);
```

...many new functions will be added in future. but i will try to not blot this library with unneccessary functions.
