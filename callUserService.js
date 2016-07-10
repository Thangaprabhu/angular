var myApp = angular.module("myModule",[]);

var controller = function($scope, $http) {
    $http.get('http://localhost:8080/Spring4MVCCRUDRestService/user/1').
    success(function(data) {
        $scope.user = data;
    });
}

myApp.controller("myController", controller);