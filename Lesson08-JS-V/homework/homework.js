// Do not change any of the function names

// create an ES6 class or a constructor function called User
// it should accept an options object with username, name, email, and password properties
// in the constructor set the username, name, email, and password properties
// the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
// {{name}} should be the name set on each instance
// return the class
function createUserClass() {
    //user is an object consturcturo -- that constucts objects 
    return User;
}

// pass in objrct and then pull things out of that Object in the params 
function User(username, name, email, password) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.sayHi = function() {
    return `Hello, my name is ${this.name}`;
};

//createUserClass() returns the User constructor that is assigned to a var, userConstructor
const userConstructor = createUserClass();
//Assign user to a new user object
const user = new userConstructor();
user.sayHi();





function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
