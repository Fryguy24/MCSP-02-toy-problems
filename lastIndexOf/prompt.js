// Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  newArr = [];
  index = array.IndexOf(target)
  while (index != -1) {
    newArr.push(index);
    index = array.indexOf(target, index + 1);
  }
}