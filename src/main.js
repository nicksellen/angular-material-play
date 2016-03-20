import angular from 'angular';
import ngMaterial from 'angular-material';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import uiRouter from 'angular-ui-router';

import MainCtrl from './MainCtrl';

import MaterialConfig from './MaterialConfig';
import HttpConfig from './HttpConfig';
import RouteConfig from './RouteConfig';

import FooDirective from './FooDirective';

import SomeService from './SomeService';

const app = angular.module('App', [ngMaterial, uiRouter]);

app.config(RouteConfig);
app.config(HttpConfig);
app.config(MaterialConfig);
app.controller('MainCtrl', MainCtrl);
app.service('someService', SomeService);
app.directive('foo', FooDirective);

app.run(($rootScope, $templateCache) => {
  "ngInject";
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});