// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[(arr.length)-1];
}

function getArrayLength(arr) {
  return arr.length;
}

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

function addItemToFront(arr, item) {
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
    return words.join(' ');
}


function contains(arr, item) {
    return arr.includes(item); 
}

function addNumbers(numbers) {
    const sum = numbers.reduce(function(num1, num2){
        return num1 + num2;
   });
   return sum;
}

function averageTestScore(testScores) {
    let average = 0;
    for (const score of testScores) {
        average += score;
    }
    return average / testScores.length;
}

function largestNumber(numbers) {
    return Math.max(...numbers);
}


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
