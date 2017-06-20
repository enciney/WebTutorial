// my module name and also  dependencies between the scopes
(function(){

'use strict';




angular.module('DependencyInjection',[])
// we can use dependency as a lots of different way as in below.
//.controller('DIController', DIController);
//DIController.$inject = ['$scope','$filter'];
.controller('DIController', ['$scope','$filter','$injector',DIController]);
// if delete the $scope you can see that our variables will not be binded with wiew html
function DIController ($scope,$filter,$injector){
  $scope.name = 'Engin';
  $scope.upper = function(){
    var upWord = $filter('uppercase');
    $scope.name = upWord($scope.name);
  }
  console.log($injector.annotate(DIController));

}



})();
