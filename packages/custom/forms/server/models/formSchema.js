'use strict';

var _ = require('lodash');

var forms= [
    // {
    // 	id:"501",
    // 	name: "Gas Installation Permit Application Form",
    //     version: "05-11_1"
    // },
    {
     	id:"570",
     	name: "Gas Notification of Completion, Installation or Alteration Form",
        version: "09_0",
        label: "FRM 0570-09 (2015-06-09)"
    },
    {
        id:"0823",
        name: "Boiler Installation Permit Form",
        version: "05",
        label: "FRM-0823-05 (2015-10-05)"
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

function getFormPath(id, version){
    var path;

    switch(id){
        case '501':
            path = "./forms/gas-installation-permit-application-form-501/"+version+"/";
            break;
        case '570':
            path = "./forms/gas-notification-of-completion-installation-or-alteration-form-570/"+version+"/";
            break;
        case '0823':
            path = "./forms/boiler-installation-permit-form-0823/"+version+"/";
            break;
        case '206':
            path = "./forms/electrical-contractor-authorization-and-declaration-form-206/"+version+"/";
            break;
        case '1004':
            path = "./forms/application-for-power-engineer-operator-and-safety-awareness-examinations-form-1004/"+version+"/";
            break;
    }
    
    return path;
}

function getFormSchema(id, version){
    var form={};

    var path= getFormPath(id,version) + "form-" +id +"-"+version +".js";
    form = require(path);
    // switch(id){
    //     case '501':
    //         path = "./forms/gas-installation-permit-application-form-501/"+version+"/form-501-"+version+".js";
    //         form = require(path);
    //         break;
    //     case '570':
    //         path = "./forms/gas-notification-of-completion-installation-or-alteration-form-570/"+version+"/form-570-"+version+".js";
    //         form = require(path);
    //         break;
    //     case '0823':
    //         path = "./forms/boiler-installation-permit-form-0823/"+version+"/form-0823-"+version+".js";
    //         form = require(path);
    //         break;
    //     case '206':
    //         path = "./forms/electrical-contractor-authorization-and-declaration-form-206/"+version+"/form-206-"+version+".js";
    //         form = require(path);
    //         break;
    //     case '1004':
    //         path = "./forms/application-for-power-engineer-operator-and-safety-awareness-examinations-form-1004/"+version+"/form-1004-"+version+".js";
    //         form = require(path);
    //         break;
    // }
	
    var formDef = _.find(forms, {
                    'id': id
                });

    if (formDef) {
        form.formSchema.Name = formDef.name;
        form.formSchema.Label = formDef.label;
    }

    return form.formSchema;
}


function getFormDescriptionPath(id, version){
    var path= getFormPath(id,version) + "form-" +id +"-"+version +"-description" +".html";
    return path;
}

module.exports.getFormSchema = getFormSchema;
module.exports.getForms = getForms;
module.exports.getFormDescriptionPath = getFormDescriptionPath;
