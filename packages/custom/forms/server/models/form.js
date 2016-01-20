'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Form Schema
 */
var FormSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  formId: {
    type: String,
    required: true,
    //trim: true
  },
  formVersion: {
    type: String,
    required: true,
  },
  formModel: Schema.Types.Mixed
});

/**
 * Validations
 */
FormSchema.path('formId').validate(function(formId) {
  return !!formId;
}, 'formId cannot be blank');

FormSchema.path('formVersion').validate(function(formVersion) {
  return !!formVersion;
}, 'formVersion cannot be blank');

FormSchema.path('formModel').validate(function(formModel) {
  return !!formModel;
}, 'formModel cannot be blank');


mongoose.model('Form', FormSchema);
