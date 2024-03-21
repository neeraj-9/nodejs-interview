/*
The “I” in SOLID is for Interface Segregation Principle, 
which states that clients should not be forced to depend on methods they don’t use. 
If a class exposes so many members that those members can be broken down into groups 
that serve different clients that don’t use members from the other groups, you should
 think about exposing those member groups as separate interfaces.
*/


class DrivingTest {
    constructor(userType) {
        this.userType = userType;
    }

    startCarTest() {
        console.log("This is for Car Drivers");
    }

    startTruckTest() {
        console.log("This is for Truck Drivers");
    }
}

class CarDrivingTest extends DrivingTest {
    constructor(userType) {
        super(userType);
    }

    startCarTest() {
        return "Car Test Started";
    }

    startTruckTest() {
        return null;
    }
}

class TruckDrivingTest extends DrivingTest {
    constructor(userType) {
        super(userType);
    }

    startCarTest() {
        return null;
    }

    startTruckTest() {
        return "Truck Test Started";
    }
}

const carTest = new CarDrivingTest(carDriver);
console.log(carTest.startCarTest());
console.log(carTest.startTruckTest());

const truckTest = new TruckDrivingTest(ruckdriver);
console.log(truckTest.startCarTest());
console.log(truckTest.startTruckTest());