'use strict';

(function() {

  var app = angular.module("DemoApp", []);





  app.controller("DemoCtrl", ["UsersService",
    function(Users) {
    var ctrl = {};

    ctrl.users = [];

    Users.index().then(function(users) {
      ctrl.users = users;
    });

    ctrl.addUser = function() {
      Users.add({ name: ctrl.newName }).then(function(createdUser) {
        ctrl.newName = "";
        ctrl.users.push(createdUser);
      });
    };

    ctrl.removeUser = function(user) {
      var id = user.id,
          index;

      ctrl.users.forEach(function(elem, i) {
        if (elem.id === id) {
          index = i;
        }
      });

      if (!index && index !== 0) { return; }

      Users.remove(ctrl.users[index]).then(function() {
        ctrl.users.splice(index, 1);
      });
    };

    return ctrl;
  }]);





  app.factory("UsersService", [ "$http",
    function($http) {

    var service = {};

    service.index = function () {
      debugger;
      return $http.get('/users/').then(function(response) {
        return response.data;
      });
    };

    service.add = function (user) {
      debugger;
      return $http.post('/users/', user).then(function(response) {
        return response.data;
      });
    };

    service.remove = function(user) {
      debugger;
      return $http.delete('/users/'+user.id);
    };

    return service;

  }]);

}())
