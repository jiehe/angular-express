/**
 * Created by dong on 2015/2/4.
 */

define(['../directives', 'jDialog', 'underscore', 'jquery'], function(directives, jDialog, _, $){

  directives.directive('pending', ['getBankTradeRecord',  function(getBankTradeRecord){

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
      template:'<div ng-transclude></div>'
      + '<div class="recharge-handle btn btn-warning" ng-show="showHandle">'
      + '<a ng-click="ensure()">确认充值</a><br>'
      + '<a ng-click="failed()" >确认失败</a><br>'
      + '<a >邮件催款</a><br>'
      + '<a >导入银行记录</a>'
      + '</div>',
      scope:{
        item: '@'
      },
      transclude : true,
      link: function(scope, element, attr) {
        console.log(scope.item);
        scope.showHandle = false;
        element.bind('mouseenter', function() {
          scope.showHandle = true;
          scope.$apply();
        });
        element.bind('mouseleave', function() {
          scope.showHandle = false;
          scope.$apply();
        })

        scope.ensure = function() {

          getBankTradeRecord.getNewData({}, function(data){

            jDialog.alert(ensureDialogStr(data), {
              text : '确认',          // 按钮上要显示的文字（建议字数不要超过4）
              type : 'highlight',       // 按钮类型，可选：highlight，normal
              handler : function(button,dialog){  // 按钮的点击处理事件
                // 两个参数说明：button表示当前按钮的jQuery对象
                // dialog表示当前对话框对象
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
          jDialog.alert(failedDialogStr(JSON.parse(scope.item)), {
            text : '确认',          // 按钮上要显示的文字（建议字数不要超过4）
            type : 'highlight',       // 按钮类型，可选：highlight，normal
            handler : function(button,dialog){  // 按钮的点击处理事件
              // 两个参数说明：button表示当前按钮的jQuery对象
              // dialog表示当前对话框对象
              dialog.hide();
            }
          }, {
            title : "充值失败备注",
            width : 450,
            buttonAlign: 'center'
          });
        }
      }
    }
  }])
})