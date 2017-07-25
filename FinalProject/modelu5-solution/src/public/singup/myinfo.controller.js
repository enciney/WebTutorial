(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath) {
    var myinfo = this;
    myinfo.basePath = ApiPath ;
    myinfo.user = MenuService.getData();
    myinfo.item =  MenuService.getUserItem(myinfo.user.menuitem);
    myinfo.signUpCheck = function () {
       if(myinfo.user.firstname === "")
        return false;

      return true ;

    }

myinfo.item.then(function (response) {

  myinfo.useritem = response ;

})

myinfo.checkItem = function () {
  if(myinfo.useritem === null)
    return false ;
  return true ;

}





    if(myinfo.user.firstName === "")
      myinfo.signup = true ;
  }



})();
