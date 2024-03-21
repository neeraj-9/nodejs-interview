
//Union Type
function printId(id: number | string) {
    console.log(`ID is ${id}`);
}

printId(101); // Output: ID is 101
printId("abc"); // Output: ID is abc

//Readonly immutable

class MyClassOne {
    readonly readOnlyProperty: number;

    constructor(value: number) {
        this.readOnlyProperty = value;
    }

    // You can have other methods and properties in the class as well
}

const instanceOne = new MyClassOne(10);

console.log(instanceOne.readOnlyProperty); // Output: 10

// You cannot reassign the read-only property once it's set
// instance.readOnlyProperty = 20; // This will result in a TypeScript error

//mutable
class MyClassTwo {
    readonly mutableObject: { value: number };

    constructor(value: number) {
        this.mutableObject = { value };
    }

    // You can have other methods and properties in the class as well
}

const instance = new MyClassTwo(10);

console.log(instance.mutableObject.value); // Output: 10

// While the mutableObject itself is read-only, the properties of the object can still be modified
instance.mutableObject.value = 20;
console.log(instance.mutableObject.value); // Output: 20

//As keyword

let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
