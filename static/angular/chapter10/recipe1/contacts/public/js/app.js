'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ["ngResource"]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/contacts", { templateUrl: "/static/angular/chapter10/recipe1/contacts/views/partials/index.html", controller: "ContactsIndexCtrl" })
      .when("/contacts/new", { templateUrl: "/static/angular/chapter10/recipe1/contacts/views/partials/edit.html", controller: "ContactsEditCtrl" })
      .when("/contacts/:id", { templateUrl: "/static/angular/chapter10/recipe1/contacts/views/partials/show.html", controller: "ContactsShowCtrl" })
      .when("/contacts/:id/edit", { templateUrl: "/static/angular/chapter10/recipe1/contacts/views/partials/edit.html", controller: "ContactsEditCtrl" })
      .otherwise({ redirectTo: "/contacts" });
  }]);