angular.module('Goody', [
  'ngRoute',
  'mobile-angular-ui',
  'Goody.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});