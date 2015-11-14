'use strict';
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('ionic');
require('ionic-angular');
require('ng-cordova');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                template: require('./views/tabs.html')
            })
            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        template: require('./views/profile.html')
                    }
                }
            })
            .state('tab.game', {
                url: '/game',
                views: {
                    'tab-game': {
                        template: require('./views/game.html')
                    }
                }
            })
            .state('tab.description', {
                url: '/description',
                views: {
                    'tab-description': {
                        template: require('./views/description.html')
                    }
                }
            });
        $urlRouterProvider.otherwise('tab/game');
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};
