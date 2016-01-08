function transform(obj) {
  var result = {};
  var newValue = Object.keys(obj);
  var set = obj[newValue];

  set.forEach(function(newValue) {
    result[newValue.toLowerCase()] = '0';
  });
  return result;

}


// Creating a function that will transform an object that is passed in as a parameter.
function transform(obj){
  // Creating an empty object that will hold the transformation of the object that is passed in.
  var newSet = {};

  // Iterating through the entire object and using the key as the iterator.
  for (var key in obj) {

    // Creating a new variable called newValue which will hold the value in the object.
    var newValue = Object.keys(obj)[0];

    // Iterating over the original object and using the newValue as the iterator.
    for (newValue in obj){
      // Creating a new variable called set which will hold the key.
      var set = obj[newValue];
      // Iterating over the keys in the object.
      for (var i = 0; i < set.length; i++) {
        // Pushing the set value to lower case as the key and then setting it equal to the newValue as an integer.
        newSet[set[i].toLowerCase()] = parseInt(newValue);
      }
    }

  }
  // Returning the new object.
  return newSet;
}


module.export = transform;


module.exports = transform;