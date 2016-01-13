'use strict';

var typeCodeOptions= [
    {
        name: 'Select...',
        value: ''
    },
    {
        name: '01 Boiler',
        value: '01'
    },
    {
        name: '02 Water Heater',
        value: '02'
    },
    {
        name: '03 Furnace',
        value: '03'
    },
    {
        name: '04 Unit Heater',
        value: '04'
    },
    {
        name: '05 Space Heater',
        value: '05'
    },
    {
        name: '06 Fireplace',
        value: '06'
    },
    {
        name: '07 Direct Fired Make-Up Air',
        value: '07'
    },
    {
        name: '08 Indirect Fired Make-Up Air',
        value: '08'
    },
    {
        name: '09 Roof Top Unit',
        value: '09'
    },
    {
        name: '10 Dryer',
        value: '10'
    },
    {
        name: '11 Range',
        value: '11'
    },
    {
        name: '12 Range Top',
        value: '12'
    },
    {
        name: '13 Wall Oven',
        value: '13'
    },
    {
        name: '14 Deep Fat Fryer',
        value: '14'
    },
    {
        name: '15 Barbecue',
        value: '15'
    },
    {
        name: '16 Chinese Cooker',
        value: '16'
    },
    {
        name: '17 Oven',
        value: '17'
    },
    {
        name: '18 Steam Table',
        value: '18'
    },
    {
        name: '19 Grill',
        value: '19'
    },
    {
        name: '20 Piping Only (# of meters)',
        value: '20'
    },
    {
        name: '21 Vent(s) Only',
        value: '21'
    },
    {
        name: '22 Other (specify)',
        value: '22'
    },
];

var newOrReplaceOptions = [
    {
        name: 'Select...',
        value: ''
    },
    {
        name: 'New',
        value: 'new'
    },
    {
        name: 'Replace',
        value: 'replace'
    }
];

