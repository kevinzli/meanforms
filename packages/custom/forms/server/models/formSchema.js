'use strict';

var forms= [
    {
    	id:"0501",
    	name: "GAS INSTALLATION FORM"
    },
    {
     	id:"0410",
     	name: "ELECTRICAL OPERATING PERMIT APPLICATION"
    },
    {
    	id:"0406",
    	name: "ELECTRICAL INSTALLATION FORM - CONTRACTOR"
    }
];

function getForms(){
	return forms;
}

function getFormSchema(id){
    var formSchema={};

    switch(id){
        case '0501':
            var gasInstallationForm0501 = require('./gas-installation-form-0501.js');
            formSchema=gasInstallationForm0501.formSchema;
            break;
        case '0410':
            formSchema={};
            break;
        case '0406':
            formSchema={};
            break;
    }
	
    return formSchema;
}

module.exports.getFormSchema = getFormSchema;
module.exports.getForms = getForms;
