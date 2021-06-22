var Car = /** @class */ (function () {
    function Car(brand, wheels, color, doors, value, fuel, engine) {
        var _this = this;
        this.started = false;
        this.driving = false;
        this.stopped = false;
        this.getCarDetails = function () {
            console.log("\n<========== Calling the getCarDetails() function =============>\nHere are the details of your car \n\n            The brand is: " + _this.brand + " \n\n            Engine type: " + _this.engineType + " \n\n            " + _this.numOfWheels + " wheels \n\n            " + _this.numOfDoors + " doors \n\n            Color: " + _this.color + " \n\n            Price: " + _this.marketValue + "$\n\n            Has fuel in its tank: " + _this.hasFuel + " \n");
        };
        this.startCar = function () {
            if (_this.stopped) {
                console.log("\n<========== Calling the startCar() function =============>\nError! \n\n            You are currently driving this car \n\n            Hence, you have to stopp it first if you want to call the \"start\" function on it again \n");
            }
            else if (_this.hasFuel) {
                _this.started = true;
                console.log("\n<========== Calling the startCar() function =============>\nVehicle started... \n");
            }
            else {
                console.log("\n<========== Calling the startCar() function =============>\nThere is no fuel in your car, hence the car can not be started \n\n            Yo can refuel by setting the \"hasFuel\" property of this property of this class to true \n");
            }
        };
        this.driveCar = function () {
            if (_this.started) {
                console.log("\n<========== Calling the driveCar() function =============>\nDriving... \n");
                _this.driving = true;
            }
            else {
                console.log("\n<========== Calling the driveCar() function =============>\nError! \n\n            Engine is off \n\n            You have to start the Car (by calling the \"startCar()\" method) before you can drive this car \n");
            }
        };
        this.stopCar = function () {
            if (_this.started || _this.driving) {
                console.log("\n<========== Calling the stopCar() function =============>\nCar brought to a halt \n");
                _this.started = false;
                _this.driving = false;
                _this.stopped = true;
            }
            else {
                console.log("\n<========== Calling the stopCar() function =============>\nCar has not been started at all \nYou can't stopp a car that hasn't been started \nPlease start the car first \n");
                _this.started = false;
                _this.driving = false;
                _this.stopped = false;
            }
        };
        this.brand = brand;
        this.numOfWheels = wheels;
        this.color = color;
        this.numOfDoors = doors;
        this.marketValue = value;
        this.hasFuel = fuel;
        this.engineType = engine;
    }
    return Car;
}());
var myCar = new Car("Volvo", 4, "White", 4, 25000, true, "Spark Injector Combustion Engine");
myCar.getCarDetails();
myCar.stopCar();
myCar.startCar();
myCar.driveCar();
myCar.stopCar();
myCar.driveCar();
myCar.stopCar();
myCar.startCar();
myCar.stopCar();
myCar.stopCar();
myCar.driveCar();
