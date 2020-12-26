var events = require('events');
var util = require('util');

var myCustomEmitter = new events.EventEmitter();
myCustomEmitter.on('xyz', function(mssg){
	console.log(mssg);
});

myCustomEmitter.emit('xyz', 'Hello there!');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var Natsu = new Person('Natsu');
var Gray = new Person('Gray');
var Erza = new Person('Erza');

var people = [Natsu, Gray, Erza];
people.forEach(function(person){
	person.on('speak', function(mssg){
		console.log(person.name + ' says,' + mssg);
	});
});

Erza.emit('speak', 'I like cake!');
Natsu.emit('speak', 'I am all fired up!');
Gray.emit('speak', 'You, flame brain!');



