'use strict';

// Declare app level module which depends on views, and components
angular.module('multiTestApp', [
  'ngRoute',
  'todoList',
  'core',
  'ngAnimate',
  'phoneList',
  'phoneDetail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/todo', {
                templateUrl: 'todo/todo.html'
            }).
            when('/phones', {
                template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/todo');
}]);
