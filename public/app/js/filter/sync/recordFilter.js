define(['../filters', 'underscore'], function (filters, _) {
  filters.filter('recordFilter', ['recordHeader', function (recordHeader) {

    return function (arr) {


      //充值状态过滤
      if(recordHeader.currentStatus === 0 || recordHeader.currentStatus) {
        arr = _.filter(arr, function(val, key) {
          return val.status == recordHeader.currentStatus;
        })
      }

      //买家过滤
      if(recordHeader.currentBuyerId === 0 || recordHeader.currentBuyerId) {
        arr = _.filter(arr, function(val, key) {
          return val.buyerId == recordHeader.currentBuyerId;
        })
      }

      //时间过滤

      //交易单的创建时间或者成交时间大于 操作人选择的开始时间。
      if(recordHeader.startTime){
        arr = _.filter(arr, function(val, key) {
          return val.timeCreateStamp > recordHeader.startTime ||(val.timeSuccessStamp?val.timeSuccessStamp:val.timeCreateStamp) > recordHeader.startTime;
        })
      }
      if(recordHeader.endTime) {
        arr = _.filter(arr, function(val, key) {
          return (val.timeSuccessStamp?val.timeSuccessStamp:val.timeCreateStamp) < recordHeader.endTime;
        })
      }

      //充值状态 排序
      if(!arr[0].status2) {
        _.each(arr, function(val, key) {
          if(val.status == -1) {
            val.status2 = 3;
          }else if(val.status == 2) {
            val.status2 = 1;
          } else {
            val.status2 = 2;
          }

        })
      }
      if(arr[0].status2) {
        arr.sort(function (obj1, obj2) {
          return obj1.status2 - obj2.status2
        })
      }


      return arr;

    }
  }])
})
