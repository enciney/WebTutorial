// my module name and also  dependencies between the scopes
(function(){

'use strict';

angular.module('ExpressionApp',[])
// we can use dependency as a lots of different way as in below.
//.controller('DIController', DIController);

.controller('ExpController', ExpController)
.filter('changing',changeString);
// we can  use of the costum filter and JS filter with together
ExpController.$inject = ['$scope','changingFilter','$filter'];


function ExpController ($scope,changingFilter,$filter){
    $scope.imageType = 'wololo';
    $scope.buttonType = 'lotr';
    $scope.cost = 0.4575;

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

    $scope.saySmth = function()
    {
        var msg = "Nice pic bro :)";
        var value = $filter('uppercase')(msg);
        return value ;



    }

    $scope.sayCustom = function()
    {
        var msg = "Nice pic bro :)";
    
        var chancing = changingFilter(msg);
        return chancing;


    }

  }

  function changeString(){
      return function(input)
      {
        input = input.replace(":)","but can be good more ;)");
        return input ;
      }

  }







})();
