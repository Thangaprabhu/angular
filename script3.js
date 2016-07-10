var myApp = angular.module("myModule",[]).
	controller("myController", function($scope) {
	
	var employee = {
			firstName : "Thangaprabhu",
			lastName : "Chandrasekhar",
			gender : "Male"
	};
	$scope.employee = employee;
});

