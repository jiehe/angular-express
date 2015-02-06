
define(['../filters'], function(filters){
  filters.filter('method', [function(){
    return function(status) {
      switch(status)
      {
        case 1:
          return "T/T";
          break;
        case 2:
          return "Paypal";
          break;
        case 3:
          return "现金";
          break;
      }
    }
  }])
})
