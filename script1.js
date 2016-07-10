var myApp = angular.module("myModule",[]);

var controller = function($scope) {
	$scope.message = "Welcome to Angular JS Controller and Module";
}

myApp.controller("myController", controller);