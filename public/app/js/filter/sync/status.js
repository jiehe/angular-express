/**
 * Created by dong on 2015/2/6.
 */

define(['../filters'], function(filters){
  filters.filter('status', [function(){
    return function(status) {
      switch(status)
      {
        case 0:
          return "充值中";
        break;
        case 1:
          return "充值成功";
        break;
        case 2:
          return "充值失败";
        break;
      }
    }
  }])
})
