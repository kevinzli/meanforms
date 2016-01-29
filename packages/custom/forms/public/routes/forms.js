'use strict';

angular.module('mean.forms').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('forms landing page', {
      url: '/forms',
      templateUrl: 'forms/views/index.html'
    })
    .state('form', {
        url: '/forms/:formId/:version/:formObjectId?',
        templateUrl: 'forms/views/form.html',
        controller: 'FormsController as vm'
    })
    .state('form confirmation',{
        url: '/forms/:formObjectId/confirmation',
        templateUrl: 'forms/views/form_confirmation.html',
        controller: 'FormController'
    })
    .state('form description', {
        url: '/formsdescription/:formId/:version',
        templateUrl: 'forms/views/form_description.html',
        controller: 'FormDefsController'
    });
  }
]);
