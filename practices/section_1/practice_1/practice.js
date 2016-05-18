function collect_same_elements(collection_a, collection_b) {
  {
    var newArray = [];

    collection_a.forEach(function (item) {
      if (isExist(item, collection_b)) {
        newArray.push(item);
      }
    });

    return newArray;
  }

  function isExist(element, collection_b) {
    for (var i = 0; i < collection_b.length; i++) {
      if (element === collection_b[i])

        return true;
    }

    return false;
  }
}

module.exports = collect_same_elements;
