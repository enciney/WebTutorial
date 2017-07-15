(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['myData'];
function MainShoppingListController(myData) {
  var mainList = this;



  mainList.$onInit = function () {

      mainList.items = myData;

}



//   mainList.$onInit = function () {
//     ShoppingListService.getItems()
//     .then(function (result) {
//       mainList.items = result;
//     });
//
//     ShoppingListService.deleteItem().
//     then(function (result) {
//       mainList.items = result;
//     });
//
//     console.log("First element is ignored =D");
// }


}

})();
