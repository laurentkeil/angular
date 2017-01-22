"use strict";

// Define the `phoneList` module
var todo = angular.module('todoList', ['ngRoute']);

todo.directive('ngBlur', function(){
    return function (scope, elem, attrs){
        elem.bind('blur', function(){
            scope.$apply(attrs.ngBlur);
        })
    }
});

// Define the `todoList` module
todo.controller('TodoCtrl',
    function ($scope, filterFilter, $http) {
        $scope.todos = [];
        $scope.placeholder = "Chargement...";
        $scope.statusFilter = {};

        $http.get('/todo/todos.php').success(function(data){
           $scope.todos = data;
           $scope.placeholder = "Ajoute une nouvelle tâche";
        });

        $scope.$watch('todos', function(){
            $scope.remaining = filterFilter($scope.todos, {completed:false}).length;
            $scope.allchecked = !$scope.remaining;
        }, true);

        $scope.removeTodo = function(index){
            $scope.todos.splice(index, 1);
        };

        $scope.addTodo = function(){
            $scope.todos.push({
                name : $scope.newtodo,
                completed : false
            });
            $scope.newtodo = '';
        };

        $scope.editTodo = function(todo){
            todo.editing = false;
        };

        $scope.checkAllTodo = function(allchecked){
            $scope.todos.forEach(function(todo){
                todo.completed = allchecked;
            });
        };

        $scope.filterTodo = function(todoCompleted){
            if(todoCompleted != null) {
                $scope.statusFilter = {completed : todoCompleted};
            } else {
                $scope.statusFilter = {};
            }
        };

    }
);