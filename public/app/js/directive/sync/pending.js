/**
 * Created by dong on 2015/2/4.
 */

define(['../directives', 'jDialog', 'underscore', 'jquery'], function(directives, jDialog, _, $){

  directives.directive('pending', [
    'getBankTradeRecord',
    'operator',
    'email',
    function(
      getBankTradeRecord,
      operator,
      email
    ){

    var ensureDialogStr = '';
    var failedDialogStr = '';
    require(['text!../tpl/record/ensureDialog.html'], function(data){
      ensureDialogStr = _.template(data);
    });
 require(['text!../tpl/record/failedDialog.html'], function(data){
   failedDialogStr = _.template(data);
    });

    return {
      restrict: 'AE',
      templateUrl: function(tElement, tArrs) {
        var type = tArrs.type;
        return 'app/tpl/directive/pending/'+ type +'.html';
      },
      scope:{
        number: '@',
        item: '@',
        transactionId: '@',
        type: '@'
      },
      transclude : true,
      link: function(scope, element, attr) {
        scope.showHandle = false;
        element.bind('mouseenter', function() {
          scope.showHandle = true;
          scope.$apply();
        });
        element.bind('mouseleave', function() {
          scope.showHandle = false;
          scope.$apply();
        })
        var item = JSON.parse(scope.item);

        scope.emailRemindPay = function(transactionId) {
          email.emailRemindPay({transactionId:transactionId}, function(data){
            console.log(data);
            if(data) {
              alert('催款成功!');
            }else {
              alert('失败'+ data);
            }
          })
        }

        scope.ensure = function() {

          getBankTradeRecord.getNewData({transactionId: scope.transactionId}, function(data){
            var addAttr = addAttrForTemplate();
            angular.extend(data.model,addAttr );
            jDialog.alert(ensureDialogStr(data.model), {
              text : '确认',          // 按钮上要显示的文字（建议字数不要超过4）
              type : 'highlight',       // 按钮类型，可选：highlight，normal
              handler : function(button,dialog){  // 按钮的点击处理事件
                // 两个参数说明：button表示当前按钮的jQuery对象
                // dialog表示当前对话框对象
                var option = {
                  note:dialog.dom.element.find('textarea').val(),
                  transactionId: item.transactionId,
                  transactionType: item.transactionType
                }

                operator.ensure(option, function(data){
                  if(data.error) {
                    alert(data.errorMsg);
                  }else{
                    alert('操作成功！');
                  }
                })
                dialog.hide();
              }
            }, {
              title : "确认充值!",
              width : 450,
              buttonAlign: 'center'
            });

          })
        }

        scope.failed = function () {

          jDialog.alert(failedDialogStr(item), {
            text : '确认',          // 按钮上要显示的文字（建议字数不要超过4）
            type : 'highlight',       // 按钮类型，可选：highlight，normal
            handler : function(button,dialog){  // 按钮的点击处理事件
              // 两个参数说明：button表示当前按钮的jQuery对象
              // dialog表示当前对话框对象
              var option = {
                note:dialog.dom.element.find('textarea').val(),
                transactionId: item.transactionId,
                transactionType: item.transactionType
              }

              operator.failed(option, function(data){
                if(data.error) {
                  alert(data.errorMsg);
                }else{
                  alert('操作成功！');
                }
              })
              dialog.hide();
            }
          }, {
            title : "充值失败备注",
            width : 450,
            buttonAlign: 'center'
          });
        }
        function addAttrForTemplate(){
          if(scope.type == 'recharge') {
            return {
              "title1": '到账金额($) :',
              "title2": '实充金额($) :'
            }
          }
          return {
            "title1": '申请提现金额($) :',
            "title2": ' 实现提现金额（$） :'
          }
        }
      }
    }
  }])
})