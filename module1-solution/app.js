(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.dishes = "";
    $scope.checkDishes = function () {
      if ($scope.dishes) { //checks for non empty
        if ($scope.dishes.split(",").length <= 3)
          $scope.message = "Enjoy!"
        else {
          $scope.message = "Too much!"
        }
      } else {
        $scope.message = "Please enter data first"
      }
    };
}

})();
