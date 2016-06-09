var assert       = require("assert");
var diffarr      = require("../");
var readmeTester = require("readme-tester");


describe("diffarr", function() {

  it("removed", function() {
    var rslt = diffarr([1,2], []);
    assert.deepEqual(rslt, {
      removed: [1,2],
      same:    [],
      added:   []
    });
  });

  it("added", function() {
    var rslt = diffarr([], [1,2]);
    assert.deepEqual(rslt, {
      removed: [],
      same:    [],
      added:   [1,2]
    });
  });

  it("same", function() {
    var rslt = diffarr([1,2], [1,2]);
    assert.deepEqual(rslt, {
      removed: [],
      same:    [1,2],
      added:   []
    });
  });

  it("all", function() {
    var rslt = diffarr([1,2,3], [3,4]);
    assert.deepEqual(rslt, {
      removed: [1,2],
      same:    [3],
      added:   [4]
    });
  });

  it("readme", function(done) {
    readmeTester(__dirname+"/..", function(err, assertions) {
      assert.ifError(err);
      done(err);
    });
  });

})
