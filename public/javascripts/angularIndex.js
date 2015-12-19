var app = angular.module('app', []);

app.controller('HomeTabCtrl', [
    '$scope',
    function($scope) {
        $scope.tab = 1;
        
        $scope.setTab = function (num) {
            $scope.tab = num;
        }
        
        $scope.isTab = function (num) {
            return $scope.tab === num;
        }
    }
]);