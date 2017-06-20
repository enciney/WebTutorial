// my module name and also  dependencies between the scopes
(function(){

'use strict';




angular.module('ExpressionApp',[])
// we can use dependency as a lots of different way as in below.
//.controller('DIController', DIController);

.controller('ExpController', ExpController);
ExpController.$inject = ['$scope'];

function ExpController ($scope){
    $scope.imageType = 'wololo';
    $scope.buttonType = 'lotr';

    $scope.changePic = function()
    {
        if($scope.buttonType == 'lotr'){
          $scope.imageType = 'lotr' ;
          $scope.buttonType = 'wololo';
        }
        else {
          $scope.imageType = 'wololo';
          $scope.buttonType = 'lotr';
        }

    }
  }






})();
