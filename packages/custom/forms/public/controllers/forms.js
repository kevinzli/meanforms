'use strict';

/* jshint -W098 */
angular.module('mean.forms').controller('FormsController', ['$scope', 'Global', 'Forms', '$stateParams','$uibModal','$state',
  function($scope, Global, Forms, $stateParams, $uibModal, $state) {
    $scope.global = Global;
    $scope.package = {
      name: 'forms'
    };

    var vm=this;

    Forms.getForms().then(function(response){
        $scope.forms= response.data;

        //parameters
        vm.formId= $stateParams.formId;
        vm.formVersion = $stateParams.version;

        var form= _.find($scope.forms, {
            'id': vm.formId
        });

        if(form){
            vm.formName= form.name;
        }

        //get the dynamic form from javascript objects
        Forms.getFormSchema(vm.formId, vm.formVersion).then(function (response){
            var dynamicForm= response.data;
            // The model object that we reference
            // on the  element in index.html
            vm.model = dynamicForm.model;
            // An array of our form fields with configuration
            // and options set. We make reference to this in
            // the 'fields' attribute on the  element
            vm.fields= dynamicForm.fields;
            vm.originalFields = angular.copy(vm.fields);
        }, function(response){
            console.log("error to get the form schema" + vm.formId);
        });
    }, function(response){
        console.log("error to get all schemas");
    });

    vm.finishWizard = finishWizard;

    //option to make the form readonly
    vm.options = {
      formState: {
        readOnly: false,
      }
    };

	// function definition
    function finishWizard() {
    	Forms.createForm(vm.formId, vm.formVersion, vm.model).then(function(response){
    		console.log("From client: the form created successfully");
    		$scope.openModal("The form has been created successfully.");
    	}, function(response){
    		console.log("From client: error happens when creating form");
    	});
    }

    $scope.openModal = function(message){
    	var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'ModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      resolve: {
	        message: function () {
	          return message;
	        }
	      }
	    });

	    modalInstance.result.then(function () {
	      	//go to Forms
	      	var dirtState = "forms landing page";
        	$state.go(dirtState);
	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
    };
  }
]);

angular.module('mean.forms').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, message) {
    $scope.message = message;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('mean.forms').config(function (formlyConfigProvider) {
    
    formlyConfigProvider.setWrapper({
      name: 'panel',
      templateUrl: 'panel.html'
    });
    
  });
