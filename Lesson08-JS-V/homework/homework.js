// Do not change any of the function names


// create an ES6 class or a constructor function called User
// it should accept an options object with username, name, email, and password properties
// in the constructor set the username, name, email, and password properties
// the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
// {{name}} should be the name set on each instance
// return the class

function User (options) {
  this.username = options.username;
  this.name = options.name;
  this.email = options.email;
  this.password = options.password;
}

function createUserClass() {
    return User;
}

User.prototype.sayHi = function() {
    return `Hello, my name is ${this.name}`;
};


// const userConstructor = createUserClass();
// const user = new userConstructor();
// user.sayHi();
function addPrototypeMethod(Constructor) {
    Constructor.prototype.sayHi = function(){
        return 'Hello World!';
    };
}



// add a method to the string constructor's prototype that returns a reversed copy of the string
// name this method reverse
// hint:
// you will need to use 'this' inside of reverse

function addReverseString(string) {
    // this.string = string;
 
    // addReverseString.prototype.reverse = function() {
    //    let listWord = [];
    //    for (let i=this.string.length-   1; i >=0; i--){
    //       listWord.push(this.string[i]);
    //    }
    //    return listWord.join('');
    // };  
 }



// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
