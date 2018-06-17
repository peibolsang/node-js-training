var fs = require("fs");

fs.stat("nexttick.js",function (err,stats){
	if (stats) {console.log("nexttick.js Exists");}
}
);

setImmediate(function(){
	console.log("Immediate timer 1 executed");
});

setImmediate(function(){
	console.log("Immediate timer 2 executed");
});

process.nextTick(function(){
	console.log("Next tick 1 executed");
});

process.nextTick(function(){
	console.log("Next tick 2 executed");
});
