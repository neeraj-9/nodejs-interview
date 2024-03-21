/*
Functions that use pointers or references to base classes must be 
able to use objects of derived classes without knowing it.

*/


// Without LSP
class Bird {
    fly() {
        // Fly logic
    }
}

class Penguin extends Bird {
    // Penguins can't fly
    fly() {
        throw new Error('Penguins can\'t fly');
    }
}

// With LSP
class Bird {
    move() { }
}

class FlyingBird extends Bird {
    fly() {
        // Fly logic
    }
}

class Penguin extends Bird {
    // Penguins can't fly
    move() { }
}