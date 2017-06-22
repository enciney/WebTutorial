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

function CounterController($scope){
  $scope.onceCounter = 0 ;
  $scope.counter = 0;
  $scope.name = 'Engin';
    $scope.showNumberOfWatchers = function() {
        console.log("number of watchers:" , $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1 ;
  };

  $scope.Upcounter = function () {
    $scope.counter++;
  };
// this is also a watcher
$scope.$watch(function () {
  console.log("Digest Loop fired!");

});

  // $scope.$watch('onceCounter',function (newVal,oldVal) {
  //   console.log("old value : ",oldVal);
  //   console.log("new value : ",newVal);
  // });
  //
  // $scope.$watch('counter',function (newVal,oldVal) {
  //   console.log("old value : ",oldVal);
  //   console.log("new value : ",newVal);
  // });

}



})();
