/*!
 * Bedrock Credential Card Displayers
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './card-displayer-service',
  './credential-card-displayer-component',
  './loyalty-card-credential-displayer-component',
  './identity-card-credential-displayer-component',
  './motor-vehicle-license-credential-displayer-component'
], function(angular) {

'use strict';

var module = angular.module('bedrock.card-displayer', []);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});
