
angular.module('isolatedScope',[])
.controller('controller',controller)
.controller('directiveController',directiveController)
.directive('directive',directive);

function controller() {
  var ctrl = this ;
  this.name = 'Engin';
  this.surname = 'YILDIRIM';
  this.clickMe = function(){
    console.log("Age working : " + this.name );
    console.log(this);
  }

  this.clickMessage = function(message){
    this.smth = 'smth'
    console.log("Age working : " + this.smth );
    console.log(this);
  }

}

function directive() {
  var ddo = {
      template : "<input ng-model = 'dir.surname' ></input> "+
      "<button  ng-click = 'dir.age({message : surname})' >Directive Button</button>" + "<br><div>{{dir.name}}</div>",
      scope : {
          name : '@',
          surname : '=',
          age : '&'
          // &    function pointer two way binding funct({key : value})
          // @  ng-model  one way binding  {{....}}
          // =  interpolate two way binding  ng-model in input

      },
      // this controller is work in template or templateUrl html NOT IN THE INDEX HTML
      controller: 'directiveController as dir',
      bindToController: true
  };

  return ddo;

}

function directiveController() {
    var dir = this ;
}
