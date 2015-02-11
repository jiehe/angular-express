/**
 * Created by dong on 2015/2/4.
 */

define(['../filters'], function (filters) {

  filters.filter('orderByCreateTime', function () {

    return function (arr, up) {

      if(!arr) return;

      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i].timeCreateStamp = new Date(arr[i].createTime).getTime();
        arr[i].timeSuccessStamp = new Date(arr[i].completeTime).getTime();
      }
      if(up){//升序
        arr.sort(function (obj1, obj2) {
          return obj2.timeCreateStamp - obj1.timeCreateStamp
        })
      } else { //降序
        arr.sort(function (obj1, obj2) {
          return obj1.timeCreateStamp - obj2.timeCreateStamp
        })
      }
      return arr;
    }

  })
})
