'use strict';

function formsService($http) {
   	function getForms(){
   		return $http.get('/api/formschemas');
   	}

   	function getFormSchema(id){
   	    return $http.get('/api/formschemas/'+id);
   	}

   	function createForm(formId, formModel){
   		return $http.post('/api/forms/new', {
   			formId: formId,
   			formModel: formModel
   		});
   	}

    return {
      name: 'forms',
      getForms: getForms,
      getFormSchema: getFormSchema,
      createForm: createForm
    };
  }

angular.module('mean.forms').factory('Forms', ['$http', formsService]);
	

