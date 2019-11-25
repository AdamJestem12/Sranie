var Car = new Object();
    Car.color = "Red"; 
    Car.type = "Sedan";
    Car.manufacturer = "Tesla"; //producer
    Car.model = "Najnowszy";
    Car.engine = "electric";
    Car.fuel = "electricity";


// Metody obiektowe
Car.startEngine = function() {}





class Car {
    color = "Red";
    type = "Sedan";
    manufacturer = "Tesla";
    model = "Najnowszy";
    engine = "electric";
    fuel = "electricity";

    constructor(color, type, manufacturer, model, engine, fueal){
        this.color = color;
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.engine = engine;
        this.fuel = fueal;
    }
}

class Truck extends Car {
    constructor(color, type, manufacturer, model, engine, fueal, wheel, pipe, tires){
        super(color, type, manufacturer, model, engine, fueal); // importuje wartości z Car
        this.wheel = wheel;
        this.pipe = pipe;
        this.tires = tires;
    }
}

var tesla = new Car("Red", "Sedan", "Tesla", "Najnowszy", "electric", "electricity");
var maluch = new Car("Blue", "Nwm", "Nwm", "Nwm", "Nwm", "Nwm");