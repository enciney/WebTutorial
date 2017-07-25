(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user =
  {
    menuitem : "",
    firstname : "",
    lastname : "",
    email : "",
    phone : ""

  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {

    var config = {};
    if (category) {

      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json',config).then(function (response) {
        return response.data;
    });
  };

  service.setData = function(user)
  {
    service.user = user ;

  }

  service.getData = function () {
    return service.user;
  }


  service.getUserItem = function (itemNo) {
var returnValue;
 console.log("itemNo : ",itemNo);
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {

      for(var i = 0 ; i < response.data.menu_items.length ;  i++){

        if(response.data.menu_items[i].short_name.toLowerCase() === itemNo.toLowerCase()){
          console.log("Exist!!");
          returnValue = response.data.menu_items[i];
          return returnValue;

        }

      }
      console.log("Not Exist!!");
      return null;

    });
  };

}



})();
