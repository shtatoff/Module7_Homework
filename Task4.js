function ElecrtricalDevice (name){
    this.name = name,
    this.typeDevice = 'Computer Device'
}

ElecrtricalDevice.prototype.getPower = function(power){
    return power;
}

function PeripheralDevices (name, model){
    this.name = name,
    this.model = model
}

PeripheralDevices.prototype = new ElecrtricalDevice()
PeripheralDevices.prototype.getConnectionType = function(connect){
    console.log(`Тип подключения к системному блоку ${connect}`)
}

const monitor = new PeripheralDevices('Monitor', 'Samsung');
const systemUnit = new ElecrtricalDevice('System Unit');
const lamp = new ElecrtricalDevice('Lamp')
const printer = new PeripheralDevices('Printer', 'Brothers')
console.log(monitor);
monitor.getPower(18);
monitor.getConnectionType('HDMI');
console.log(systemUnit);
systemUnit.getPower(180);
console.log(lamp);
lamp.getPower(40);
console.log(printer);
printer.getPower(25);
printer.getConnectionType('Usb-A');
const energyConsumption = monitor.getPower(18) + systemUnit.getPower(180) + lamp.getPower(40) + printer.getPower(25);
console.log(`Суммарная потребляемая мощность электроэнергии ${energyConsumption} W/h`);