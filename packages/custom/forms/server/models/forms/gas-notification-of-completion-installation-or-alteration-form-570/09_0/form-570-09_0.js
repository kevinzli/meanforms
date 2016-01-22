'use strict';
    
var formSchema={
    model: {
    },
    fields: [
        {
            name: 'step0',
            formName: 'vm.forms.step0',
            title: 'START',
            header: '',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'installationPermitNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Installation Permit Number',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'commissioningApprovalNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Commissioning Approval Number*',
                        required: false
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'productApprovalNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Product Approval Number*',
                        required: false
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    template: '<div><p>* If your are submitting for commissioning approval or product approval, please also provide Installation Permit Number above.</p></div>'
                }
            ]
        },
        {
            name: 'step1',
            formName: 'vm.forms.step1',
            title: '',
            header: 'A. SITE INFORMATION',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'installationName',
                    type: 'input',
                    templateOptions: {
                        label: 'Installation Name',
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'siteAddress',
                    type: 'input',
                    templateOptions: {
                        label: 'Site Address (suite/unit, streetnumber, street name, street type)',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'city',
                    type: 'input',
                    templateOptions: {
                        label: 'City',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'telephone',
                    type: 'input',
                    templateOptions: {
                        label: 'Telephone',
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
            ]
        },
        {
            name: 'step2',
            formName: 'vm.forms.step2',
            title: '',
            header: 'B. PERMIT HOLDER DETAILS',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'contractorNameOrHomeowner',
                    type: 'input',
                    templateOptions: {
                        label: 'Contractor Name or Homeowner',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'contractorLicenceNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Contractor Licence Number (if applicable)'
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'workPerformedBy',
                    type: 'input',
                    templateOptions: {
                        label: 'Work performed by (please type name)',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'gasFitterNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Gas Fitter Number (if applicable)'
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                }
            ]
        },
        {
            name: 'step3',
            formName: 'vm.forms.step3',
            title: '',
            header: 'C. TYPE OF REQUEST',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'inspectionTypeRequested',
                    type: 'bcsa_multiCheckbox',
                    templateOptions: {
                        label: 'Inspection type requested',
                        options: [
                            {id: "commissioningApproval", title: "Commissioning approval*"},
                            {id: "productApproval", title: "Product approval*"},
                            {id: "roughIn", title: "Rough-in"},
                            {id: "finalCompletion", title: "Final completion"},
                            {id: "reinspectionNon-compliancesCorrected", title: "Re-inspection non-compliances corrected"},
                        ],
                        valueProp: 'id',
                        labelProp: 'title',
                        required: true
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    template: '<div><p>* If your are submitting for commissioning approval or product approval, please also provide Installation Permit Number above.</p></div>'
                }
            ]
        },
        {
            name: 'step4',
            formName: 'vm.forms.step4',
            title: 'FINISH',
            header: 'D. DECLARATION',
            buttonText: 'Submit',
            fields: [
                {
                    key: 'signature',
                    template: '<p>I, <input class="formly-field-input" ng-model="model[options.key]">, a gas fitter for the above listed licenced contractor or a homeowner, hereby declare that the gas installation authorized under above-mentioned permit number has been installed to comply with the Safety Standards Act and Regulations of British Columbia. </p>',
                    templateOptions: {
                        label: 'Gas fitter or homeowner name',
                        required: true,
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'dateSigned',
                    template: '<p> Placed in service (please provide date mm/dd/yyyy): <input class="formly-field-input" ng-model="model[options.key]"></p>',
                    templateOptions: {
                        label: 'Placed in service (please provide date)',
                        required: true,
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'declaration',
                    type: 'bcsa_checkbox',
                    templateOptions: {
                        label: 'Please note that checking this box and submitting this form to BC Safety Authority constitutes your declaration as the Gas Fitter named above that the gas system has been left in a safe operating condition, and you confirm compliance under the Safety Standards Act. Submission of this form has the same effect as submitting a handwritten signature.',
                        required: true,
                        labelforEmail: 'I agree'
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                },
                {
                    key: 'dateOfSubmission',
                    type: 'input',
                    templateOptions: {
                        label: 'Date of submission (MMDDYYYY)',
                        required: true,
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "formState.disabled"
                    }
                }
            ]
        }
    ] 
};
   
module.exports.formSchema = formSchema;
