# diffarr
Diff two arrays


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
