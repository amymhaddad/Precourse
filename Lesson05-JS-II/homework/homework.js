// Do not change any of the function names

// x and y are integers.  Return the larger integer
// if they are the same return either one
function getBiggest(x, y) {
    return x > y ? x:y;
}

// language: 'Mandarin' -> 'Ni Hao!'
// language: 'Spanish' -> 'Hola!'
// if language is undefined return 'Hello!'
function greeting(language) {
   switch(language) {
       case 'German':
           return 'Guten Tag!';
        case 'Mandarin':
            return 'Ni Hao!';
        case 'Spanish': 
            return 'Hola!';
    default:
        return 'Hello!';
   }
}

// return true if num is 10 or 5
  // otherwise return false
function isTenOrFive(num) {
   return num === 5 || num === 10;
}


// return true if num is less than 50 and greater than 20
// otherwise return false
function isInRange(num) {
    return num < 50 && num > 20;
}

function isInteger(num) {
    return Number.isInteger(num);
}


// if num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num
function fizzBuzz(num) {
    let newWord = '';

    if (num % 3 === 0) {
        newWord += 'fizz';
    }
    if (num % 5 === 0) {
        newWord += 'buzz';  
    }
    return newWord || num;
}


function isPrime(num) {
    if (num == 0 || num == 1)
    return false;

  for (let i = 2; i < num-1; i++) {
    if (num % i == 0)
      return false;
  }

  return true;
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};