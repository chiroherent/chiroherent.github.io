module.exports = (collection, tag) => {
  const collectionSorted = collection.getFilteredByTag(tag)
    .sort((a, b) => { // sort according to the order field in the front matter
      return Number(a.data.order) - Number(b.data.order);
    });
  return collectionSorted;
};