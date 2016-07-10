var myApp = angular.module("myModule",[]);

var controller = function($scope) {
	
	var employee = {
			firstName : "Thangaprabhu",
			lastName : "Chandrasekhar",
			gender : "Male"
	};
	$scope.employee = employee;
}

myApp.controller("myController", controller);