'use strict';

function formsService($http) {
   	function getForms(){
   		return $http.get('/api/formschemas');
   	}

   	function getFormSchema(id, version){
   	    return $http.get('/api/formschemas/'+id+'/'+version);
   	}

   	function createForm(formId, version, formModel){
   		return $http.post('/api/forms/new', {
   			formId: formId,
        formVersion: version,
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
	

