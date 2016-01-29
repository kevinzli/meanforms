'use strict';

/* jshint -W098 */
angular.module('mean.forms').controller('FormController', ['$scope', 'Global', 'Forms', '$stateParams', '$uibModal', '$state', '$sce','$location',
    function($scope, Global, Forms, $stateParams, $uibModal, $state, $sce, $location) {
        $scope.global = Global;
        $scope.package = {
            name: 'forms'
        };

        $scope.dataLoaded = false;

        $scope.formObjectId = $stateParams.formObjectId;

        Forms.getFullForm($scope.formObjectId).then(function(response) {
            $scope.formSchema = response.data.formSchema;
            $scope.form = response.data.form; 

            $scope.formName = $scope.formSchema.Name;
            $scope.formLabel = $scope.formSchema.Label;

            $scope.model = $scope.form.formModel;

            $scope.contentHtml = $sce.trustAsHtml(getConfirmationPageHtml($scope.form, $scope.formName, $scope.formSchema));

            $scope.dataLoaded = true;
        }, function(response) {
            console.log("error to get the form " + $scope.formObjectId);
            var errorMsg = 'We\'re sorry, your request to get the form has failed.';
            $scope.closeAlert(0);
            $scope.addAlert({
                type: 'danger',
                msg: errorMsg
            });
        });

        function getConfirmationPageHtml(form, formName, formSchema) {
            var confirmationPageHtml = [
                '<h2>Your form' + ' has been submitted successfully.</h2>',
                generateFormContent(form, formName, formSchema),
                'Please save the link below if you need to visit this page later:',
                //$location.protocol() + '://' +$location.host() + ':' + $location.port() + '/forms/' + form._id +'/confirmation',
                '<span style="word-break: break-all">$location.absUrl()</span>',
                '<br />'
            ].join('<br />');

            return confirmationPageHtml;
        }

        function generateFormContent(form, formName, formSchema) {
            var content = '';
            content += 'Form Name: ' + formName +'<br />';
            content += 'Submitted on: ' + form.created + '<br />';
            content += 'Submitted values are:<br />';

            _.forEach(formSchema.fields, function(step, index) {
                var headerShowed = false;
                _.forEach(step.fields, function(field, index) {
                    if((field.type&&field.type==='bcsa_checkbox')||(_.has(form.formModel, field.key)&&!_.isEmpty(form.formModel[field.key]))){
                        if (!headerShowed && step.header) {
                            content += '<br />---&nbsp;' + step.header + '&nbsp;---' + '<br /><br />';
                            headerShowed = true;
                        }

                        content += generateFieldContent(field, form.formModel);
                    }
                })
            });

            return content;
        }

        function generateFieldContent(field, formModel) {
            var content = '';

            if (field.type) {
                content += (field.templateOptions.labelforEmail || field.templateOptions.label) + ':&nbsp;';
                switch (field.type) {
                    case "bcsa_checkbox":
                        content += (formModel[field.key] ? 'yes' : 'no') + '<br />';
                        break;
                    case "bcsa_multiCheckbox": //value is an array
                        var isFirstOne = true;
                        _.forEach(formModel[field.key], function(value, index) {
                            var option = _.find(field.templateOptions.options, function(o) {
                                return o.id === value;
                            });
                            if (option) {
                                if (!isFirstOne) {
                                    content += ',&nbsp;';
                                }
                                content += option.title;
                                isFirstOne = false;
                            } else {
                                content += value + '<br />';
                            }
                        });
                        break;
                    case "bcsa_radio":
                        var option = _.find(field.templateOptions.options, function(o) {
                            return o.value === formModel[field.key];
                        });
                        if (option) {
                            content += option.name + '<br />';
                        } else {
                            content += formModel[field.key] + '<br />';
                        }
                        break;
                    default:
                        content += formModel[field.key] + '<br />';
                        break;
                }
            } else { //should be panel wrapper, it will have fieldGroup to hold actual fields
                if (typeof field.fieldGroup != 'undefined' && field.fieldGroup instanceof Array) {
                    var groupModel = formModel;
                    var needBracket = false;

                    if (field.wrapper && field.wrapper === "panel") {
                        groupModel = formModel[field.key];
                        //check if panel is empty object
                        if (!_.isEmpty(groupModel)) {
                            content += (field.templateOptions.labelforEmail || field.templateOptions.label) + "&nbsp;[&nbsp;<br/>";
                            needBracket = true;
                        }
                    }

                    if (!_.isEmpty(groupModel)) {
                        _.forEach(field.fieldGroup, function(field, index) {
                            if (_.has(groupModel, field.key) || !field.key) {
                                content += generateFieldContent(field, groupModel);
                            }
                        });
                    }

                    if (field.wrapper && field.wrapper === "panel") {
                        if (needBracket) {
                            content += "&nbsp;] <br />";
                        }
                    }
                }else{
                    content += (field.templateOptions.labelforEmail || field.templateOptions.label) + ':&nbsp;';
                    content += formModel[field.key] + '<br />';
                }
            }

            return content;
        };

    }
]);