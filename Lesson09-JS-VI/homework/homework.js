// Do not change any of the function names

// invoke cb
function invokeCallback(cb) {
    return cb();
}

// sum up all of the integers in the numbers array
// pass the result to cb
// no return is necessary
function sumArray(numbers, cb) {
    let total = numbers.reduce((acc, curr) => acc + curr);
    return cb(total);
}

// iterate over arr and pass its values to cb one by one
// hint: you will be invoking cb multiple times (once for each value in the array)
function forEach(arr, cb) {
    arr.forEach(element => cb(element));
  }


// create a new array
// iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
// the new array should be the same length as the array argument
function map(arr, cb) {
    return arr.map(function(number){
        return cb(number);
    });
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
