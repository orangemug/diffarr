var find = require("lodash.find");


function defaultComparisionFn(a, b) {
  return a === b;
}

function diffarr(oldArr, newArr, comparisionFn) {
  comparisionFn = comparisionFn || defaultComparisionFn;

  var removedItems = [];
  var sameItems    = [];
  
  oldArr.forEach(function(item) {
    var ret = find(newArr, function(obj) {
      return comparisionFn(obj, item);
    })

    if(!ret) {
      removedItems.push(item);
    }
    else {
      sameItems.push(item);
    }
  });

  var addedItems = newArr.filter(function(item) {
    return !find(oldArr, function(obj) {
      return comparisionFn(obj, item);
    })
  });

  return {
    removed: removedItems,
    same:    sameItems,
    added:   addedItems,
  };
}

module.exports = diffarr;
