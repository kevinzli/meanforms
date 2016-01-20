'use strict';

var formSchema = {
	model: {

	},
	fields: [{
		name: 'step1',
		formName: 'vm.forms.step1',
		title: 'A. WORK CLASS',
		header: 'A. PERMIT WORK CLASS',
		buttonText: 'Continue',
		fields: [{
			key: 'permitWorkClass',
			type: 'bcsa_multiCheckbox',
			templateOptions: {
				label: 'please choose only one option',
				options: [{
					id: "hotWaterBoiler",
					title: "Hot Water Boiler"
				}, {
					id: "potableHotWaterBoiler",
					title: "Potable Hot Water Boiler"
				}, {
					id: "thermalFluidBoilerLp",
					title: "Thermal Fluid Boiler LP"
				}, {
					id: "thermalFluidBoilerHp",
					title: "Thermal Fluid Boiler HP"
				}, {
					id: "steamBoilerLp",
					title: "Steam Boiler LP"
				}, {
					id: "steamBoilerHp",
					title: "Steam Boiler HP"
				}],
				valueProp: 'id',
				labelProp: 'title',
				//required: true
			}
		}, ]
	}, {
		name: 'step2',
		formName: 'vm.forms.step2',
		title: 'B. APPLICANT',
		header: 'B. APPLICANT CONTACT INFORMATION',
		buttonText: 'Continue',
		fields: [{
			key: 'contractorName',
			type: 'input',
			templateOptions: {
				label: 'Contractor Name (as shown on the contractor license)',
				//required: true
			},
		}, {
			key: 'contractorLicenseNumber',
			type: 'input',
			templateOptions: {
				label: 'Contractor License #'
			}
		}, {
			key: 'licenseType',
			type: 'bcsa_multiCheckbox',
			templateOptions: {
				label: 'License type',
				options: [{
					id: "a",
					title: "A"
				}, {
					id: "b",
					title: "B"
				}],
				valueProp: 'id',
				labelProp: 'title',
				//required: true
			}
		}, {
			key: 'emailAddress',
			type: 'input',
			templateOptions: {
				label: 'Email address',
				required: true
			}
		}, {
			key: 'contactNamePhone',
			type: 'input',
			templateOptions: {
				label: 'Contact Name/Phone #',
				required: true
			}
		}, {
			key: 'preferredMethodofContact',
			type: 'bcsa_multiCheckbox',
			templateOptions: {
				label: 'Preferred method of contact',
				options: [{
					id: "email",
					title: "Email"
				}, {
					id: "mail",
					title: "Mail"
				}],
				valueProp: 'id',
				labelProp: 'title',
				//required: true
			}
		}]
	}, {
		name: 'step3',
		formName: 'vm.forms.step3',
		title: 'C. SITE',
		header: 'C. SITE/PLANT INFORMATION',
		buttonText: 'Continue',
		fields: [{
			key: 'sitePlantName',
			type: 'input',
			templateOptions: {
				label: 'Site/Plant Name',
				//required: true
			}
		}, {
			key: 'plantNumber',
			type: 'input',
			templateOptions: {
				label: 'Plant number',
				//required: true
			}
		}, {
			key: 'site_contactName',
			type: 'input',
			templateOptions: {
				label: 'Contact Name',
				//required: true
			}
		}, {
			key: 'site_contactEmail',
			type: 'input',
			templateOptions: {
				label: 'Contact Email',
				//required: true
			}
		}, {
			key: 'site_contactPhone',
			type: 'input',
			templateOptions: {
				label: 'Contact Phone #',
				//required: true
			}
		}, {
			key: 'site_address',
			type: 'input',
			templateOptions: {
				label: 'Address',
				//required: true
			}
		}, {
			key: 'site_city',
			type: 'input',
			templateOptions: {
				label: 'City',
				//required: true
			}
		}, {
			key: 'site_postalcode',
			type: 'input',
			templateOptions: {
				label: 'Postal Code',
				//required: true
			}
		}, {
			key: 'site_province',
			type: 'input',
			templateOptions: {
				label: 'Province',
				//required: true
			}
		}]
	}, {
		name: 'step4',
		formName: 'vm.forms.step4',
		title: 'D. OWNER',
		header: 'D. OWNER INFORMATION (only if different than contact info provide fro the site/plant)',
		buttonText: 'Continue',
		fields: [{
			key: 'companyOwnerName',
			type: 'input',
			templateOptions: {
				label: 'Company Owner Name',
				//required: true
			}
		}, {
			key: 'owner_contactName',
			type: 'input',
			templateOptions: {
				label: 'Contact Name',
				//required: true
			}
		}, {
			key: 'owner_mailingAddress',
			type: 'input',
			templateOptions: {
				label: 'Mailing Address',
				//required: true
			}
		}, {
			key: 'owner_city',
			type: 'input',
			templateOptions: {
				label: 'City',
				//required: true
			}
		}, {
			key: 'owner_postalcode',
			type: 'input',
			templateOptions: {
				label: 'Postal Code',
				//required: true
			}
		}, {
			key: 'owner_province',
			type: 'input',
			templateOptions: {
				label: 'Province',
				//required: true
			}
		}, {
			key: 'owner_contactPhone_office',
			type: 'input',
			templateOptions: {
				label: 'Contact Phone Office',
				//required: true
			}
		}, {
			key: 'owner_contactPhone_mobile',
			type: 'input',
			templateOptions: {
				label: 'Contact Phone Mobile',
				//required: true
			}
		}, {
			key: 'owner_emil',
			type: 'input',
			templateOptions: {
				label: 'Contact Email',
				//required: true
			}
		}, ]
	}, {
		name: 'step5',
		formName: 'vm.forms.step5',
		title: 'E. ADDITIONAL INFO',
		header: 'E. ADDITIONAL INFORMATION',
		buttonText: 'Continue',
		fields: [{
			key: 'proposedDateofInstallation',
			type: 'input',
			templateOptions: {
				label: 'Proposed Date of Installation',
				placeholder: 'MM|DD|YYYY'
					//required: true
			}
		}, {
			key: 'pipingDesignRegistrationRequired',
			type: 'bcsa_multiCheckbox',
			templateOptions: {
				label: 'Piping Design Registration Required?',
				options: [{
					id: "no",
					title: "NO"
				}, {
					id: "yes",
					title: "YES"
				}],
				valueProp: 'id',
				labelProp: 'title',
				//required: true
			}
		}, {
			key: 'pipingDesignRegistration',
			type: 'input',
			templateOptions: {
				label: 'Please provide Piping Design Registration',
				//required: true
			}
		}, {
			key: 'codeOfDesign',
			type: 'input',
			templateOptions: {
				label: 'Code of Design',
				//required: true
			}
		}, {
			key: 'maxTemperature',
			type: 'input',
			templateOptions: {
				label: 'Max. Temparature',
				//required: true
			}
		}, {
			key: 'maxPressure',
			type: 'input',
			templateOptions: {
				label: 'Max. Pressure',
				//required: true
			}
		}, {
			key: 'maxDiameterandPipeSchedule',
			type: 'input',
			templateOptions: {
				label: 'Max. Diameter & Pipe Schedule',
				//required: true
			}
		}, {
			key: 'materialSpecifications',
			type: 'input',
			templateOptions: {
				label: 'Material Specifications',
				//required: true
			}
		}, {
			key: 'newEquipment',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'New Equipment',
				//required: true
			}
		}, {
			key: 'replacementEquipment',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Replacement Equipment',
				//required: true
			}
		}, {
			key: 'commercial',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Commercial',
				//required: true
			}
		}, {
			key: 'industrial',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Industrial',
				//required: true
			}
		}, {
			key: 'institutional',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Institutional',
				//required: true
			}
		}, {
			key: 'residential',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Residential (> than 4 units)',
				//required: true
			}
		}]
	}, {
		name: 'step6',
		formName: 'vm.forms.step6',
		title: 'F. DETAILS',
		header: 'F. DETAILS',
		buttonText: 'Continue',
		fields: [{
			key: 'details_1',
			wrapper: 'panel',
			templateOptions: {
				label: '',
			},
			fieldGroup: [{
				className: 'row',
				fieldGroup: [{
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_unitNumber',
					type: 'input',
					templateOptions: {
						label: '# of Units'
					}
				}, {
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_manufacturer',
					type: 'input',
					templateOptions: {
						label: 'Manufacturer'
					}
				}, {
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_yearBuilt',
					type: 'input',
					templateOptions: {
						label: 'Year Built'
					}
				}, {
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_crn',
					type: 'input',
					templateOptions: {
						label: 'CRN #',
						required: true
					}
				}]
			}, {
				className: 'row',
				fieldGroup: [{
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_serialNumber',
					type: 'input',
					templateOptions: {
						label: 'Serial #'
					}
				},  {
					className: 'col-sm-2 col-md-2 col-lg-2',
					key: 'details_1_capacity',
					type: 'input',
					templateOptions: {
						label: 'Capacity'
					}
				}, {
					className: 'col-sm-2 col-md-2 col-lg-2',
					key: 'details_1_capacity_unit',
					type: 'bcsa_multiCheckbox',
					templateOptions: {
						label: '',
						options: [{
							id: "btusperhour",
							title: "Btus/hr"
						}, {
							id: "lbperhour",
							title: "Lb/hr"
						}],
						valueProp: 'id',
						labelProp: 'title',
						//required: true
					}
				},  {
					className: 'col-sm-3 col-md-3 col-lg-3',
					key: 'details_1_heatingSurface',
					type: 'input',
					templateOptions: {
						label: 'Heating Surface'
					}
				},{
					className: 'col-sm-2 col-md-2 col-lg-2',
					key: 'details_1_heatingSurface_unit',
					type: 'bcsa_multiCheckbox',
					templateOptions: {
						label: '',
						options: [{
							id: "m2",
							title: "m2"
						}, {
							id: "kw",
							title: "KW"
						}],
						valueProp: 'id',
						labelProp: 'title',
						//required: true
					}
				}]
			}]
		}]
	},{
		name: 'step7',
		formName: 'vm.forms.step7',
		title: 'G. DECLARATION',
		header: 'G. DECLARATION',
		buttonText: 'Submit',
		fields: [{
			key: 'declaration_1',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'I hereby declare all information provided is accurate; incorrect information may result in the retraction of the associated permit',
				//required: true
			}
		}, {
			key: 'declaration_2',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'The contractor agrees to pay on demand any shortages or extra charges for inspection of equipment not shown herein in accordance with the BC Safety Authority Boiler &#38; Pressure Vessel fee schedule (http://www.safetyauthority.ca/boiler-pressure-vessels-fee-schedule)',
				//required: true
			}
		}, {
			key: 'declaration_3',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'The contractor agrees to follow terms & conditions attached to this installation permit (refer to back page).',
				//required: true
			}
		}, {
			key: 'declaration_4',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'The contractor agrees, after completion of work, to submit to BCSA form FRM-1149-00 (2013-04-15) "Boiler, Pressure Vessel and Refrigeration Inspection Declaration"',
				//required: true
			}
		}, {
			key: 'declaration_5',
			type: 'bcsa_checkbox',
			templateOptions: {
				label: 'Checking this box and submitting this form to BC Safety Authority via email constitutes your authorization. This has the same effect as submitting a handwritten signature.',
				//required: true
			}
		}, {
			key: 'representativeName',
			type: 'input',
			templateOptions: {
				label: 'Licensed Contractor Representative’s Name',
				//required: true
			}
		}, {
			key: 'dateSigned',
			type: 'input',
			templateOptions: {
				label: 'Date',
				//required: true
			}
		},{
			template: '<p><strong>FEE DECLARATION</strong>&nbsp;(See BCSA Website for CurrentFee Schedules at www.SafetyAuthority.ca)&nbsp;&nbsp;&nbsp;&nbsp;GST#:&nbsp;87931&nbsp;2802&nbsp;RT0001</p>',
		},{
			key: 'numberofunits',
			type: 'input',
			templateOptions: {
				label: 'Number of Units',
				//required: true
			}
		},
		{
			key: 'totalFee',
			type: 'input',
			templateOptions: {
				label: 'Total $ (Number of units X Fee)',
				//required: true
			}
		}]
	}]
};

module.exports.formSchema = formSchema;