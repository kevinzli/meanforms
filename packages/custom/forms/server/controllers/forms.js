'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Form = mongoose.model('Form'),
    config = require('meanio').loadConfig(),
    _ = require('lodash'),
    formSchemas = require('../models/formSchema.js');

module.exports = function(Forms) {

    return {
        /**
         * Create an form
         */
        create: function(req, res) {
            var form = new Form(req.body);

            //get the form fields template
            var formTemplate= formSchemas.getFormTemplate(form.formId);

            console.log("formtemplate first step: "+formTemplate.fields[0].name);

            //TODO: generate a fields key/label pair

            //TODO: send email to CSR
            
            form.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the form'
                    });
                }

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
        getFormSchema:function(id){
            return formSchemas.getFormTemplate(id);
        }   
    };
}