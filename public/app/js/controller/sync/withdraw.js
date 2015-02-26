define(['../controllers', 'jDialog', 'underscore'], function (controllers, jDialog, _) {
  controllers.controller('withdraw', [
    '$scope',
    'getWithdrawRecord',
    '$stateParams',
    'getBankCard',
    'user',
    'getBankTradeRecord',
    'updateBankInfo',
    function ($scope,
              getWithdrawRecord,
              stateParams,
              getBankCard,
              user,
              getBankTradeRecord,
              updateBankInfo) {

      var buttons;
      var bankInfoDialogStr = '';
      require(['text!../tpl/record/changeBankInfo.html'], function (data) {
        bankInfoDialogStr = _.template(data);
      });

      user.init = init;
      $scope.showBankInfo = showBankInfo;
      function init() {
        getWithdrawRecord.getData(stateParams, getWithdrawRecord_callback);

        function getWithdrawRecord_callback(data) {
          angular.extend($scope, data);

        }
      }

      init();

      function showBankInfo(transactionId) {

        getBankTradeRecord.getNewData({transactionId: transactionId}, function (data) {
          console.log(data);
          var dialog = jDialog.confirm(bankInfoDialogStr(data.model), {
              type: 'highlight',
              text: '去银行',
              handler: function (button, dialog) {
                window.open('https://portal.citidirect.com/portalservices/forms/login.pser', '_BLANK');
              }
            }, {
              type: 'normal',
              text: '修改',
              handler: function (button, dialog) {
                switchUpdateBankInfo();
              }
            },
            {
              title: "银行信息",
              width: 450,
              buttonAlign: 'center'
            }
          );

          dialog.buttons([{
            type: 'highlight',
            text: '保存',
            handler: function (buttn, dlg) {

              var update = $(".updateBankInfo");
              update.each(function(key, val){
                $(val).siblings().text($(val).val());
              });
              var option = {
                transactionId: transactionId,
                bankName: $(".defaultBankInfo.bankName").text(),
                accountName: $(".defaultBankInfo.accountName").text(),
                bankAddress: $(".defaultBankInfo.bankAddress").text(),
                swiftCode: $(".defaultBankInfo.swiftCode").text()
              }
              updateBankInfo.getNewData(option, function(data){
                console.log(data);
              })
              switchDefaultBankInfo();
            }
          },
            {
              type: 'normal',
              text: '取消',
              handler: function (buttn, dlg) {
                switchDefaultBankInfo();
              }
            }])
          buttons = dialog.dom.element.find('.j-dialog-buttons');
          buttons.eq(1).hide();
        })
      }

      function switchUpdateBankInfo() {

        var update = $(".defaultBankInfo");
        update.each(function(key, val){
          $(val).siblings().val($(val).text());
        })
        buttons.eq(0).hide();
        buttons.eq(1).show();
        $('.updateBankInfo').removeClass('hide').show();
        $('.defaultBankInfo').hide();
      }

      function switchDefaultBankInfo() {
        buttons.eq(0).show();
        buttons.eq(1).hide();
        $('.updateBankInfo').hide();
        $('.defaultBankInfo').show();
      }


    }])
});
