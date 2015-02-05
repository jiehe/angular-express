'use strict';

define(['angular', 'app'], function (angular, app) {

  return app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/record/recharge');
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
            templateUrl: 'app/tpl/record/header.html',
            controller: 'record.header'
          },
          'body@record': {
            templateUrl: 'app/tpl/record/recharge.html',
            'controller': 'recharge'
          }
        }
      })
      .state('record.recharge', {
        url: '/recharge?pageSize&pageNum',
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
      .state('rechargeDetail', {
        url: '/rechargeDetail',
        views: {
          '': {
            templateUrl: 'app/tpl/detail/recharge.html',
            controller: 'rechargeDetail'
          }
        }
      })
      .state('withdrawDetail', {
        url: '/withdrawDetail',
        views: {
          '': {
            templateUrl: 'app/tpl/detail/withdraw.html',
            controller: 'withdrawDetail'
          }
        }
      })
  });

});

