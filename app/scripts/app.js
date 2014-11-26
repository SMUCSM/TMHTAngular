'use strict';

/**
 * @ngdoc overview
 * @name tmhtaApp
 * @description
 * # tmhtaApp
 *
 * Main module of the application.
 */
angular
  .module('tmhtaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("home", {
        url: "/",
        controller: 'homeController',
        templateUrl: "views/main.html"
    })
    .state("about",{
        url:"/about",
        templateUrl: "views/about.html"
    });
  });
