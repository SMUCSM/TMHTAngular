angular.module("tmhtaApp")
    .controller("homeController", ["$scope", "DataFactory",
        function($scope, DataFactory) {
            $scope.message = "Angular is cool!";

            $scope.colors = DataFactory.get();
        }
    ]);