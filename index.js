function diffarr(oldArr, newArr) {
  var removedItems = oldArr.filter(function(item) {
    return newArr.indexOf(item) < 0;
  });

  var sameItems = oldArr.filter(function(item) {
    return newArr.indexOf(item) > -1;
  });

  var addedItems = newArr.filter(function(item) {
    return oldArr.indexOf(item) < 0;
  });

  return {
    removed: removedItems,
    same:    sameItems,
    added:   addedItems,
  };
}

module.exports = diffarr;
