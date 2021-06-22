class Car {
    brand: string;
    readonly numOfWheels: number;
    readonly color: string;
    readonly numOfDoors: number;
    marketValue: number;
    hasFuel: boolean;
    engineType: string;
    private started: boolean = false;
    private driving: boolean = false;
    private stopped: boolean = false;

    constructor (brand: string, wheels: number, color: string, doors: number, value: number, fuel: boolean, engine: string) {
        this.brand = brand;
        this.numOfWheels = wheels;
        this.color = color;
        this.numOfDoors = doors;
        this.marketValue = value;
        this.hasFuel = fuel;
        this.engineType = engine;
    }

    getCarDetails = () => {
        console.log
        (
            `\n<========== Calling the getCarDetails() function =============>\nHere are the details of your car \n
            The brand is: ${this.brand} \n
            Engine type: ${this.engineType} \n
            ${this.numOfWheels} wheels \n
            ${this.numOfDoors} doors \n
            Color: ${this.color} \n
            Price: ${this.marketValue}$\n
            Has fuel in its tank: ${this.hasFuel} \n`
        )
    }

    startCar = () => {
        if (this.stopped) {
            console.log(`\n<========== Calling the startCar() function =============>\nError! \n
            You are currently driving this car \n
            Hence, you have to stopp it first if you want to call the "start" function on it again \n`)
        }
        else if (this.hasFuel) {
            this.started = true;
            console.log(`\n<========== Calling the startCar() function =============>\nVehicle started... \n`);
        } else {
            console.log(`\n<========== Calling the startCar() function =============>\nThere is no fuel in your car, hence the car can not be started \n
            Yo can refuel by setting the "hasFuel" property of this property of this class to true \n`);
        }
    }

    driveCar = () => {
        if (this.started) {
            console.log(`\n<========== Calling the driveCar() function =============>\nDriving... \n`)
            this.driving = true
        } else {
            console.log(`\n<========== Calling the driveCar() function =============>\nError! \n
            Engine is off \n
            You have to start the Car (by calling the "startCar()" method) before you can drive this car \n`)
        }
    }

    stopCar = () => {
        if (this.started || this.driving) {
            console.log(`\n<========== Calling the stopCar() function =============>\nCar brought to a halt \n`);
            this.started = false;
            this.driving = false;
            this.stopped = true;
        } else {
            console.log(`\n<========== Calling the stopCar() function =============>\nCar has not been started at all \nYou can't stopp a car that hasn\'t been started \nPlease start the car first \n`);
            this.started = false;
            this.driving = false;
            this.stopped = false;
        }
    }
}

let myCar = new Car("Volvo", 4, "White", 4, 25000, true, "Spark Injector Combustion Engine");


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