
function Auto() {
    this.brand = prompt('Марка');
    this.model = prompt('модель');
    this.date = +prompt('Год', 0);
    this.vin = prompt('VIN').length === 16;
}

Auto.prototype.log = function(){
    return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}`;
}

function Auto_Fuel() {
    this.engine = prompt('Объем двигателя');
    this.fuelConsumption = +prompt('Расход в литрах', 0);
}

Auto_Fuel.prototype = Object.create(Auto.prototype);
Auto_Fuel.prototype.checkFuelConsumption = function() {
    return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}; Объем двигателя: ${this.engine}; Расход: ${this.fuelConsumption}л.`;
}

function Auto_Electric(){
    this.batteryCapacity = prompt('Емкость батареи');
}

Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function() {
    return `Марка: ${this.brand.toUpperCase()}; Модель: ${this.model.toUpperCase()}; Год: ${this.date}; Vin: ${this.vin}; BattaryConfig: ${this.batteryCapacity}`;
}
