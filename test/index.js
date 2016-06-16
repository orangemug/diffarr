var assert       = require("assert");
var diffarr      = require("../");
var isEqual      = require("lodash.isequal");
var readmeTester = require("readme-tester");


describe("diffarr", function() {

  describe("no comparision function", function() {
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
  })


  describe("comparision function", function() {
    it("removed", function() {
      var rslt = diffarr([{a: 1},{a: 2}], [], isEqual);
      assert.deepEqual(rslt, {
        removed: [{a: 1},{a: 2}],
        same:    [],
        added:   []
      });
    });

    it("added", function() {
      var rslt = diffarr([], [{a: 1},{a: 2}], isEqual);
      assert.deepEqual(rslt, {
        removed: [],
        same:    [],
        added:   [{a: 1}, {a: 2}]
      });
    });

    it("same", function() {
      var rslt = diffarr([{a: 1}, {a: 2}], [{a: 1}, {a: 2}], isEqual);
      assert.deepEqual(rslt, {
        removed: [],
        same:    [{a: 1}, {a: 2}],
        added:   []
      });
    });

    it("all", function() {
      var rslt = diffarr([{a: 1}, {a: 2}, {a: 3}], [{a: 3}, {a: 4}], isEqual);
      assert.deepEqual(rslt, {
        removed: [{a: 1}, {a: 2}],
        same:    [{a: 3}],
        added:   [{a: 4}]
      });
    });
  });

  describe("docs", function() {
    it("readme", function(done) {
      readmeTester(__dirname+"/..", function(err, assertions) {
        assert.ifError(err);
        done(err);
      });
    });
  });

})
