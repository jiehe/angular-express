'use strict';

define(['angular', 'app'], function (angular, app) {

  return app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/record');
    $stateProvider
      .state('index', {
        url: '/index',
        views: {
          '': {
            templateUrl: 'app/tpl/index.html'
          },
          'header@index': {
            templateUrl: 'app/tpl/header.html'
          },
          'wrapper@index': {
            templateUrl: 'app/tpl/content/wrapper.html'
          },
          'tagCloud@index': {
            templateUrl: 'app/tpl/aside/tagCloud.html',
            controller: 'tagCloud'
          },
          'tagArticle@index': {
            templateUrl: 'app/tpl/aside/tagArticle.html',
            controller: 'tagArticle'
          },
          'footer@index': {
            templateUrl: 'app/tpl/footer.html'
          }
        }
      })
      .state('index.article', {
        url: '/article/:id',
        views: {
          'wrapper@index': {
            templateUrl: function (stateParam) {
              return 'app/tpl/article/' + stateParam.id + '.html'
            }
          }
        }
      })
      .state('record', {
        url: '/record',
        views: {
          '': {
            templateUrl: 'app/tpl/record/index.html'
          },
          'header@record': {
            templateUrl: 'app/tpl/record/header.html'
          },
          'body@record': {
            templateUrl: 'app/tpl/record/recharge.html',
            'controller': 'recharge'
          },
          'footer@record': {
            templateUrl: 'app/tpl/record/footer.html'
          }
        }
      })
      .state('record.recharge', {
        url: '/recharge',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/recharge.html',
            'controller': 'recharge'
          }
        }
      })
      .state('record.trade', {
        url: '/trade',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/trade.html',
            'controller': 'trade'
          }
        }
      })
      .state('record.withdraw', {
        url: '/withdraw',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/withdraw.html',
            'controller': 'withdraw'
          }
        }
      })
  });

});

