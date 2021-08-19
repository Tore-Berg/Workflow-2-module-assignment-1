//Question 1
//Declare an array that accepts only number and boolean values.

let multipleTypes: (number | boolean)[];

//Example:

multipleTypes = [10, false]

//Question 2
//Declare a tuple that takes 3 values: a boolean, a string, and a number

let tuple: [boolean, string, number];

//Example:

tuple = [true, "typescript is all new", 1]

//Question 3
//Set the Type for the arguments and return value for this function.


let firstName = "Tore"
let lastName = "Berg"

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

getFullName(firstName, lastName) //Brain freeze on this one. Been a long holiday

//Question 4
//Create an interface that could be used for these objects.

let persons = [
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];

interface Persons {
    name: string;
    age: number;
    jobTitle?: string;
}
//Question 5
//Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.

enum Members {
    Paid,
    Unpaid,
    Unknown,
}

//Question 6
//Create a Person class.

//The class's constructor should set a name property when instantiated, and the class should contain a method that returns the string: "My name is " + the value of the name property.

class Person {
    name: string;

    constructor(personName: string) {
        this.name = personName;
    }

    displayName() {
        return "My name is " + this.name;
    }
}

const newPerson = new Person("Tore")
const nameOfPerson = newPerson.displayName();

console.log(nameOfPerson)

//Question 7
//Create type aliases for the arguments in this function.

/***function getDetails(name: string | boolean, details: { id: number | string, status: string | boolean }){}**/

type NumStr = number | string;
type StrBool = string | boolean;
type Details = { id: NumStr, status: StrBool }

function getDetails(name: StrBool, details: Details) {}
