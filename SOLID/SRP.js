
/*
The “S” in SOLID is for Single Responsibility Principle, which states that 
every object should have a single responsibility 
and that all of its services should be aligned with that responsibility.
*/

// Without SRP
class User {
    constructor(name) {
        this.name = name;
    }

    saveToDatabase() {
        // Save user to the database
    }

    sendEmail() {
        // Send welcome email to the user
    }
}

// With SRP
class User {
    constructor(name) {
        this.name = name;
    }
}

class UserRepository {
    saveToDatabase(user) {
        // Save user to the database
    }
}

class EmailService {
    sendWelcomeEmail(user) {
        // Send welcome email to the user
    }
}
