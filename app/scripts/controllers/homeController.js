angular.module("tmhtaApp")
    .controller("homeController", ["$scope","$state", "DataFactory",
        function($scope, $state, DataFactory) {
            $scope.message = "Angular is cool!";

            $scope.colors = DataFactory.get();

            $scope.goTo = function() {
                $state.go("about")
            };
        }
    ]);