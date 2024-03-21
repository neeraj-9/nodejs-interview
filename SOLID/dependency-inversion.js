/*
The “D” in SOLID is for Dependency Inversion Principle, 
which states that high-level modules shouldn’t depend on low-level modules, 
but both should depend on shared abstractions. In addition, abstractions should not depend on details
 – instead, details should depend on abstractions.
*/

class EmailController {
    sendEmail(emailDetails) {
        const response = EmailApiController.sendEmail(emailDetails);
        if (response.status == 200) {
            return true;
        } else {
            return false;
        }
    }
}

class EmailApiController {
    sendEmail(emailDetails) {
        // Only need to change this controller. return YahooAPI.sendEmail(emailDetails);
    }
}