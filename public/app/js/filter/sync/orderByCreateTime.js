/**
 * Created by dong on 2015/2/4.
 */

define(['../filters'], function (filters) {

  filters.filter('orderByCreateTime', function () {

    return function (arr, up) {

      if(!arr) return;

      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i].timeStamp = new Date(arr[i].createTime).getTime();
      }
      if(up){//升序
        arr.sort(function (obj1, obj2) {
          return obj2.timeStamp - obj1.timeStamp
        })
      } else { //降序
        arr.sort(function (obj1, obj2) {
          return obj1.timeStamp - obj2.timeStamp
        })
      }
      return arr;
    }

  })
})
