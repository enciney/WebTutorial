(function () {
'use strict';

angular.module('TodosApp', [])
.controller('TodosController', TodosController)
.service('TodoService', TodoService)
// .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


TodosController.$inject = ['TodoService'];
function TodosController(TodoService) {
  var todos = this;

  var promise = TodoService.getTodos();

  promise.then(function (response) {
    todos.allTodos = response.data;
    // console.log(todos.allTodos[0]);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  todos.logTodos = function (id) {
    var promise = TodoService.getFilteredTodos(id);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}


TodoService.$inject = ['$http'];
function TodoService($http) {
  var service = this;

  service.getTodos = function () {
    var response = $http({
      method: "GET",
      url: ("data.json")
    });

    return response;
  };


  service.getFilteredTodos = function (id) {
    var response = $http({
      method: "GET",
      url: ("data.json"),
      params: {

        "id":id
      }
    });

    return response;
  };

}

})();
