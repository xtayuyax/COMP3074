class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model}, Year: ${this.year}`;
    }

    getModel(){
        return this.model;
    }

    setModel(model){
        this.model = model;
    }

    getYear(){
        return this.year;
    }

    setYear(year){
        this.year = year;
    }
}

class Sedan extends Car{
    constructor(model, year, balance) {
        super(model, year)
        this.balance = balance;
    }

    info() {
        return `Model: ${this.model} has a balance of ${this.balance}`;
    }

    getBalance(){
        return balance;
    }

    setBalance(balance){
        this.balance = balance;
    }
}

module.exports.Car;
module.exports.Sedan;

const car2 = new Car("Pontiac Firebird", 1975);
console.log(car2.details());
const sedan = new Sedan("Volva SD", 2018, 30000);
console.log(sedan.info());
console.log(sedan.getModel());
console.log(sedan.getYear());
sedan.setModel("Dodge Charger");
console.log(sedan.getModel());
