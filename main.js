Person = function (name){
	this.name = name
};
Person.prototype.greet = function(){
alert ("Hello, my name is " + this.name)
};
Person.prototype.replace = function(){
alert (" and im programmer on - " + Math.round((Math.random() *100)) + "%")
}
var personA = new Person ("Killreal")

personA.greet();
personA.replace();
var personB = new Person ("Sergey")

personB.greet();
personB.replace();
