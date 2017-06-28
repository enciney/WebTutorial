// my module name and also  dependencies between the scopes
(function(){

'use strict';
// when we use 'use strict'  we mean that check the global variables definition
// if you ran the code as a delete the var from the 'value' variable compile said that
// value is not defined.
var value = "Smth";



angular.module('AngularApp',[])
// if delete the $scope you can see that our variables will not be binded with wiew html
.controller('CounterController',CounterController);
CounterController.$inject = ['$scope'];

function CounterController($scope,$timeout){

  $scope.name = 'Engin';


  $scope.setFullname = function () {
      $scope.fullName =   $scope.name + " YILDIRIM";
  };

  $scope.displayWatcher = function () {
    console.log("# of Watchers :",$scope.$$watchersCount);
  }

  $scope.logName = function () {
    console.log("name :  :",$scope.name);
  }
  $scope.logFullName = function () {
    console.log("fullName :",$scope.fullName);
  }

}



})();
