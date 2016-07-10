function Hello($scope, $http) {
    $http.get('http://localhost:8080/Spring4MVCCRUDRestService/user/1').
        success(function(data) {
            $scope.user = data;
        });
}