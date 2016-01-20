'use strict';

var forms= [
    // {
    // 	id:"501",
    // 	name: "Gas Installation Permit Application Form",
    //     version: "05-11_1"
    // },
    {
     	id:"570",
     	name: "Gas Notification of Completion, Installation or Alteration Form",
        version: "09_0"
    },
    {
        id:"0823",
        name: "Boiler Installation Permit Form",
        version: "05"
    },
    // {
    //     id:"206",
    //     name: "Electrical Contractor Authorization and Declaration Form",
    //     version: "15_2"
    // },
    // {
    //     id:"1004",
    //     name: "Application for Power Engineer, Operator and Safety Awareness Examinations Form",
    //     version: "22"
    // }
];

function getForms(){
	return forms;
}

function getFormSchema(id, version){
    var path;
    var form={};

    switch(id){
        case '501':
            path = "./forms/gas-installation-permit-application-form-501/"+version+"/form-501-"+version+".js";
            form = require(path);
            break;
        case '570':
            path = "./forms/gas-notification-of-completion-installation-or-alteration-form-570/"+version+"/form-570-"+version+".js";
            form = require(path);
            break;
        case '0823':
            path = "./forms/boiler-installation-permit-form-0823/"+version+"/form-0823-"+version+".js";
            form = require(path);
            break;
        case '206':
            path = "./forms/electrical-contractor-authorization-and-declaration-form-206/"+version+"/form-206-"+version+".js";
            form = require(path);
            break;
        case '1004':
            path = "./forms/application-for-power-engineer-operator-and-safety-awareness-examinations-form-1004/"+version+"/form-1004-"+version+".js";
            form = require(path);
            break;
    }
	
    return form.formSchema;
}

module.exports.getFormSchema = getFormSchema;
module.exports.getForms = getForms;
