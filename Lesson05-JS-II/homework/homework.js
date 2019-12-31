// Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  }
  else if (x < y) {
    return y;
  }
  else if (x === y) {
    return x || y;
  }
}

function greeting(language) {
  const greetingsFriends = {
    'German': 'Guten Tag!',
    'Mandarin': 'Ni Hao!',
    'Spanish': 'Hola!',
  };
  
  if (language in greetingsFriends) {
    return greetingsFriends[language];
  }
  else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  }
  else {
    return false;
  }
}

function isInRange(num) {
  return num < 50 && num > 20;
}

function isInteger(num) {
  return Number.isInteger(num);
}

function fizzBuzz(num) {

  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (num % 3 === 0) {
    return 'fizz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  else {
    return num;
  }
}

function isPrime(num) {
  const range = [];
  for (let i=1; i <= num; i++) {
      range.push(i);
  }

  let factors = [];
  for (let outerNum of range) {
      for (let innerNum of range.slice(1)) {
          if (outerNum * innerNum === num) {
              factors.push(outerNum, innerNum);
          }
      }
  }

  if (factors.length > 2 || num === 0 || num === 1) {
    return false;
  }
  else {
    return true;
  }

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
