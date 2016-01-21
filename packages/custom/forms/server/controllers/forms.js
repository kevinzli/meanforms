'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Form = mongoose.model('Form'),
    config = require('meanio').loadConfig(),
    _ = require('lodash'),
    async = require('async'),
    nodemailer = require('nodemailer'),
    formSchemas = require('../models/formSchema.js');

/**
 * Send email to CSR
 */
function sendMail(mailOptions) {
    var transport = nodemailer.createTransport(config.mailer);
    transport.sendMail(mailOptions, function(err, response) {
        if (err) return err;
        return response;
    });
}

function write_csr_email(req, form, formName, mailOptions) {
    mailOptions.html = [
      'Hi,<br />',
      'A ' + formName +' has been submitted.<br />',
      'Please click on the link below or paste this into your browser to review the form:',
      'http://' + req.headers.host + '/forms/'+ form.formId +'/' + form.formVersion+'/' + form._id
    ].join('<br />');
    mailOptions.subject = 'Notification of form submission';
    return mailOptions;
  }

module.exports = function(Forms) {

    return {
        /**
         * Create an form
         */
        create: function(req, res) {
            var form = new Form(req.body);
            form.status='new';

            //get form defination
            var formDefination = _.find(formSchemas.getForms(), {
                'id': form.formId
            });

            var formName= formDefination&&formDefination.name;

            
            //get the form fields template
            //var formTemplate= formSchemas.getFormSchema(form.formId, form.formVersion);

            //console.log("formtemplate first step: "+formTemplate.fields[0].name);

            //TODO: generate a fields key/label pair

            //save form to MongoDB
            form.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the form'
                    });
                }

                var mailOptions = {
                        to: config.csrEmail,
                        from: config.emailFrom
                    };

                mailOptions = write_csr_email(req, form, formName, mailOptions);
                sendMail(mailOptions);

                res.json(form);
            });
        },
        /**
         * Get all form schemas
         */
        getSchemas: function(req, res){
            res.json(formSchemas.getForms());
        },
        /**
         * Get a form schema by id
         */
        getFormSchema:function(id, version){
            return formSchemas.getFormSchema(id, version);
        },
        /**
         * Get a form by objectId
         */
        getForm:function(req, res){
            var objectId=req.params.objectId;
            var query = Form.findById(objectId);

            query.exec(function (err, form){
                if (err) { 
                    return res.status(500).json({
                        error: 'Error happens when finding the form'
                    }); 
                }
                if (!form) { 
                    return res.status(500).json({
                        error: 'Cannot find the form'
                    }); 
                }

                res.json(form);
            });
        } 
    };
}