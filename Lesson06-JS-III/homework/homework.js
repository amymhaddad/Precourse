// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

// return the last item of the array
function returnLast(arr) {
  return arr[(arr.length)-1];
}

function getArrayLength(arr) {
  return arr.length;
}

// arr is an array of integers  
// increase each integer by one
//  return the array
function incrementByOne(arr) {
    let addOne = [];
    for (let number of arr) {
        addOne.push(number+1);
    }
    return addOne;
}

//add item to end of arry
function addItemToArray(arr, item) {
    arr.push(item);
    return arr;
}


// add the item to the front of the array
// return the array
function addItemToFront(arr, item) {
    arr.unshift(item);
    return arr;
}


// words is an array of strings
// return a string that is all of the words concatenated together
// spaces need to be between each word
// example: ['Hello', 'world!'] -> 'Hello world!'
function wordsToSentence(words) {
    return words.join(' ');
}


// check to see if item is inside of arr
// return true if it is, otherwise return false
function contains(arr, item) {
    return arr.includes(item); 
}


// numbers is an array of integers.
// add all of the integers and return the value
function addNumbers(numbers) {
    const sum = numbers.reduce(function(num1, num2){
        return num1 + num2;
   });
   return sum;
}


// testScores is an array.  Iterate over testScores and compute the average.
// return the average
function averageTestScore(testScores) {
    let average = 0;
    for (const score of testScores) {
        average += score;
    }
    return average / testScores.length;
}

 // numbers is an array of integers
  // return the largest integer
function largestNumber(numbers) {
    return Math.max(...numbers);
}


// use the arguments keyword to multiply all of the arguments together and return the product
// if no arguments are passed in return 0
// if one argument is passed in just return it
function multiplyArguments() {
    let number = 1;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length >1 ){
            number *= arguments[i];
        }
        else if (arguments.length === 1) {
            return arguments[i];
        }
    }
    if (number > 1) {
        return number;
    }
    else {
        return 0;
    }
}

  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it


// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
