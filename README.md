# freeport-promise
[![Build Status](https://secure.travis-ci.org/achingbrain/freeport-promise.svg)](http://travis-ci.org/achingbrain/freeport-promise) [![Coverage Status](https://coveralls.io/repos/achingbrain/freeport-promise/badge.svg?branch=master&service=github)](https://coveralls.io/github/achingbrain/freeport-promise?branch=master)

Like [freeport](https://libraries.io/npm/freeport) but with promises.

```javascript
freeport()
.then(port => {
  console.log(port)
})
```

## Using other promise libraries

By default we use the language-level `Promise` class, but if you want to use a different implementation, just pass it in as an argument:

```javascript
const bluebird = require('bluebird')

freeport(bluebird)
.then(port => {
  console.log(port)
})
```
