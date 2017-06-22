// my module name and also  dependencies between the scopes
(function(){

'use strict';

angular.module('ExpressionApp',[])
// we can use dependency as a lots of different way as in below.
//.controller('DIController', DIController);

.controller('ExpController', ExpController)
.filter('changing',changeString)
.filter('real',RealFilter);

// we can  use of the costum filter and JS filter with together
ExpController.$inject = ['$scope','changingFilter','$filter','realFilter'];
// also it's not necessary to add every custom filter to controller as a dependency
// Only require when we use in the controller. We can use in HTML without the addition as a dependency
// ExpController.$inject = ['$scope','changingFilter','$filter','realFilter'];

function ExpController ($scope,changingFilter,$filter,realFilter){
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


// filter factory function
  function changeString(){
      return function(input)
      {
        input = input.replace(":)","but can be good more ;)");
        return input ;
      }

  }
// filter factory function
  function RealFilter(){
    return function(input,target,replace)
    {
      input = input.replace(target,replace);
      return input ;
    }

  }







})();
