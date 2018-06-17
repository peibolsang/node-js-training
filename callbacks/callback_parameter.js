var events = require("events");
function Car(){
	events.EventEmitter.call(this);
	this.see = function(make){
		this.emit("sawCar",make)
	};
}

Car.prototype.__proto__ = events.EventEmitter.prototype;

var car = new Car();

function logColor(make,color){
	console.log("Saw a "+ color +" " + make);
}

car.on("sawCar",function(make){
	if (make=="Ferrari")
		logColor(make,"Red");
	else if (make=="Porsche")
		logColor(make,"Black");
	else if (make=="Lamborghini")
		logColor(make,"Orange");
	else logColor(make,"White");
})

car.see("Ferrari");
car.see("Porsche");
car.see("Lamborghini");
car.see("Aston Martin");

