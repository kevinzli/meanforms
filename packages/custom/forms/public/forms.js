'use strict';

angular.module('mean.forms')
  .run(['$rootScope', function($rootScope) {
    $rootScope.alerts = [];

    $rootScope.addAlert = function(message) {
      $rootScope.alerts.push(message);
    };

    $rootScope.closeAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };

  }]);
