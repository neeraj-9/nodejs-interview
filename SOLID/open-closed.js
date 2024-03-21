/*The “O” in SOLID is for Open-Closed Principle, 
which states that software entities – such as classes, modules, functions and so on 
– should be open for extension but closed for modification. 
The idea is that it’s often better to make changes to things 
like classes by adding to or building on top of them (using mechanisms like subclassing or polymorphism) 
rather than modifying their code.


*/


// Without OCP
class Square {
    constructor(side) {
        this.side = side;
    }
}

class AreaCalculator {
    calculateSquareArea(square) {
        return square.side * square.side;
    }
}

// With OCP
class Shape {
    calculateArea() { }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}