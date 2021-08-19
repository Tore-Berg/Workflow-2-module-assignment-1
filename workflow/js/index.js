//Question 1
//Declare an array that accepts only number and boolean values.
let multipleTypes;
//Example:
multipleTypes = [10, false];
//Question 2
//Declare a tuple that takes 3 values: a boolean, a string, and a number
let tuple;
//Example:
tuple = [true, "typescript is all new", 1];
//Question 3
//Set the Type for the arguments and return value for this function.
let firstName = "Tore";
let lastName = "Berg";
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
getFullName(firstName, lastName); //Brain freeze on this one. Been a long holiday
//Question 4
//Create an interface that could be used for these objects.
let persons = [
    { name: "Burt", age: 77, jobTitle: "Magician" },
    { name: "Walt", age: 11 },
    { name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];
//Question 5
//Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.
var Members;
(function (Members) {
    Members[Members["Paid"] = 0] = "Paid";
    Members[Members["Unpaid"] = 1] = "Unpaid";
    Members[Members["Unknown"] = 2] = "Unknown";
})(Members || (Members = {}));
//Question 6
//Create a Person class.
//The class's constructor should set a name property when instantiated, and the class should contain a method that returns the string: "My name is " + the value of the name property.
class Person {
    constructor(personName) {
        this.name = personName;
    }
    displayName() {
        return "My name is " + this.name;
    }
}
const newPerson = new Person("Tore");
const nameOfPerson = newPerson.displayName();
console.log(nameOfPerson);
function getDetails(name, details) { }
