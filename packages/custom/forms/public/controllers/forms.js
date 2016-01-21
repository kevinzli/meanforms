'use strict';

/* jshint -W098 */
angular.module('mean.forms').controller('FormsController', ['$scope', 'Global', 'Forms', '$stateParams', '$uibModal', '$state',
    function($scope, Global, Forms, $stateParams, $uibModal, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'forms'
        };

        var vm = this;

        Forms.getForms().then(function(response) {
            $scope.forms = response.data;

            //parameters
            vm.formId = $stateParams.formId;
            vm.formVersion = $stateParams.version;
            vm.formObjectId = $stateParams.formObjectId;

            vm.isCreateNew = vm.formObjectId?false:true;
            vm.viewmode=vm.formObjectId?true:false;


            var form = _.find($scope.forms, {
                'id': vm.formId
            });

            if (form) {
                vm.formName = form.name;
            }

            //get the dynamic form from javascript objects
            Forms.getFormSchema(vm.formId, vm.formVersion).then(function(response) {
                var dynamicForm = response.data;
                
                // An array of our form fields with configuration
                // and options set. We make reference to this in
                // the 'fields' attribute on the  element
                vm.fields = dynamicForm.fields;
                vm.originalFields = angular.copy(vm.fields);

                //get the form model for existing form
                if(vm.formObjectId){
                    Forms.getForm(vm.formObjectId).then(function(response){
                        vm.model= response.data.formModel;
                        vm.viewmode=true;
                        vm.options.formState.disabled=vm.viewmode;
                    }, function(response){
                        console.log("error to get the form model" + vm.formObjectId);
                    });
                }else{
                    // The model object that we reference
                    // on the  element in index.html
                    vm.model = dynamicForm.model;
                }
            }, function(response) {
                console.log("error to get the form schema" + vm.formId);
            });
        }, function(response) {
            console.log("error to get all schemas");
        });

        vm.finishWizard = finishWizard;

        //option to make the form readonly
        vm.options = {
            formState: {
                readOnly: false,
                disabled: vm.viewmode,
            }
        };

        // function definition
        function finishWizard() {
            if(vm.options.formState.disabled){
                //alert("Form is in View Mode!");
                return;
            };

            Forms.createForm(vm.formId, vm.formVersion, vm.model).then(function(response) {
                console.log("From client: the form created successfully");
                $scope.openModal("The form has been created successfully.");
            }, function(response) {
                console.log("From client: error happens when creating form");
            });
        }

        $scope.openModal = function(message) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'ModalContent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    message: function() {
                        return message;
                    }
                }
            });

            modalInstance.result.then(function() {
                //go to Forms
                var dirtState = "forms landing page";
                $state.go(dirtState);
            }, function() {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
]);

angular.module('mean.forms').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, message) {
    $scope.message = message;

    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('mean.forms').config(function(formlyConfigProvider) {

    formlyConfigProvider.setWrapper({
        name: 'panel',
        templateUrl: 'panel.html'
    });

    formlyConfigProvider.setType({
        name: 'bcsa_radio',
        templateUrl: 'bcsa_radio.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        defaultOptions: {
            noFormControl: false
        },
        apiCheck: function apiCheck(check) {
            return {
              templateOptions: {
                options: check.arrayOf(check.object),
                labelProp: check.string.optional,
                valueProp: check.string.optional
              }
            };
        }
    });

    formlyConfigProvider.setType({
        name: 'bcsa_multiCheckbox',
        templateUrl: 'bcsa_multiCheckbox.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        apiCheck: function apiCheck(check) {
            return {
              templateOptions: {
                options: check.arrayOf(check.object),
                labelProp: check.string.optional,
                valueProp: check.string.optional
              }
            };
        },
        defaultOptions: {
            noFormControl: false,
            ngModelAttrs: {
                required: {
                    attribute: '',
                    bound: ''
                }
            }
        },
        controller: /* @ngInject */ function($scope) {
            const to = $scope.to;
            const opts = $scope.options;
            $scope.multiCheckbox = {
                checked: [],
                change: setModel
            };

            // initialize the checkboxes check property
            $scope.$watch('model', function modelWatcher(newModelValue) {
                var modelValue, valueProp;

                if (Object.keys(newModelValue).length) {
                    modelValue = newModelValue[opts.key];

                    $scope.$watch('to.options', function optionsWatcher(newOptionsValues) {
                        if (newOptionsValues && Array.isArray(newOptionsValues) && Array.isArray(modelValue)) {
                            valueProp = to.valueProp || 'value';
                            for (var index = 0; index < newOptionsValues.length; index++) {
                                $scope.multiCheckbox.checked[index] = modelValue.indexOf(newOptionsValues[index][valueProp]) !== -1;
                            }
                        }
                    });
                }
            }, true);

            function checkValidity(expressionValue) {
                var valid;

                if ($scope.to.required) {
                    valid = angular.isArray($scope.model[opts.key]) &&
                        $scope.model[opts.key].length > 0 &&
                        expressionValue;

                    $scope.fc.$setValidity('required', valid);
                }
            }

            function setModel() {
                $scope.model[opts.key] = [];
                angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
                    if (checkbox) {
                      $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
                    }
                });

                // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
                $scope.fc.$setTouched();
                checkValidity(true);
            }

            if (opts.expressionProperties && opts.expressionProperties['templateOptions.required']) {
                $scope.$watch(function() {
                    return $scope.to.required;
                }, function(newValue) {
                    checkValidity(newValue);
                });
            }

            if ($scope.to.required) {
                var unwatchFormControl = $scope.$watch('fc', function(newValue) {
                    if (!newValue) {
                        return;
                    }
                    checkValidity(true);
                    unwatchFormControl();
                });
            }
        }
    });

    formlyConfigProvider.setType({
        name: 'bcsa_checkbox',
        templateUrl: 'bcsa_checkbox.html',
        wrapper: ['bootstrapHasError'],
        apiCheck: function apiCheck(check) {
            return {
              templateOptions: {
                label: check.string
              }
            };
          }
    });

    formlyConfigProvider.setType({
        name: 'input',
        templateUrl: 'input-template.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        overwriteOk: true
    });
});