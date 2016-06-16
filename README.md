# diffarr
Diff two arrays

[![circleci](https://circleci.com/gh/orangemug/diffarr.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/diffarr.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/diffarr/dev-status.svg)][dm-dev]

[circleci]:  https://circleci.com/gh/orangemug/diffarr
[dm-prod]:   https://david-dm.org/orangemug/diffarr
[dm-dev]:    https://david-dm.org/orangemug/diffarr#info=devDependencies


## Usage
Basic usage

```js
var diffarr = require("diffarr");

var rslt = diffarr([1,2,3], [3,4]);
assert.deepEqual(rslt, {
  removed: [1, 2],
  same: [3],
  added: [4]
});
```

You can also provide a third arg which is a comparision function. In the following example we'll use the `lodash.isEqual` method

```js
var diffarr = require("diffarr");
var isEqual = require("lodash.isequal");

var rslt = diffarr([{name: "foo"}, {name: "bar"}], [{name: "bar"}, {name: "baz"}], isEqual);
assert.deepEqual(rslt, {
  removed: [{name: "foo"}],
  same: [{name: "bar"}],
  added: [{name: "baz"}]
});
```

## License
[MIT](LICENSE)
