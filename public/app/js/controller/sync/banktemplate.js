/**
 * Created by dong on 2015/2/6.
 */

define(['../controllers', 'uploadFile', 'jDialog'], function (controllers, uploadFile, jDialog) {
  controllers.controller('banktemplate', ['$scope', 'importBankInfo', function ($scope, importBankInfo) {


    //$('#file_upload').uploadify({
    //  'formData': {
    //  },
    //  'swf': '/app/js/lib/uploadify.swf',
    //  'uploader': '/fileuploadservice/uploadExcel.gm',
    //  'method': 'post',
    //  'onUploadComplete': function(data) {
    //    console.log(data);
    //  }
    //});
    var time = '';
    var obj;
    var callBackData;
    $('#btn_upload').click(function() {


      time = setInterval(function() {
        obj =$('iframe')[0].contentWindow.document.getElementsByTagName('pre');
        if(obj.length>0) {

          try{
            callBackData = JSON.parse(obj[0].innerHTML);
            if(callBackData.models[0].success) {
              var url = callBackData.models[0].url;
              importBankInfo.getNewData({filePath: url},function(data){
                jDialog.alert(data.message);
                clearInterval(time);
              })
            }else {
              alert('上传失败'+JSON.stringify(callBackData));
            }
          }catch(e){
            jDialog.alert(e);
          }

        }
      },1000)
    })

  }])
})