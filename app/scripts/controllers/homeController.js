angular.module("tmhtaApp")
    .controller("homeController", ["$scope",
        function($scope) {
            $scope.message = "Angular is cool!";

            $scope.colors = ['red', 'blue', 'yellow', 'brown', 'pink'];
        }
    ]);