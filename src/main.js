var angular = require('angular');

angular.module("myApp",[])
  .controller("appController", function() {
    var vm = this;

    vm.todos = [];
    vm.todoTitle = '';

    vm.todoCreate = function() {
      var item = {
        title: vm.todoTitle,
        done: false
      };
      vm.todos.push(item);
      vm.todoTitle = '';
    };

    vm.todoDelete = function() {
      vm.todos = vm.todos.filter(function(n){ return !n.done; });
    };
  });
