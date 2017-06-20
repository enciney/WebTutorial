// my module name and also  dependencies between the scopes
(function(){

'use strict';
// when we use 'use strict'  we mean that check the global variables definition
// if you ran the code as a delete the var from the 'value' variable compile said that
// value is not defined.
var value = "Smth";



angular.module('AngularApp',[])
// if delete the $scope you can see that our variables will not be binded with wiew html
.controller('firstController',function($scope){
  $scope.name = '';
  $scope.numValue = 0;
  $scope.saySmth = function(){

      return 'Hi Everyone';

  }
  $scope.displayNumeric = function(){
      var numOfNumeric = calculateNumeric($scope.name) ;
      $scope.numValue = numOfNumeric ;

  }

  function calculateNumeric(string)
  {
    var totalNameValue = 0 ;
    for (var i = 0; i < string.length; i++) {
      totalNameValue += string.charCodeAt(i);
    }
    return totalNameValue;

  }



});

})();
