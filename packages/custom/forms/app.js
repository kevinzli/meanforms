'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Forms = new Module('forms');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Forms.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Forms.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Forms.menus.add({
    title: 'Forms',
    link: 'forms landing page',
    // roles: ['authenticated'],
    menu: 'main'
  });
  
  Forms.aggregateAsset('js', '../lib/api-check/dist/api-check.js', { weight: 1 });
  Forms.aggregateAsset('js', '../lib/lodash/dist/lodash.js', { weight: 2 });
  Forms.aggregateAsset('js', '../lib/angular-formly/dist/formly.js', { weight: 3 });
  Forms.aggregateAsset('js', '../lib/angular-wizard/dist/angular-wizard.js', { weight: 4 });
  Forms.aggregateAsset('js', '../lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js', { weight: 5 });

  Forms.angularDependencies(['formly', 'formlyBootstrap', 'mgo-angular-wizard']);

  Forms.aggregateAsset('css', 'forms.css');
  Forms.aggregateAsset('css', '../lib/angular-wizard/dist/angular-wizard.css');
  Forms.aggregateAsset('css', 'theme_styles.css');
  

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Forms.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Forms.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Forms.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Forms;
});
