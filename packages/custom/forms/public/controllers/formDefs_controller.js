'use strict';

/* jshint -W098 */
angular.module('mean.forms').controller('FormDefsController', ['$scope', 'Global', 'Forms', '$stateParams', '$uibModal', '$state',
    function($scope, Global, Forms, $stateParams, $uibModal, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'forms'
        };
        $scope.formDescription = {};
        $scope.closeAlert(0);

        //if loading form description
        if ($state.current.name === "form description") {
            var formId = $stateParams.formId;
            var formVersion = $stateParams.version;

            if (formId && formVersion) {
                Forms.getFormDescription(formId, formVersion).then(function(response) {
                    $scope.formDescription = response.data;
                }, function(response) {
                    console.log("error to get the form description: " + formId + ", " + formVersion);
                    var errorMsg = 'We\'re sorry, your request to get the form description has failed.';
                    $scope.closeAlert(0);
                    $scope.addAlert({
                        type: 'danger',
                        msg: errorMsg
                    });
                });
            } else {
                console.log("Missing state parames");
            }
        } else {
            //otherwise load all forms def
            Forms.getForms().then(function(response) {
                $scope.forms = response.data;
            }, function(response) {
                console.log("error to get all schemas");
            });
        }
    }
]);