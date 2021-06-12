// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";
// console.log(company.ceo);
// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = "110";
// console.log("stock price is: " + 
// 	company[stockPropName]);

// var facebook = {
// 	name: "Facebook", 
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},
// 	stock: 110
// };
// console.log(facebook);

// function multiply(x, y) {
// 	return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {

// 	return multiplier * x;
// 	};
// 	return myFunc;
// }
// var multiplyby3 = makeMultiplier(3);
// console.log(multiplyby3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// function doOperation(x, operation) {
// 	return operation(x);
// }
// var result = doOperation(5,multiplyby3);
// console.log(result);

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }
// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);
// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }
// value = { x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);

// function test() {
// 	console.log(this);
// 	this.myName = "Shivam";
// }
// test();
// console.log(window.myName);

// function Circle (radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
//  function() {
// 	return Math.PI = Math.pow(this.radius, 2);
// };
// var myCircle = new Circle (10);
// console.log(myCircle.getArea);

// var literalCircle = {
// 	radius: 10,

// 	getArea: function () {
// 		var self = this;
// 		console.log(this);
// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI = Math.pow(this.radius, 2);
// 	}
// };
// console.log(literalCircle.getArea());

// Arrays
// var array = new Array();
// array[0] = "Shivam";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = { firstName: "Mital"
// };

// console.log(array);
// array[2](array[1]);

// var names = ["Shivam", "Mitz", "Baran"];
// // console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

var names2 = ["Shivam", "Mitz", "Baran"];
var myObj = {
	name: "Shivam",
	firstName: "Mital",
	platform: "Web"
};
for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}
names2.greeting = "Hi";
for (var name in names2) {
	console.log("Hello " + names2[name]);
}
// function makeMultiplier (multiplier) {
// 	function b() {
// 		console.log("Multiplier is: " + multiplier);
// 	}
// 	b()
// 	return (
// 		function(x) {
// 			return (multiplier * x);

// 		}
// 		);
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));