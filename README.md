# diffarr
Diff two arrays

[![circleci](https://circleci.com/gh/orangemug/diffarr.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/diffarr.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/diffarr/dev-status.svg)][dm-dev]

[circleci]:  https://circleci.com/gh/orangemug/diffarr
[dm-prod]:   https://david-dm.org/orangemug/diffarr
[dm-dev]:    https://david-dm.org/orangemug/diffarr#info=devDependencies


## Usage

```js
var diffarr = require("diffarr");
var rslt = diffarr([1,2,3], [3,4]);
assert.deepEqual(rslt, {
  removed: [1, 2],
  same: [3],
  added: [4]
});
```

## License
[MIT](LICENSE)
