'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Forms, app, auth, database) {

  var forms = require('../controllers/forms')(Forms);
  var path = require('path');

  /**
   * Get all form schemas
   */
  app.get('/api/formschemas', forms.getSchemas);

  // app.param('formId', function(req, res, next, formId){
  //     req.formSchema= forms.getFormSchema(formId);
  //     next();
  // });

  /**
   * Get a form schema by id and version
   */
  app.get('/api/formschemas/:formId/:version', function(req, res, next){
    res.json(forms.getFormSchema(req.params.formId, req.params.version));
  });

  /**
   * Get a form description by id and version
   */
  app.get('/api/formdescriptions/:formId/:version', function(req, res, next){
    res.sendFile(path.resolve('packages/custom/forms/server/models/' + forms.getFormDescriptionPath(req.params.formId, req.params.version)));
  });

  /**
   * Get a form by id
   */
  app.get('/api/forms/:objectId', forms.getForm);

  /**
   * Create a new form
   */
  app.post('/api/forms/new', forms.create);

  /**
   * Get an existing form with schema
   */
  app.get('/api/forms/full/:objectId', forms.getFullForm);

  //from scallfording
  // app.get('/api/forms/example/anyone', function(req, res, next) {
  //   res.send('Anyone can access this');
  // });

  // app.get('/api/forms/example/auth', auth.requiresLogin, function(req, res, next) {
  //   res.send('Only authenticated users can access this');
  // });

  // app.get('/api/forms/example/admin', auth.requiresAdmin, function(req, res, next) {
  //   res.send('Only users with Admin role can access this');
  // });

  // app.get('/api/forms/example/render', function(req, res, next) {
  //   Forms.render('index', {
  //     package: 'forms'
  //   }, function(err, html) {
  //     //Rendering a view from the Package server/views
  //     res.send(html);
  //   });
  // });
};
