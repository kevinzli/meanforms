'use strict';

/* jshint -W098 */
angular.module('mean.forms').controller('FormDefsController', ['$scope', 'Global', 'Forms', '$stateParams', '$uibModal', '$state',
    function($scope, Global, Forms, $stateParams, $uibModal, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'forms'
        };

        
        Forms.getForms().then(function(response) {
            $scope.forms = response.data;
        }, function(response) {
            console.log("error to get all schemas");
        });
    }
]);