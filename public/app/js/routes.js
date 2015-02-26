'use strict';

define(['angular', 'app'], function (angular, app) {

  return app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/record/recharge');
    $stateProvider
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
          },
          'footer@record': {
            templateUrl: 'app/tpl/record/footer.html',
            'controller': ''
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
        url: '/trade?pageSize&pageNum',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/trade.html',
            'controller': 'trade'
          }
        }
      })
      .state('record.withdraw', {
        url: '/withdraw?pageSize&pageNum',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/withdraw.html',
            'controller': 'withdraw'
          }
        }
      })
      .state('record.users', {
        url: '/users?pageSize&pageNum',
        views: {
          'body@record': {
            templateUrl: 'app/tpl/record/users.html',
            'controller': 'users'
          }
        }
      })
      .state('rechargeDetail', {
        url: '/rechargeDetail?transactionNumber',
        views: {
          '': {
            templateUrl: 'app/tpl/detail/recharge.html',
            controller: 'rechargeDetail'
          }
        }
      })
      .state('consumeDetail', {
        url: '/consumeDetail?transactionNumber',
        views: {
          '': {
            templateUrl: 'app/tpl/detail/consume.html',
            controller: 'consumeDetail'
          }
        }
      })
      .state('bankTemplate', {
        url:'/bankTemplate',
        views: {
          '': {
            templateUrl: 'app/tpl/banktemplate.html',
            controller: 'banktemplate'
          }
        }
      })
      .state('bankCardInfo', {
        url: '/bankCardInfo?buyerId',
        views: {
          '': {
            templateUrl: 'app/tpl/bankCardInfo.html',
            controller: 'bankCardInfo'
          }
        }
      })
  });

});

