class Auto {
    constructor() {
        this.brand = prompt('Марка');
        this.model = prompt('Модель');
        this.date = +prompt('Год', 0);
        this.vin = prompt('VIN').length === 16;
    }
    log() {
        return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}`;
    }
}
let auto = new Auto();
auto.log();

class Auto_Fuel extends Auto {
    constructor() {
        this.engine = prompt('Объем двигателя');
        this.fuelConsumption = +prompt('Расход в литрах', 0);
    }
    checkFuelConsumption(){
        return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}; Объем двигателя: ${this.engine}; Расход: ${this.fuelConsumption}л.`;
    }
}
let autoFuel = new Auto_Fuel();
autoFuel.checkFuelConsumption();

class Auto_Electric extends Auto {
    constructor() {
        this.batteryCapacity = prompt('Емкость батареи');
    }
    showBatteryConfig() {
        return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}; BattaryConfig: ${this.batteryCapacity}`;
    }
}
let autoElectric = new Auto_Electric();
autoElectric.showBatteryConfig();