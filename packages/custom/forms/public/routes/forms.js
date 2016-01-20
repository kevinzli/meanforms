'use strict';

angular.module('mean.forms').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('forms landing page', {
      url: '/forms',
      templateUrl: 'forms/views/index.html'
    })
    .state('form', {
        url: '/forms/:formId/:version',
        templateUrl: 'forms/views/form.html',
        controller: 'FormsController as vm'
      });;
  }
]);
