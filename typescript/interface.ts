interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}


let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};


function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}