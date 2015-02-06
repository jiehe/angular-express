/**
 * Created by dong on 2015/2/6.
 */

define(['../controllers'], function (controllers) {
  controllers.controller('banktemplate', ['$scope', function ($scope) {

    $scope.fileUpdate = function () {
      var $file = document.getElementById('file-to-upload').files[0];
      console.info($file);
      $upload.upload({
        url: 'http://localhost:8888/api/ImageMetaData',
        method: "POST",
        data: {data: $scope.imgObj},
        file: $file
      }).then(function (response) {
        $scope.getImgMetaData($scope.id)
        $('#ImageMetaFrom').modal('hide');

      });
    }
  }])
})