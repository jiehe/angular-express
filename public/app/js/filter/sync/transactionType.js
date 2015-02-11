
define(['../filters'], function(filters){
  filters.filter('transactionType', [function(){
    return function(status) {
      switch(status)
      {
        case 1:
          return "充值";
          break;
        case 2:
          return "提现";
          break;
        case 3:
          return "消费";
          break;
      }
    }
  }])
})