var formSchema={
    model: {
        permitType: "GA-Installation",
        province: "British Columbia",
        typeCode1: "",
        typeCode2: "",
        typeCode3: "",
        typeCode4: "",
        neworreplace1: "",
        neworreplace2: "",
        neworreplace3: "",
        neworreplace4: ""
    },
    fields: [
        {
            name: 'step1',
            formName: 'vm.forms.step1',
            title: 'A. INSTALLATION',
            header: 'A. INSTALLATION',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'permitNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Permit Number',
                    }
                },
                {
                    key: 'permitType',
                    type: 'input',
                    templateOptions: {
                        label: 'Permit Type',
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "true"
                    }
                },
                {
                    key: 'workClass',
                    type: 'multiCheckbox',
                    templateOptions: {
                        label: 'Work class: (check one box only)',
                        options: [
                            {id: "cc", title: "Contractor Commercial/Industrial"},
                            {id: "crmd", title: "Contractor Residential Multi-Unit Dwelling"},
        						{id: "ho", title: "Homeowner"}
                        ],
                        valueProp: 'id',
                        labelProp: 'title'
                    }
                }
            ]
        },
        {
            name: 'step2',
            formName: 'vm.forms.step2',
            title: 'B. CONTACT INFORMATION',
            header: 'B. CONTACT INFORMATION',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'applicant',
                    type: 'input',
                    templateOptions: {
                        label: 'Applicant',
                        required: true
                    },
                },
                {
                    key: 'gasFitterName',
                    type: 'input',
                    templateOptions: {
                        label: 'Gas Fitter Name'
                    }
                },
                {
                    key: 'contractorLicence',
                    type: 'input',
                    templateOptions: {
                        label: 'Contractor Licenc #',
                    }
                },
                {
                    key: 'gasFitterNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Gas Fitter #'
                    }
                },
                {
                    key: 'applicantEmail',
                    type: 'input',
                    templateOptions: {
                        label: 'Applicant email'
                    }
                },
                {
                    key: 'preferredMethodOfContact',
                    type: 'multiCheckbox',
                    templateOptions: {
                        label: 'Preferred method of contact',
                        options: [
                            {id: "email", title: "Email"},
                            {id: "mail", title: "Mail"}
                        ],
                        valueProp: 'id',
                        labelProp: 'title'
                    }
                },
                {
                    key: 'contractorPhone',
                    type: 'input',
                    templateOptions: {
                        label: 'Contractor Phone'
                    }
                }
            ]
        },
        {
            name: 'step3',
            formName: 'vm.forms.step3',
            title: 'C. SITE INFORMATION',
            header: 'C. SITE INFORMATION (location of work site)',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'unitSuite',
                    type: 'input',
                    templateOptions: {
                        label: 'Unit/Suite'
                    }
                },
                {
                    key: 'civicStreetNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Civic/Street #',
                        required: true,
                    }
                },
                {
                    key: 'streetName',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Name',
                        required: true,
                    }
                },
                {
                    key: 'streetType',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Type',
                        required: true,
                    }
                },
                {
                    key: 'streetDirection',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Direction'
                    }
                },
                {
                    key: 'city',
                    type: 'input',
                    templateOptions: {
                        label: 'City',
                        required: true,
                    }
                },
                {
                    key: 'province',
                    type: 'input',
                    templateOptions: {
                        label: 'Province',
                    },
                    expressionProperties: {
                        "templateOptions.disabled": "true"
                    }
                },
                {
                    key: 'postalCode',
                    type: 'input',
                    templateOptions: {
                        label: 'Postal Code',
                        required: true,
                    }
                }
            ]
        },
        {
            name: 'step4',
            formName: 'vm.forms.step4',
            title: 'D. SITE OWNER INFORMATION',
            header: 'D. SITE OWNER INFORMATION (Contractor Installation Only - Please provide if address is different from section c. site information)',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'ownerOfficerName',
                    type: 'input',
                    templateOptions: {
                        label: 'Owner/Officer Name'
                    }
                },
                {
                    key: 'ownerPhone',
                    type: 'input',
                    templateOptions: {
                        label: 'Phone'
                    }
                },
                {
                    key: 'ownerCellPhone',
                    type: 'input',
                    templateOptions: {
                        label: 'Cell/Mobile'
                    }
                },
                {
                    key: 'ownerUnitSuite',
                    type: 'input',
                    templateOptions: {
                        label: 'Unit/Suite'
                    }
                },
                {
                    key: 'ownerCivicStreetNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Civic/Street #'
                    }
                },
                {
                    key: 'ownerStreetName',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Name'
                    }
                },
                {
                    key: 'ownerStreetType',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Type'
                    }
                },
                {
                    key: 'ownerStreetDirection',
                    type: 'input',
                    templateOptions: {
                        label: 'Street Direction'
                    }
                },
                {
                    key: 'ownerCity',
                    type: 'input',
                    templateOptions: {
                        label: 'City'
                    }
                },
                {
                    key: 'ownerProvince',
                    type: 'input',
                    templateOptions: {
                        label: 'Province'
                    }
                },
                {
                    key: 'ownerPostalCode',
                    type: 'input',
                    templateOptions: {
                        label: 'Postal Code'
                    }
                }
            ]
        },
        {
            name: 'step5',
            formName: 'vm.forms.step5',
            title: 'E. ADDITIONAL INSTALLATION INFORMATION',
            header: 'E. ADDITIONAL INSTALLATION INFORMATION',
            buttonText: 'Continue',
            fields: [
                {
                    key: 'specificOnsiteLocationDetails',
                    type: 'input',
                    templateOptions: {
                        label: 'Specific On-Site Location Details',
                    }
                },
                {
                    key: 'descriptionofWork',
                    type: 'input',
                    templateOptions: {
                        label: 'Description of Work',
                    }
                },
                {
                    key: 'installationName',
                    type: 'input',
                    templateOptions: {
                        label: 'Installation Name',
                        required: true,
                    }
                },
                {
                    key: 'onctractorPurchaseOrderNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Contractor Purchase Order #',
                    }
                },
                {
                    key: 'siteBuildingName',
                    type: 'input',
                    templateOptions: {
                        label: 'Site/Building Name',
                    }
                },
                {
                    key: 'occupancyType',
                    type: 'input',
                    templateOptions: {
                        label: 'Occupance Type',
                    }
                },
                {
                    key: 'workType',
                    type: 'input',
                    templateOptions: {
                        label: 'Work Type',
                        required: true,
                    }
                },
                {
                    key: 'pressure',
                    type: 'multiCheckbox',
                    templateOptions: {
                        label: 'Pressure',
                        options: [
                            {id: "low", title: "Low"},
                            {id: "2psig", title: "2 PSIG"},
        					{id: "high", title: "High"}
                        ],
                        valueProp: 'id',
                        labelProp: 'title'
                    }
                },
                {
                    key: 'totalConnectedLoad',
                    type: 'input',
                    templateOptions: {
                        label: 'Total Connected Load'
                    }
                },
                {
                    key: 'totalConnectedLoadUnit',
                    type: 'multiCheckbox',
                    templateOptions: {
                        label: '',
                        options: [
                            {id: "btuperhour", title: "BTU/Hr"},
                            {id: "kw", title: "kW"}
                        ],
                        valueProp: 'id',
                        labelProp: 'title'
                    }
                },
                {
                    key: 'fuelType',
                    type: 'multiCheckbox',
                    templateOptions: {
                        label: 'Fuel Type',
                        options: [
                            {id: "propane", title: "Propane"},
                            {id: "naturalgas", title: "Natural Gas"},
                            {id: "other", title: "Other"},
                        ],
                        valueProp: 'id',
                        labelProp: 'title'
                    }
                },
                {
                    key: 'otherFuelType',
                    type: 'input',
                    templateOptions: {
                        label: 'specify'
                    },
                    //hideExpression: '$.inArray("other",model.fuelType)<0'
                },
                {
                    key: 'propaneSupplier',
                    type: 'input',
                    templateOptions: {
                        label: 'Propane Supplier'
                    }
                },
                {
                    key: 'siteContact',
                    type: 'input',
                    templateOptions: {
                        label: 'Site Contact',
                        required: true,
                    }
                },
                {
                    key: 'siteContactCell',
                    type: 'input',
                    templateOptions: {
                        label: 'Site Contact Cell #',
                        required: true,
                    }
                }
            ]
        },
        {
            name: 'step6',
            formName: 'vm.forms.step6',
            title: 'F. FEE DECLARATION',
            header: 'F. FEE DECLARATION',
            buttonText: 'Submit',
            fields: [
                {
            	    template: '<div><p>Appliance Type: Select & record applicances type code, number of appliances in each type, and "N" for New or "R" for Replacement. Provide input in BTU&#44;s or length in meters, number of dispensers and/or number of vents for EACH appliance.</p></div>'
            	},
                {
                    className: 'row',
                    fieldGroup: [
                    	{
                            className: 'col-xs-3',
                            key: 'typeCode1',
                            type: 'select',
                            templateOptions: {
                                label: 'Type Code',
                                required: false,
                                options: typeCodeOptions
                            }
                        },
                        {
                            className: 'col-xs-1',
                            key: 'quantity1',
                            type: 'input',
                            templateOptions: {
                                label: 'Quantity',
                            }
                        },
                        {
                            className: 'col-xs-3',  
                            key: 'neworreplace1',
                            type: 'select',
                            templateOptions: {
                                label: 'N-New / R-Replace',
                                required: false,
                                options: newOrReplaceOptions
                            }
                        },
                        {
                            className: 'col-xs-3',
                            key: 'inputperappliance1',
                            type: 'input',
                            templateOptions: {
                                label: 'Input per Appliance',
                            }
                        },
                        {
                            className: 'col-xs-2',
                            key: 'fee1',
                            type: 'input',
                            templateOptions: {
                                label: 'Fee (office use)',
                            },
                            expressionProperties: {
                                "templateOptions.disabled": "true"
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-3',
                            key: 'typeCode2',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: typeCodeOptions
                            }
                        },
                        {
                            className: 'col-xs-1',
                            key: 'quantity2',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                        className: 'col-xs-3',  
                            key: 'neworreplace2',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: newOrReplaceOptions
                            }
                        },
                        {
                            className: 'col-xs-3',
                            key: 'inputperappliance2',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                            className: 'col-xs-2',
                            key: 'fee2',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            },
                            expressionProperties: {
                                "templateOptions.disabled": "true"
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-3',
                            key: 'typeCode3',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: typeCodeOptions
                            }
                        },
                        {
                            className: 'col-xs-1',
                            key: 'quantity3',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                            className: 'col-xs-3',  
                            key: 'neworreplace3',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: newOrReplaceOptions
                            }
                        },
                        {
                            className: 'col-xs-3',
                            key: 'inputperappliance3',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                            className: 'col-xs-2',
                            key: 'fee3',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            },
                            expressionProperties: {
                                "templateOptions.disabled": "true"
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [
                        {
                            className: 'col-xs-3',
                            key: 'typeCode4',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: typeCodeOptions
                            }
                        },
                        {
                            className: 'col-xs-1',
                            key: 'quantity4',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                            className: 'col-xs-3',  
                            key: 'neworreplace4',
                            type: 'select',
                            templateOptions: {
                                label: '',
                                required: false,
                                options: newOrReplaceOptions
                            }
                        },
                        {
                            className: 'col-xs-3',
                            key: 'inputperappliance4',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            }
                        },
                        {
                            className: 'col-xs-2',
                            key: 'fee4',
                            type: 'input',
                            templateOptions: {
                                label: '',
                            },
                            expressionProperties: {
                                "templateOptions.disabled": "true"
                            }
                        }
                    ]
                },
                {
            	    template: '<div><p><strong>Re-inspection fees may be assessed when an inspection of a previous non-compliance is performed and/or when the number of inspections included in the permit fees has been exceeded (minimum 1 hour). PLEASE ENSURE INSPECTION REQUEST IS SUBMITED.</strong></p></div>'
            	},
            ]
        }
    ] 
};
   
module.exports.formSchema = formSchema;
