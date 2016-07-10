var myApp = angular.module("myModule",[]);

var controller = function() {
	this.message = "Welcome to Angular JS Controller without scope";
}

myApp.controller("myController", controller);